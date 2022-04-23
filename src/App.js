import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Router from './components/router';
import { AuthState } from './context/auth/authState';
import { BookState } from './context/book/bookState';
import { MenuState } from './context/menu/menuState';
import { RoomsState } from './context/rooms/roomsState';

function App() {
  return (
    <BrowserRouter>
      <BookState>
        <AuthState>
          <RoomsState>
            <MenuState>
              <Fragment>
                <Router></Router>
              </Fragment>
            </MenuState>
          </RoomsState>
        </AuthState>
      </BookState>
    </BrowserRouter>
  );
}

export default App;
