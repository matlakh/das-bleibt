import React from "react";
import { BrowserRouter, Link } from 'react-router-dom'

const HeaderMenuDoplist = () => {
    return (
      
            <ul className="navigation__dopmenu">
                <li>
                    <Link to="/">Terms</Link>
                </li>
                <li>
                    <Link to="/">Policy</Link>
                </li>
            </ul> 
    )
}

export default HeaderMenuDoplist