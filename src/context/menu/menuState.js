import React, { useReducer } from 'react'

import { menuReducer } from './menuReducer'
import { MenuContext } from './menuContext'
import { CLOSE_AUTH, CLOSE_MENU, CLOSE_SUCCESS, OPEN_AUTH, OPEN_MENU, OPEN_SUCCESS } from '../types'


export const MenuState = ({ children }) => {
    const initialState = {
        isOpen: false,
        authOpen: false,
        showSuccess: false
    }

    const [state, dispatch] = useReducer(menuReducer, initialState)

    const openMenu = () => dispatch({ type: OPEN_MENU })
    const closeMenu = () => dispatch({ type: CLOSE_MENU })

    const openAuth = () => dispatch({ type: OPEN_AUTH })
    const closeAuth = () => dispatch({ type: CLOSE_AUTH })

    const openSuccess = () => dispatch({ type: OPEN_SUCCESS })
    const closeSuccess = () => dispatch({ type: CLOSE_SUCCESS })


    const { isOpen, authOpen, showSuccess } = state
    return (<MenuContext.Provider value={
        {
            openMenu,
            closeMenu,
            openAuth,
            closeAuth,
            openSuccess,
            closeSuccess,
            isOpen,
            authOpen,
            showSuccess
        }
    } > {children} </MenuContext.Provider>)
}