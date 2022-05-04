import React, { useContext } from 'react'
import InputMask from 'react-input-mask';
import { BookContext } from '../../context/book/bookContext';

const BookPagePersonalInfo = () => {
    const { changePersonalName, changePersonalPhone, showInputValidate } = useContext(BookContext)

    const changeInput = (event) => {
        changePersonalName(event.target.value)
    }

    const changePhone = (event) => {
        changePersonalPhone(event.target.value)
    }

    return (

        <div className='book-page__personal--wrapper'>
            <div className="book-page__personal">
                <div className="book-page__personal--input labels">
                    <label htmlFor="name">Full Name*</label>
                    <label htmlFor="phone">Phone*</label>
                </div>
                <div className="book-page__personal--input">
                    <form>
                        <input type="text" name="name" placeholder='Full Name' required onChange={changeInput} />
                        <InputMask mask="+4\9 99 999 99" maskChar=" " placeholder='Phone' required onChange={changePhone} />
                    </form>
                </div>
            </div>
            {
                showInputValidate
                    ?
                    <div className='book-page__personal--validate'>
                        <p>Please, enter your name and phone number</p>
                    </div>
                    : null
            }
        </div>
    );
}

export default BookPagePersonalInfo;