import { useContext } from "react";
import { BookContext } from "../../context/book/bookContext";

const BookPageModal = () => {
    const { personalName } = useContext(BookContext)
    return (
        <div className="book-page__modal">
            <div className="book-page__modal--wrapper">
                <h1 className="book-page__modal--title">Thank for booking, {personalName}</h1>
                <p className="book-page__modal--message">Your personal manager will call you shortly to confirm your reservation.</p>
            </div>
        </div>
    );
}

export default BookPageModal;