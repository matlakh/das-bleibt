import React, { useContext } from 'react'
import { MenuContext } from '../../context/menu/menuContext'
import HeaderBook from './HeaderComponents/HeaderBook'
import HeaderLogo from './HeaderComponents/HeaderLogo'
import HeaderMenu from './HeaderMenu/HeaderMenu'

const Header = () => {

    const menu = useContext(MenuContext)

    const onChange = () => {
        menu.openMenu()
    }
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner">

                        <div className="header__menu">
                            <div className="header__menu--button" onClick={onChange}>
                                <span></span>
                            </div>
                        </div>

                        <HeaderLogo></HeaderLogo>
                        <HeaderBook></HeaderBook>
                    </div>
                </div>
            </header>

            <HeaderMenu menuOpen={menu.isOpen ? 'show' : ''}></HeaderMenu>
        </>
    )


}

export default Header