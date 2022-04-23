import { CALENDAR_DATE, CHANGE_INPUT, CHANGE_PHONE, CLOSE_COMPLETE_BOOKING, COMPLETE_BOOKING, EDIT_ANIMALS, EDIT_DATE, EDIT_ROOMS, SELECT_ANIMALS_FALSE, SELECT_ANIMALS_TRUE, SELECT_ROOM, SELECT_ROOM_PRICE, SHOW_ANIMALS, SHOW_PERSONALINFO, SHOW_ROOMS, SHOW_SUMMARY, VALIDATE_FORM } from "../types";

const handlers = {
    [CALENDAR_DATE]: (state, { payload }) => ({
        ...state,
        night: payload
    }),
    [SHOW_ROOMS]: (state) => ({...state, showRoomsHeader: true, showRooms: true, loadRooms: false, showCalendar: false }),
    [SHOW_ANIMALS]: (state) => ({...state, showRooms: false, showAnimals: true, loadRooms: false, showAnimalsHeader: true }),
    [SHOW_SUMMARY]: (state) => ({...state, showAnimals: false, showSummaryHeader: true, showSummary: true }),
    [SHOW_PERSONALINFO]: (state) => ({...state, showPersonalInfoHeader: true, showSummary: false, showPersonalInfo: true }),
    [SELECT_ROOM]: (state, { payload }) => ({...state, selectedRoom: payload, showAnimals: true, showAnimalsHeader: true, showRooms: false }),
    [SELECT_ROOM_PRICE]: (state, { payload }) => ({...state, selectedRoomPrice: payload }),
    [SELECT_ANIMALS_FALSE]: (state) => ({...state, withAnimal: false }),
    [SELECT_ANIMALS_TRUE]: (state) => ({...state, withAnimal: true }),
    [EDIT_DATE]: (state) => ({
        ...state,
        showCalendar: true,
        showRooms: false,
        showRoomsHeader: false,
        showAnimals: false,
        showAnimalsHeader: false,
        showSummary: false,
        showSummaryHeader: false,
    }),
    [EDIT_ROOMS]: (state) => ({
        ...state,
        showRooms: true,
        showAnimals: false,
        showAnimalsHeader: false,
        showSummary: false,
        showSummaryHeader: false,
    }),
    [EDIT_ANIMALS]: (state) => ({
        ...state,
        showAnimals: true,
        showSummary: false,
        showSummaryHeader: false,
    }),
    [COMPLETE_BOOKING]: (state) => ({...state, completeBooking: true, showPersonalInfo: false }),
    [CHANGE_INPUT]: (state, { payload }) => ({...state, personalName: payload }),
    [CHANGE_PHONE]: (state, { payload }) => ({...state, personalPhone: payload }),
    [VALIDATE_FORM]: (state) => ({...state, showInputValidate: true }),
    DEFAULT: state => state,
}

export const bookReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}