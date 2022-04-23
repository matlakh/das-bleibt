import { AUTH_LOGOUT, AUTH_SUCCESS, TAKE_TEXT } from "../types";

const handlers = {
    [AUTH_SUCCESS]: (state, { payload }) => ({...state, token: payload }),
    [AUTH_LOGOUT]: (state) => ({...state, token: null }),
    [TAKE_TEXT]: (state) => ({...state, isRegister: false }),
    DEFAULT: state => state
}

export const authReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}