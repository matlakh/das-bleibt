import { useContext } from "react";
import { BookContext } from "../../context/book/bookContext";

const BookPageRoomCard = (props) => {
    const { selectRoom, calcAmount, selectRoomPrice, getCountNight } = useContext(BookContext)

    const selectRoomName = () => {
        selectRoom(props.room.name)
        selectRoomPrice(calcAmount(props.data, props.room.cost))
    }

    return (
        <div className="book-page__card">
            <img className="book-page__card--img" src={props.room.roomImg} alt="" />
            <div className="book-page__card--content">
                <h2 className="book-page__card--title">{props.room.name}</h2>
                <div className="book-page__card--desc">
                    <p className="book-page__card--price"><span className="book-page__card--price--span">from € {calcAmount(props.data, props.room.cost)}, -</span><span>price for {getCountNight(props.data)} nights</span></p>
                    <p className="book-page__card--square">approx. {props.room.square} m² </p>
                </div>
                <button onClick={selectRoomName} className='book-page__card--button'>Book</button>
            </div>
        </div>
    );
}

export default BookPageRoomCard;