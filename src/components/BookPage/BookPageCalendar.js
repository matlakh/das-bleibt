import React from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';


const BookPageCalendar = (props) => {
    return (
        <div className="book-page__calendar">
            <DateRangePicker
                onChange={props.onChange}
                showSelectionPreview={false}
                moveRangeOnFirstSelection={false}
                months={3}
                ranges={props.ranges}
                showDateDisplay={false}
                staticRanges={[]}
                inputRanges={[]}
                direction="horizontal"
                minDate={props.minDate}
            />
        </div>

    )
}

export default BookPageCalendar;