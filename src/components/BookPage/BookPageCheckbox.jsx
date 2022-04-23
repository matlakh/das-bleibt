import React, { useContext } from "react";
import { BookContext } from "../../context/book/bookContext";


const BookPageCheckbox = (props) => {
    const { selectWithAnimalsFalse, selectWithAnimalsTrue } = useContext(BookContext)
  
 
    return (
        <div className="book-page__animals">
            <div className="book-page__animals--wrapper">

                <h2 className="book-page__animals--title">Do you take pets with you?</h2>

                <div className="book-page__animals--buttons">
                    <button onClick={selectWithAnimalsTrue} className="book-page__animals--button">Yes</button>
                    <button onClick={selectWithAnimalsFalse} className="book-page__animals--button">No</button>
                </div>

            </div>
        </div>
    );
}

export default BookPageCheckbox;