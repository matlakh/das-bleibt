import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const FooterToTop = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return (
        <div className="footer__top">
            <div onClick={scrollToTop} className="footer__top--link" data-scroll-to="0">
                <svg className="footer__top--icon" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false"><title>Zurück</title><path d="M13 7H1m6 6L1 7l6-6" stroke="#fff"></path></svg>
                <span className="footer__top--label">Back to top</span>
            </div>
        </div>
    );
}

export default FooterToTop;