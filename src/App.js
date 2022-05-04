import React, { Fragment, useEffect } from 'react';
import { HashRouter } from 'react-router-dom'
import Router from './components/router';
import { AuthState } from './context/auth/authState';
import { BookState } from './context/book/bookState';
import { MenuState } from './context/menu/menuState';
import { RoomsState } from './context/rooms/roomsState';


function App() {
 
  return (
    <HashRouter>
      <BookState>
        <AuthState>
          <RoomsState>
            <MenuState>
              <Fragment>
                <Router basename="/das-bleibt/"></Router>
              </Fragment>
            </MenuState>
          </RoomsState>
        </AuthState>
      </BookState>
    </HashRouter>
  );
}

export default App;
