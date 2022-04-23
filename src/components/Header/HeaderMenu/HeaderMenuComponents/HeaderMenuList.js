import React, { useContext } from "react";
import { BrowserRouter, Link } from 'react-router-dom'
import { AuthContext } from "../../../../context/auth/authContext";
import { MenuContext } from "../../../../context/menu/menuContext";

const HeaderMenuList = () => {
    const menu = useContext(MenuContext)
    const auth = useContext(AuthContext)

    const logout = () => {
        menu.closeMenu()
        auth.logout()
    }
    return (

        <ul className="navigation__menu">
            <li><Link onClick={menu.closeMenu} to="/">Home</Link></li>
            {
                auth.token !== null
                    ?
                    <>
                        <li><a onClick={logout}>Log Out</a></li>
                    </>
                    :
                    <>
                        <li><a onClick={menu.openAuth}>Authorization</a></li>
                    </>
            }
            <li><Link onClick={menu.closeMenu} to="/book">Book Now</Link></li>
        </ul>

    )
}
export default HeaderMenuList