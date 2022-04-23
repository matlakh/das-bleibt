import React, { useContext } from 'react'
import { BookContext } from '../../context/book/bookContext';

const BookPageSummaryHeader = (props) => {

    const { editContent } = useContext(BookContext)
    
    const editInput = () => {
        editContent(props.editParams)
    }

    return (
        <div className="book-page__summary--header">
            <h2 className="book-page__summary--title">{props.title}</h2>
            <button onClick={editInput} className="book-page__summary--edit">Edit</button>
        </div>
    );
}

export default BookPageSummaryHeader;