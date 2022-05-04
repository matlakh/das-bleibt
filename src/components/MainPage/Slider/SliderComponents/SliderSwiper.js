import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from "swiper";
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import SliderNavigation from "./SliderNavigation";
import AOS from 'aos'
import 'aos/dist/aos.css'

const SliderSwiper = () => {

    const swiperRef = useRef(null);
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="slider__inner" data-aos="fade-up">
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                effect={"fade"}
                modules={[EffectFade]}
                className="swiper slider__swiper"
            >
                <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide"></SwiperSlide>
                    <SwiperSlide className="swiper-slide"></SwiperSlide>
                    <SwiperSlide className="swiper-slide"></SwiperSlide>
                    <SwiperSlide className="swiper-slide"></SwiperSlide>
                    <SwiperSlide className="swiper-slide"></SwiperSlide>
                </div>

            </Swiper>
            <SliderNavigation swiperInit={swiperRef}></SliderNavigation>
        </div>
    );

}

export default SliderSwiper;