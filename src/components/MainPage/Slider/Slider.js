import React, { useEffect } from "react";
import SliderSwiper from "./SliderComponents/SliderSwiper";
import AOS from 'aos'
import 'aos/dist/aos.css'


function Slider() {
  
    return (
        <section className="slider" >
            <div className="container">
                <SliderSwiper></SliderSwiper>
            </div>
        </section>
    );
}

export default Slider;