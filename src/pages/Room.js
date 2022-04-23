import React, { Fragment, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import RoomReason from "../components/Room/RoomComponent/RoomReason";
import RoomSlide from "../components/Room/RoomComponent/RoomSlide";
import { RoomsContext } from "../context/rooms/roomsContext";


const Room = () => {
    const roomData = useParams()
    const { room, getRoom, loading } = useContext(RoomsContext);

    const {
        name, roomImg, square
    } = room

    useEffect(() => {
        getRoom(roomData.id - 1)
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    return (
        <Fragment>
            <RoomSlide name={name} roomImg={roomImg}></RoomSlide>
            <RoomReason name={name} roomImg={roomImg} square={square}></RoomReason>
        </Fragment>
    )
}
export default Room