import React, { useContext, useEffect } from "react";
import { RoomsContext } from "../../../context/rooms/roomsContext";
import RoomTypesContent from "./RoomTypesComponents/RoomTypesContent";
import AOS from 'aos'
import 'aos/dist/aos.css'

const RoomTypes = () => {
    const rooms = useContext(RoomsContext)
    const openTypes = () => {
        rooms.getRooms()
    }
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className="rooms-type" data-aos="fade-up">
            <div className="container">
                <h2 className="rooms-type__title" >Whatever you like.</h2>
                <p className="rooms-type__text">
                    Do you like to enjoy a simple and spacious apartment? With our company you will find exactly the options that will suit you best!
                </p>
                {
                    rooms.disable
                        ? <button onClick={openTypes} className="rooms-type__button">
                            <a>
                                <svg>
                                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                </svg>Find all offers
                            </a>
                        </button>
                        : <RoomTypesContent rooms={rooms.rooms}></RoomTypesContent>
                }

                {
                    rooms.loading
                        ? <p className="rooms-type__preloader">Loading...</p>
                        : null
                }
            </div>

        </section>
    );
}

export default RoomTypes;