import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import RoomTypesSlide from "./RoomTypesSlide";

const RoomTypesContent = ({ rooms }) => {
    const roomTypes = useRef(null)
    return (
       
                <div className="rooms-type__inner">
                    <div className="rooms-type__header">

                        <ul className="rooms-type__list">
                            <li className="rooms-type__item rooms-type__item--after">
                                <span className="rooms-type__link rooms-type__link--active">Suites</span>
                            </li>
                            <li className="rooms-type__item">
                                <span className="rooms-type__link">Studios</span>
                            </li>
                        </ul>

                        <div className="rooms-type__navigation">
                            <button aria-label="Next" onClick={() => roomTypes.current.swiper.slidePrev()} className="arrow-prev rooms-type__navigation-item rooms-type__navigation-item--prev">
                                <span className="arrow-prev__top"></span>
                                <span className="arrow-prev__line"></span>
                                <span className="arrow-prev__bottom"></span>
                            </button>
                            <button aria-label="Next" onClick={() => roomTypes.current.swiper.slideNext()} className="arrow-next rooms-type__navigation-item rooms-type__navigation-item--next">
                                <span className="arrow-next__top"></span>
                                <span className="arrow-next__line"></span>
                                <span className="arrow-next__bottom"></span>
                            </button>
                        </div>

                    </div>
                    <Swiper
                        ref={roomTypes}
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        className="rooms-type__swiper">
                        <div className="swiper-wrapper rooms-type__container">
                            {
                                rooms.map(room => (
                                    <SwiperSlide className="swiper-slide rooms-type__slide" key={room.id} style={{ backgroundImage: `url(${room.roomImg})` }}>
                                        <RoomTypesSlide room={room}></RoomTypesSlide>
                                    </SwiperSlide>
                                ))
                            }
                        </div>
                    </Swiper>
                    <p className="rooms-type__attention">All of our studios & suites are equipped with their own sauna.</p>
                </div>
          
    );
}

export default RoomTypesContent;