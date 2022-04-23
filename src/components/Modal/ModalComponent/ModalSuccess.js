import React from "react";

const ModalSuccess = (props) => {
    let open
    props.showSuccess ? open = ' show-modal' : open = ''

    return (
        <div className={"modal-success" + open}>
            <div className="modal-success__wrapper">
                <div onClick={props.closeSuccess} className="footer__close"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path className="a" d="M14.286 0L15 .714.714 15 0 14.286z"></path><path className="a" d="M15 14.286l-.714.714L0 .714.714 0z"></path></svg> </div>
                {props.isRegister
                    ? <h3 className="modal-success__title">Thank You for Registration!</h3>
                    : <h3 className="modal-success__title">Login completed successfully</h3>
                }
            </div>
        </div>
    );
    
}

export default ModalSuccess