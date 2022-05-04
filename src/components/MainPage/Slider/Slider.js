import React, { useEffect } from "react";
import SliderSwiper from "./SliderComponents/SliderSwiper";
import AOS from 'aos'
import 'aos/dist/aos.css'


function Slider() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className="slider" data-aos="fade-up">
            <div className="container">
                <SliderSwiper></SliderSwiper>
            </div>
        </section>
    );
}

export default Slider;