import React, { useContext } from 'react'
import { BookContext } from '../../context/book/bookContext';

const BookPageHeader = (props) => {

    const { getData, getCountNight, selectedRoom, withAnimal, selectedRoomPrice } = useContext(BookContext)

    return (
        <div className="book-page__header">
            <div className="book-page__header--wrapper">
                <img className="book-page__img" src={props.headerImg} />
                <div className="book-page__content">
                    <h2 className="book-page__title">{props.title}</h2>
                    {
                        props.travelHeader
                            ?
                            <p className="book-page__data">
                                {`${getData(props.state[0].startDate)} - ${getData(props.state[0].endDate)}`}
                                <span className="book-page__span">{getCountNight(props.state)} Nights</span>
                            </p>
                            : null
                    }
                    {
                        props.roomsHeader
                            ?
                            <p className="book-page__data">
                                {
                                    selectedRoom === '' ? 'Please select your desired room' : selectedRoom
                                }
                            </p>
                            : null
                    }
                    {
                        props.animalsHeader
                            ?
                            <p className="book-page__data">
                                {
                                    withAnimal ? 'Yes' : 'No'
                                }
                            </p>
                            : null

                    }
                    {
                        props.summaryHeader
                            ? <p className="book-page__data">Trip overview</p>
                            : null
                    }
                    {
                        props.personalInfoHeader
                            ?
                            <p className="book-page__data">Please enter your details to complete your online booking.</p>
                            : null
                    }
                </div>
            </div>
        </div>
    );
}

export default BookPageHeader;
