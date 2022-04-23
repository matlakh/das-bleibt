import React, { useReducer } from "react";
import { BookContext } from "./bookContext";
import { bookReducer } from "./bookReducer";
import { addDays } from 'date-fns'
import { CALENDAR_DATE, CHANGE_INPUT, CHANGE_PHONE, COMPLETE_BOOKING, EDIT_ANIMALS, EDIT_DATE, EDIT_ROOMS, SELECT_ANIMALS_FALSE, SELECT_ANIMALS_TRUE, SELECT_ROOM, SELECT_ROOM_PRICE, SET_LOADING, SHOW_ANIMALS, SHOW_PERSONALINFO, SHOW_ROOMS, SHOW_SUMMARY, VALIDATE_FORM } from "../types";

export const BookState = ({ children }) => {

    const initialState = {
        startDate: new Date(),
        endDate: addDays(new Date(), 2),
        key: 'selection',
        loadRooms: true,

        showCalendar: true,

        showRooms: false,
        showRoomsHeader: false,

        showAnimals: false,
        showAnimalsHeader: false,

        showSummary: false,
        showSummaryHeader: false,

        showPersonalInfo: false,
        showPersonalInfoHeader: false,

        selectedRoom: String(),
        selectedRoomPrice: Number(),
        withAnimal: false,

        completeBooking: false,
        personalName: String(),
        personalPhone: String(),

        showInputValidate: false,
    }

    const [state, dispatch] = useReducer(bookReducer, initialState)

    const getData = data => {
        let newData = String(data).substring(4, 15)
        return newData;
    }

    const showRoom = (typeOfContinue) => {
        switch (typeOfContinue) {
            case 'room':
                dispatch({ type: SHOW_ROOMS })
                break;
            case 'animals':
                dispatch({ type: SHOW_ANIMALS })
                break;
            case 'summary':
                dispatch({ type: SHOW_SUMMARY })
                break;
            case 'personalInfo':
                dispatch({ type: SHOW_PERSONALINFO })
                break;
            case 'complete':
                dispatch({ type: COMPLETE_BOOKING })
                break;
            default: console.log(1);
        }
    }

    const editContent = (typeOfContent) => {
        switch (typeOfContent) {
            case 'data':
                dispatch({ type: EDIT_DATE })
                break;
            case 'rooms':
                dispatch({ type: EDIT_ROOMS })
                break;
            case 'animals':
                dispatch({ type: EDIT_ANIMALS })
                break;
            default: console.log(1);
        }
    }

    const getCountNight = (data) => {
        var start = Date.parse(String(data[0].startDate))
        var end = Date.parse(String(data[0].endDate))
        var countDay = (end - start) / 86400000
        return countDay
    }

    const selectRoom = (roomName) => {
        dispatch({
            type: SELECT_ROOM,
            payload: roomName
        })
    }

    const calcAmount = (data, room) => {
        let count = getCountNight(data)
        return room * count
    }

    const selectRoomPrice = (price) => {
        dispatch({
            type: SELECT_ROOM_PRICE,
            payload: price
        })
    }

    const selectWithAnimalsTrue = () => {
        dispatch({ type: SELECT_ANIMALS_TRUE })
    }

    const selectWithAnimalsFalse = () => {
        dispatch({ type: SELECT_ANIMALS_FALSE })
    }

    const changePersonalName = (name) => {
        dispatch({
            type: CHANGE_INPUT,
            payload: name
        })
    }

    const changePersonalPhone = (phone) => {
        dispatch({
            type: CHANGE_PHONE,
            payload: phone
        })
    }

    const validateForm = () => {
        dispatch({ type: VALIDATE_FORM })
    }
    const { startDate, personalName, openModalThanks, completeBooking, showInputValidate, personalPhone, showPersonalInfoHeader, endDate, withAnimal, showSummaryHeader, showAnimalsHeader, showAnimals, night, selectedRoomPrice, loadRooms, selectedRoom, key, showRoomsHeader, showCalendar, showRooms, showSummary, showPersonalInfo } = state

    return (
        <BookContext.Provider
            value={{ startDate, openModalThanks, completeBooking, personalName, showInputValidate, changePersonalPhone, personalPhone, changePersonalName, showPersonalInfoHeader, showSummaryHeader, editContent, selectWithAnimalsTrue, selectWithAnimalsFalse, withAnimal, showAnimalsHeader, showAnimals, endDate, validateForm, selectedRoomPrice, selectRoomPrice, loadRooms, calcAmount, selectRoom, selectedRoom, showRoomsHeader, night, key, showRooms, showCalendar, showSummary, showPersonalInfo, getData, getCountNight, showRoom }}
        >
            {children}
        </BookContext.Provider>
    )
}