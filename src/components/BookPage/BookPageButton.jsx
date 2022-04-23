import React, { useContext } from "react";
import { BookContext } from "../../context/book/bookContext";
import { RoomsContext } from "../../context/rooms/roomsContext";

const BookPageButton = (props) => {
    const { showRoom, loadRooms, personalPhone, personalName, validateForm } = useContext(BookContext)
    const rooms = useContext(RoomsContext)

    const renderCard = (e) => {
        if (props.typeOfContinue !== 'complete') {
            showRoom(props.typeOfContinue)
            if (loadRooms) {
                rooms.getRooms()
            }
        } else {
            if (personalPhone !== '' && personalName !== '') {
                showRoom(props.typeOfContinue)
            } else {
                e.preventDefault()
                validateForm()
            }
        }
    }

    return (
        <div className="book-page__button">
            <form>
                <button onClick={renderCard} type={props.type}>Continue
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA70lEQVRIie3WMUoDURCA4RAQKzshYGXhASy0tEplGxu9g/ESxkNY6RU8gGIjJOAZBAUrsZOAKPksfMH1GbBxJhb5++XjLW9np9Va9J/Cla9GWMmCb33vAu0MeB1PFT4Ihwu+g9cGPMFBFt6vTj3GdhZ+WuGPWMuAl3Bd4TdYzsBXcVfh5+FwwTfxUuH9LLxXbve0d+xm4YPq1M/YyIDbPidZs9Fvz8WPvahwkv6qsVddrjd0o9FZn9NhNNrBQ4WeRaPzGZl+/iTu0YlGjyp0jK1otFtu7bQJ9qPRWavPcSha4Lkte5cNdChrvV30F30A7hgDN1exTwwAAAAASUVORK5CYII=" />
                </button>
            </form>
        </div>
    );
}

export default BookPageButton;