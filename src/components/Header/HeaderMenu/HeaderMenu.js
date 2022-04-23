import React, { useContext } from "react";
import { MenuContext } from "../../../context/menu/menuContext";
import HeaderMenuDoplist from "./HeaderMenuComponents/HeaderMenuDoplist";
import HeaderMenuList from "./HeaderMenuComponents/HeaderMenuList";
const HeaderMenu = (props) => {
    const menu = useContext(MenuContext)

    const onChange = () => {
        menu.closeMenu()
    }
    return (<section className={props.menuOpen + " navigation"} >
        <div className="container" >
            <div className="navigation__inner" >

                <div className="navigation__close"
                    onClick={onChange} >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15" >
                        <path className="a"
                            d="M14.286 0L15 .714.714 15 0 14.286z" />
                        <path className="a"
                            d="M15 14.286l-.714.714L0 .714.714 0z" />
                    </svg> </div>

                <HeaderMenuList > </HeaderMenuList>
                <HeaderMenuDoplist > </HeaderMenuDoplist>
            </div>

        </div> </section>
    );

}

export default HeaderMenu;