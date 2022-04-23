import { useContext } from "react";
import { BookContext } from "../../context/book/bookContext";
import BookPageSummaryContent from "./BookPageSummaryContent";
import BookPageSummaryHeader from "./BookPageSummaryHeader";

const BookPageSummary = (props) => {
    const { selectedRoomPrice, withAnimal } = useContext(BookContext)
    return (
        <div className="book-page__summary">
            <BookPageSummaryHeader editParams='data' title='Travel Date'></BookPageSummaryHeader>
            <BookPageSummaryContent state={props.state} dataContent={true}></BookPageSummaryContent>
            <BookPageSummaryHeader editParams='rooms' title='Room'></BookPageSummaryHeader>
            <BookPageSummaryContent state={props.state} roomContent={true}></BookPageSummaryContent>
            <BookPageSummaryHeader editParams='animals' title='ADDITIONAL SERVICES'></BookPageSummaryHeader>
            <BookPageSummaryContent animalContent={true}></BookPageSummaryContent>

            <div className="book-page__summary--total">
                <p><span>Total: €
                    {
                        withAnimal ? (selectedRoomPrice + 190) : selectedRoomPrice
                    },
                    -</span><small>for all travellers</small></p>
            </div>
            <div className="book-page__summary--total attention">
                <p className="book-page__summary--attention">Local tax in the amount of € 30,00 is to be paid upon arrival and is not included in the package price.</p>
            </div>
        </div>
    );
}

export default BookPageSummary;