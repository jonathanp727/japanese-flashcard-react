import React from 'react';
import PropTypes from 'prop-types';
import NotificationBar from './NotificationBar';
import Header from '../header/container';
import FlashcardPanel from '../flashcardpanel/container';
import DeckList from '../decklist/container';
// eslint-disable-next-line no-unused-vars
import style from '../../style/app.css';

const App = ({ notification, isDoingFlashcards, isLoggedIn }) => (
  <div>
    <Header />
    <NotificationBar notification={notification} />
    <div className="body">
      {
        (() => {
          if (isLoggedIn) {
            if (isDoingFlashcards) {
              return <FlashcardPanel />;
            }
            return <DeckList />;
          }
          return <div id="loggedout">Log in to see decks</div>;
        })()
      }
    </div>
  </div>
);

App.propTypes = {
  notification: PropTypes.string.isRequired,
  isDoingFlashcards: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default App;
