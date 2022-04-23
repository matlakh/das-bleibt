import React, { useContext } from "react";
import { RoomsContext } from "../../context/rooms/roomsContext";
import BookPageRoomCard from "./BookPageRoomCard";

const BookPageRooms = (props) => {
    const {rooms} = useContext(RoomsContext)
    return (
        <div className="book-page__rooms">
            {
                rooms.map(room => (
                    <BookPageRoomCard key={room.id} room={room} data={props.data}></BookPageRoomCard>
                ))
            }

        </div>
    );
}

export default BookPageRooms;