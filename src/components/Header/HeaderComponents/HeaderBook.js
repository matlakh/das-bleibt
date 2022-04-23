import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
const HeaderBook = (props) => {
    return (
            <div className="header__button">
                <Link to="/book">
                    <svg>
                        <rect x="0" y="0" fill="none" width="100%" height="100%" />
                    </svg> Book Now
                </Link>
            </div>
    )
}

export default HeaderBook