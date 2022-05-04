import React, { useContext, useState } from "react";
import { BookContext } from "../../context/book/bookContext";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays } from 'date-fns'
import BookPageRooms from "./BookPageRooms";
import BookPageButton from "./BookPageButton";
import BookPageHeader from './BookPageHeader';
import BookPageCalendar from './BookPageCalendar'
import { RoomsContext } from "../../context/rooms/roomsContext";
import BookPageCheckbox from "./BookPageCheckbox";
import BookPageSummary from "./BookPageSummary";
import BookPagePersonalInfo from "./BookPagePersonalInfo";
import BookPageModal from './BookPageModal'

const BookPageCard = (props) => {
    const { startDate, endDate, key, showCalendar, completeBooking, showPersonalInfo, showPersonalInfoHeader, showSummary, showSummaryHeader, showAnimals, selectedRoom, showAnimalsHeader, showRoomsHeader, showRooms } = useContext(BookContext)
    const rooms = useContext(RoomsContext)
    const [state, setState] = useState([{ startDate, endDate, key }]);

    return (
        <div className="book-page__inner">
            {
                completeBooking
                    ? <BookPageModal></BookPageModal>
                    :
                    <>
                        <BookPageHeader
                            title='Travel date'
                            state={state}
                            travelHeader={true}
                            headerImg='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAABZUlEQVRYhe3WTyttURjH8Y9/lzLB7SopmTBV3oBb906uIjExwNjQKS/ASMwMvREmyMTwegVSUgaUORMM7NBprXNW9rIp51ur3dnPbz/7e057PfvQokU52uo+d2Mtkt3FNEYCtaPi+CdQu8Q+ViN9d3AfE+zDY2SN4jhSWytWqHZcXBvr2/dWoD1m9lm0hJrx5YTqd1m75wcwxCUG0ROo3RbHn4HaHW6Edydc4KGx5ifSETg3gxqGcVqtTpgNr/Pjo6hhC3/rC52JDVaxmZDbx1JCbha/PT9fh+8R6kF/Qq43sV+UVKE9XCXkUjINSRU6K9aHkyrUiHmMJeSO8L9ZKIfQMuYScjUVCZ1Lm1fXKc1yCK1n6PHCl3u55hyMAyVdkH8wlib3YEzhB4ZixSoH4yIWMIVfZYVysIJ/zUJV7bJxgb8aIRr9QhM4yCDTgUl0lRXql/itchISOsF2Rfc/qeg+Lb4RT0zDQ8lYUUoxAAAAAElFTkSuQmCC'
                        ></BookPageHeader>
                        {showCalendar
                            ?
                            <>
                                <BookPageCalendar
                                    onChange={item => setState([item.selection])}
                                    ranges={state}
                                    minDate={addDays(new Date(), 0)}
                                ></BookPageCalendar>

                                <BookPageButton typeOfContinue='room'
                                ></BookPageButton>
                            </>
                            : null
                        }

                        {
                            showRoomsHeader
                                ?
                                <BookPageHeader
                                    title='Your room'
                                    state={state}
                                    roomsHeader={true}

                                    headerImg='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAABBklEQVRYhe2WTw7BQBSHvwriBIQLYG/LJcTCBbrkENxB2HEe+95AJQ5Ri7ZMJ23fNP1HMl/yop32N+9rTSlYLOVwMsYnwLjm3j7wMDnxDAQN1UmSWTUoE9dSFehoQlPJuAZm6o4ulLWm6iTRUxdqHSskkSe0Jvx+86oHHJXMIRqTchtTQZfv42i6wBdKZmGYcZSMqx7Iu0OB4eRBxrZpJkFX2/eAi+GkMS8l8yqQizNe2sE+MC8oUiVzwrX34UZ4G3ctyOyj3ld18E7z/2F63eHPfodawQpJWCEJKyRhhSR+XuiC/LZXdSVed2KhZ/TpV3GVBUntPQK2wKBxnbDnFhi20NtSnjeZEngLyXncYAAAAABJRU5ErkJggg=='
                                ></BookPageHeader>
                                : null
                        }
                        {
                            rooms.loading
                                ? <p className="rooms-type__preloader">Loading...</p>
                                : null
                        }
                        {
                            showRooms ?
                                <>
                                    <BookPageRooms data={state}></BookPageRooms>
                                    <BookPageButton typeOfContinue='animals'
                                    ></BookPageButton>
                                </>
                                : null
                        }
                        {
                            showAnimalsHeader
                                ?
                                <BookPageHeader
                                    title='With animals'
                                    state={state}
                                    animalsHeader={true}

                                    headerImg='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAACQ0lEQVRYhe3Xz4tPURjH8dcY0zTDQvJjYaGm/Cgj+dmMUjZmlKRkYUNJ8RdYkGSjFCsLZWOFjR8rxMZislMYRBLGQhpMLAwy6Vqce+u6c+/3znfc+y01n3q6de5znuf9Pfd5zjlfZvSfqb3m+BuxDYvwEb9qzperVTiBW4hS9h5rWg2zXViFqMBGcR6D6KwbpgOvG8Bk7RMWZoPMqhBoH3qa8G/HzwrzT9J9U1+dCMfqhIHxJmBGMTcvSJVt34Z+oZby9AXP8RiHMFJh7lwtxYT8FXmpYEXqUgfuFMBEON1KmG7cbAAT4WCrYDZguAQmwkDdIHNwRnHNZG1rnTCDeDtFkMQ21wHSjpP43SRMJJz6laoTt1MJdmC/cB4lY9fQi8s5QMurBrqUSbAzHu/BFuHOk5yL2Y77oOJ71x6Tf/GRBv6vMr6Hm0lWdtq34VTO+Dssiy3RAGbH79J6UiVQv/zvPxq/60uNHcA8oa7SWtcMUJmOy++aCwX+CzCW8b1YJdDVAqAfwi6dVhce5vgOTzf5Jgxhb2rsXk6CEazMmZ/cALP+EzFs0zoXB3iUGnuQCf5VuGYUqehO3ddgzl9KF/VY/FwhdAuhy9I6a3IXpfWtYHz9dICG4meX4r3jSkm8+f8KlFab8LkioRaOClfOZNnHiqci3IuKTv9pF/Zqk9s2sRclc3sL5iU2jl1lANmN8amw4d2Ng6T1vSTWM7xp8L4ba8uAskWb1hLh2y+O/T7jRkm83cLmmKdxXFfzn8MZtVx/AHD0AwtMbfqhAAAAAElFTkSuQmCC'
                                ></BookPageHeader>
                                : null
                        }
                        {
                            showAnimals ?
                                <>
                                    <BookPageCheckbox
                                        withAnimalTrue='yes'
                                        withAnimalFalse='no'
                                    ></BookPageCheckbox>
                                    <BookPageButton typeOfContinue='summary'
                                    ></BookPageButton>
                                </>
                                : null
                        }
                        {
                            showSummaryHeader
                                ? <BookPageHeader
                                    title='Summary'
                                    state={state}
                                    summaryHeader={true}
                                    headerImg='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAACyElEQVRYhc3YS2sUWRQH8F8kLWjwEQUZ0cXodkREJZqt4ErxkSHux0f8Dm5FjQHBYQQFg34Ed7MRhxBmKygGdzOJoDGDgmjiDCMx7eLcsssQza1KR/3Dobtvnce/b51z7qniO0NHTbsV2JHkR6xN628wjrEkzaUSXAy9GMaLFKyJGUziefperL/ATexfDiI9GE2BJnEVh7F5Ad3N6dqviWQTI9jTDiIrcQXv8RSn0VnBvhNn8AyzGEKjLpkN+DOROY/VdR0l2wuYEzvdXYfMQ0zj2BKIzEefyLOHVUitFDszLf++d8q/lXsTqVGZt6/ImeOZAQbwNgU5k2nzs7h9Q4sp9mjlTA7W4J1Wqb9Lazm4KBJ995eURkU15SbwRvFPC0JzaS0HXaL67n1OoTc5PZXpsMDlEqHBirYDyW7fQheHRdOr0mcKbEtSFZ2Ywo35F1aIVn+1htOl4jf8Y965ulNs3eFvQOhIir2D2BnFD9yv6GwUf5XkZA1CRcxPCG3Dv+IwrILfMYHtSdbVIDSJ/xKHjwm8Bq9rOBvE/zhQw7ZAM8VeS2uHvhsUhKbV2+52oCPFflMmNC6680ID13JjC1bh7zKhR+mzLVNdRRQxx2gRGsNLHPwGhA6Kxvi4TKiJOzih3tFRFw30p9jNMiG4hR/wy1ckdBKbcPtzCiNiJMgdP9bhnNZpf05+tXaJpnj3S0p7xNB0IdPpRIlMIROZtoMp1q7FFIfEoNWX4fSQyIGyHMqw608xLmXoaohDc0YM5O1GT/I9okIBdYtHlRkxkLcL/cnnA6yvatwtdmpODORdSyDSJXJmTuxMZTIFGiKnZkX1DajWpxo4K6ppVuRMW/rcbvwhqmhKjJ1HxDk0H1txFNdEB26K0l60mupgnxjIi0BN8ZD4PMnb0voUroskzkbdF1Yd+EnrhVWRE6/wRBzWj32FF1bLjg/xW6+z93/XlgAAAABJRU5ErkJggg=='
                                ></BookPageHeader>
                                : null
                        }
                        {
                            showSummary
                                ?
                                <>
                                    <BookPageSummary state={state}></BookPageSummary>
                                    <BookPageButton typeOfContinue='personalInfo'></BookPageButton>
                                </>
                                : null
                        }
                        {
                            showPersonalInfoHeader
                                ?
                                <BookPageHeader
                                    headerImg='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAABTklEQVRYhe3WTSsFURgH8B/pioWdpVKKJErZCAsLxVooH8DSt7CwZ+8ln8EKm7v0FgsLC0VKUiQLJCzM1O02ujPjOle5/3oWc+b0PL+a6cxQzz9LExZwgpkaW3ThEB9R3aK9Vpge3JRg4jrFEjpDYgo4TsCU1hOmQ4HmK2DiekFfCNB2StAHNkKALjKArkKAnjOAnrM2b8wBusuw9zZr8zygnQx7d3P0z5wBvKn8uN7QHwIEixUw79GeoJnDdQLmGrN5mzb8ENWMcfRG12fY83Uo1lNPTZL1pS5gCKMYRDc60Bbdf8QlznGEIvbxWg1saSawjgfpv2Nx3WMt6vHjTOEgB+K72sdkHkgBq1WElJ/iK9GM1Nn6JUxpbabFjATAxDVcPjzp92M0rbwKGStfSAK1BIDEaS1fyPOD9qv5c6CmhLUilgPNLwaaU88/yiehctpqYQ6QnwAAAABJRU5ErkJggg=='
                                    title='Personal Info'
                                    personalInfoHeader={true}></BookPageHeader>
                                : null
                        }
                        {
                            showPersonalInfo
                                ?
                                <>
                                    <BookPagePersonalInfo></BookPagePersonalInfo>
                                    <BookPageButton typeOfContinue='complete' type='submit'></BookPageButton>
                                </>
                                : null
                        }
                    </>
            }
        </div>
    );
}

export default BookPageCard;