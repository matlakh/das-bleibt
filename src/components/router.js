import React from 'react'

import { Routes, Route } from 'react-router-dom';
import BookNow from '../pages/BookNow';
import Main from '../pages/Main';
import Room from '../pages/Room';
import Layout from './Layout/Layout';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="book" element={<BookNow />} />
                    <Route path="rooms/room-:id" element={<Room />} />
                </Route>
            </Routes>

        </>

    );
}

export default Router;