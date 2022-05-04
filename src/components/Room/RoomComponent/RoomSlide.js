import React from "react";
const RoomSlide = (props) => {
    return (
        <section className="slider">
            <div className="container">
                <div className="slider__inner--room" style={
                    { backgroundImage: `url(${props.roomImg})` }
                }>
                    <h2 className="slider__title">Welcome to <span>{props.name}</span></h2>
                </div>
            </div>
        </section>
    );
}

export default RoomSlide;