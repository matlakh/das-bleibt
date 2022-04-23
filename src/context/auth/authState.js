import React, { useReducer } from "react";
import { authReducer } from './authReducer';
import { AuthContext } from './authContext'
import { AUTH_LOGOUT, AUTH_SUCCESS, TAKE_TEXT } from "../types";
import axios from "axios";

export const AuthState = ({ children }) => {
    const initialState = {
        token: null,
        showSuccess: false,
        isRegister: true
    }
    const [state, dispatch] = useReducer(authReducer, initialState)

    const auth = async (email, password, isLogin) => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBmjTzJrxJ95sPl9Iu7Yzy7XfDeoTxZle8'

        if (isLogin) {
            takeText()
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBmjTzJrxJ95sPl9Iu7Yzy7XfDeoTxZle8'
        }

        const response = await axios.post(url, authData)
        const data = response.data

        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        authSuccess(data.idToken)
        autoLogout(data.expiresIn)
    }
    const takeText = () => {
        dispatch({
            type: TAKE_TEXT
        })
    }
    const autoLogout = (time) => {
        setTimeout(() => {
            logout()
        }, time * 1000)
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('expirationDate')

        dispatch({ type: AUTH_LOGOUT })
    }

    const autoLogin = () => {
        return dispatch => {
            const token = localStorage.getItem('token')
            if (!token) {
                dispatch(logout())
            } else {
                const expirationDate = new Date(localStorage.getItem('expirationDate'))
                if (expirationDate <= new Date()) {
                    dispatch(logout())
                } else {
                    dispatch(authSuccess(token))
                    dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
                }
            }
        }
    }

    const authSuccess = (token) => {
        dispatch({ type: AUTH_SUCCESS, payload: token })
    }
    const { token, isRegister } = state

    return (
        <AuthContext.Provider value={{
            auth, autoLogout, logout, autoLogin,
            token, isRegister
        }}>
            {children}
        </AuthContext.Provider>
    )

}