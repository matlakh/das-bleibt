
import React, { useReducer } from "react";
import { GET_ROOMS, SET_LOADING } from "../types";
import { RoomsContext } from "./roomsContext";
import { roomsReducer } from "./roomsReducer";
import axios from "axios";
import { GET_ROOM } from "../types";

export const RoomsState = ({ children }) => {

    const initialState = {
        rooms: [],
        room: {},
        loading: false,
        disable: true
    }
    
    const [state, dispatch] = useReducer(roomsReducer, initialState)

    const setLoading = () => dispatch({ type: SET_LOADING })

    const getRooms = async () => {
        setLoading()
        const response = await axios.get('https://das-bleibt-default-rtdb.europe-west1.firebasedatabase.app/rooms.json')
        dispatch({
            type: GET_ROOMS,
            payload: response.data
        })
    }

    const getRoom = async name => {
        setLoading()

        const response = await axios.get(`https://das-bleibt-default-rtdb.europe-west1.firebasedatabase.app/rooms/${name}.json`)
        dispatch({
            type: GET_ROOM,
            payload: response.data
        })
    }

    const { rooms, loading, disable, room } = state
    return (
        <RoomsContext.Provider value={{ setLoading, getRooms, getRoom, rooms, loading, disable, room }}>
            {children}
        </RoomsContext.Provider>
    )
}