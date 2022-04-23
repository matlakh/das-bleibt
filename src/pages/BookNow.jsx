import React, { Fragment } from "react";
import BookPageCard from "../components/BookPage/BookPageCard";

const BookNow = () => {


    return (
        <Fragment>
            <div className="book-page">
                <div className="container">
                    <BookPageCard></BookPageCard>
                </div>
            </div>
        </Fragment>
    );
}

export default BookNow;