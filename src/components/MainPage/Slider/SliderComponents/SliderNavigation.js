import React from "react"

const SliderNavigation = (props) => {
  
    return (
        <div className="slider__navigation">
            <button onClick={() => props.swiperInit.current.swiper.slideNext()} aria-label="Next" className="slider__arrow-prev">
                <span className="arrow-prev__top"></span>
                <span className="arrow-prev__line"></span>
                <span className="arrow-prev__bottom"></span>
            </button>
            <button onClick={() => props.swiperInit.current.swiper.slidePrev()} aria-label="Next" className="slider__arrow-next">
                <span className="arrow-next__top"></span>
                <span className="arrow-next__line"></span>
                <span className="arrow-next__bottom"></span>
            </button>
        </div>
    );
}

export default SliderNavigation;