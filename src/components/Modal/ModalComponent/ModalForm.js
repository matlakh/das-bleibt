import React, { useContext, useRef } from "react";

const ModalForm = (props) => {
    return (
        <form className="footer__form" onSubmit={props.submitHandler}>
            <div className="footer__input--container">
                <input ref={props.emailRef} type="email" name="name" className="footer__input" placeholder="Email" required />
                <span className="footer__input--indecator"></span>
            </div>
            <div className="footer__input--container">
                <input ref={props.passwordRef} type="password" name="name" className="footer__input" placeholder="Password" required />
                <span className="footer__input--indecator"></span>
               
            </div>
            <span className="form-text">Must be longer than 6 symbols</span>
            <div className="footer__checkbox--container">
                <input type="checkbox" defaultChecked name="policy" className="footer__checkbox--input" />
                <span className="footer__checkbox"></span>
                <span className="footer__checkbox--label">By submitting this form, you accept our privacy
                    policy.</span>
            </div>
            <div className="footer__form--buttons">
                <button type="submit" onClick={props.loginHandler} className="footer__form--button">
                    <div>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%" />
                        </svg>LogIn
                    </div>
                </button>
                <button type="submit" onClick={props.registerHandler} className="footer__form--button">
                    <div>
                        <svg>
                            <rect x="0" y="0" fill="none" width="100%" height="100%" />
                        </svg>Register
                    </div>
                </button>
            </div>

        </form>
    )
}
export default ModalForm