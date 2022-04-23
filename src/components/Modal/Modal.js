import React, { useContext, useRef } from "react";
import { AuthContext } from "../../context/auth/authContext";
import { MenuContext } from "../../context/menu/menuContext";
import ModalForm from "./ModalComponent/ModalForm";
import ModalSuccess from "./ModalComponent/ModalSuccess";


const Modal = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const menu = useContext(MenuContext)
    const auth = useContext(AuthContext)

    let open;

    const authClose = () => {
        menu.closeAuth()
    }

    const submitHandler = event => {
        event.preventDefault()
    }

    const registerHandler = () => {
        if (emailRef.current.value !== '' && passwordRef.current.value !== '') {
            auth.auth(emailRef.current.value, passwordRef.current.value, false)
            menu.closeAuth()
            menu.openSuccess()
            auth.isRegister = true
        }
    }

    const loginHandler = () => {
        if (emailRef.current.value !== '' && passwordRef.current.value !== '') { 
            auth.auth(emailRef.current.value, passwordRef.current.value, true)
            menu.closeAuth()
            menu.openSuccess()
            auth.isRegister = false
        }
    }

    menu.authOpen ? open = ' show-modal' : open = ''
    return (
        <>
            <div className={"modal__wrapper" + open}>
                <div className="footer__wrapper">
                    <div className="footer__inner">
                        <div className="footer__close" onClick={authClose}><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path className="a" d="M14.286 0L15 .714.714 15 0 14.286z"></path><path className="a" d="M15 14.286l-.714.714L0 .714.714 0z"></path></svg> </div>
                        <div className="footer__stay">
                            <h2 className="footer__title">Stay up to date.</h2>
                            <ModalForm
                             emailRef={emailRef} 
                             passwordRef={passwordRef}
                             submitHandler={submitHandler}
                             registerHandler={registerHandler}
                             loginHandler={loginHandler}
                             ></ModalForm>
                        </div>
                    </div>
                </div>
            </div>
            <ModalSuccess closeSuccess={menu.closeSuccess} showSuccess={menu.showSuccess} isRegister={auth.isRegister}></ModalSuccess>
        </>
    );
}

export default Modal;