import React from "react";
import { Link, Outlet } from "react-router-dom";


const RoomTypesSlide = ({ room }) => {

    return (
        <>   <Link to={'/rooms/room-' + room.id} className="rooms-type__content">
            <h3 className="rooms-type__name">{room.name}</h3>
            <div className="rooms-type__info">
                <p className="rooms-type__capacity">max.{room.persons} Persons, approx. {room.square}m²</p>
                <p className="rooms-type__price">from {room.cost}€</p>
            </div>
        </Link>
          
        </>


    );
}

export default RoomTypesSlide;