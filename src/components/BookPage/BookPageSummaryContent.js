import React, { useContext } from "react"
import { BookContext } from "../../context/book/bookContext";

const BookPageSummaryContent = (props) => {
    console.log(props.state);
    const { getData, getCountNight, selectedRoomPrice, selectedRoom, withAnimal } = useContext(BookContext)
    return (
        <>
            {
                props.dataContent
                    ?
                    <div className="book-page__summary--content">
                        <div className="book-page__summary--container">
                            <div className="book-page__summary--titles">
                                <p>Arrival and departure</p>
                                <p>Arrival</p>
                                <p>Departure</p>
                                <p>Stay</p>
                            </div>
                            <div className="book-page__summary--dates">
                                <p>{`${getData(props.state[0].startDate)} - ${getData(props.state[0].endDate)}`}</p>
                                <p>{getData(props.state[0].startDate)}</p>
                                <p>{getData(props.state[0].endDate)}</p>
                                <p>{getCountNight(props.state)} Nights</p>
                            </div>
                        </div>
                    </div>
                    : null
            }
            {
                props.roomContent
                    ?
                    <div className="book-page__summary--content" >
                        <div className="book-page__summary--info">
                            <p><strong>{selectedRoom}</strong></p>
                            <p>{getCountNight(props.state)} overnight stays with flexible board</p>
                            <p>Final Cleaning (€ 85,00)</p>
                        </div>
                        <div className="book-page__summary--price">
                            <p>€ {selectedRoomPrice}, -</p>
                        </div>
                    </div>
                    : null
            }
            {
                props.animalContent
                    ?
                    <div className="book-page__summary--content">
                        <div className="book-page__summary--info">
                            {
                                withAnimal ? <p><strong>You will be with your pet</strong></p> : <p><strong>You will be without a pet</strong></p>
                            }


                        </div>
                      
                        <div className="book-page__summary--price">
                          {
                              withAnimal ?  <p>€ 190, -</p> : null
                          }
                          
                        </div>
                    </div>
                    : null
            }
        </>


    );
}

export default BookPageSummaryContent;