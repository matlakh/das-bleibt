import { CLOSE_AUTH, CLOSE_MENU, CLOSE_SUCCESS, OPEN_AUTH, OPEN_MENU, OPEN_SUCCESS } from "../types";


const handlers = {
    [OPEN_MENU]: (state) => ({...state, isOpen: true }),
    [CLOSE_MENU]: (state) => ({...state, isOpen: false }),
    [OPEN_AUTH]: (state) => ({...state, isOpen: false, authOpen: true }),
    [CLOSE_AUTH]: (state) => ({...state, authOpen: false }),
    [OPEN_SUCCESS]: (state) => ({...state, showSuccess: true }),
    [CLOSE_SUCCESS]: (state) => ({...state, showSuccess: false }),
    DEFAULT: state => state
}

export const menuReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}