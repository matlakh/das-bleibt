import React from "react";

const RoomReason = (props) => {
    return (
        <section className="reason">
            <div className="container">
                <div className="reason__inner">
                    <img className="reason__img" src={props.roomImg} />
                    <div className="reason__text">
                        <h3 className="reason__title">Many reasons to stay.</h3>
                        <p>In the {props.name},
                            you can really live it up.
                            Four to six people can easily fit
                            into the two bedrooms and huge living
                            room with kitchen. And with two
                            fully-equipped bathrooms and an extra
                            washroom with toilet, there’s no morning
                            traffic. Oh, and as it’s got a loggia with
                            private mountain pine sauna.
                            Area - {props.square}m²
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RoomReason;