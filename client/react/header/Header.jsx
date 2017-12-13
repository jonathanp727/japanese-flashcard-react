import React from 'react';
import PropTypes from 'prop-types';
import UserPanel from './UserPanel';
import LoginPanel from './LoginPanel';
import ExitFlashcardPanel from './ExitFlashcardPanel';
// eslint-disable-next-line no-unused-vars
import style from '../../style/header.css';

const Header = ({
  username,
  loginError,
  isDoingFlashcards,
  login,
  logout,
  exit,
  handleSubmit
}) => (
  <header>
    <h1>Flashcard App</h1>
    <div className="userpanel-cont">
      {
        (() => {
          if (username) {
            if (isDoingFlashcards) {
              return <ExitFlashcardPanel exit={exit} />;
            }
            return <UserPanel username={username} logout={logout} />;
          }
          return <LoginPanel login={login} handleSubmit={handleSubmit} loginError={loginError} />;
        })()
      }
    </div>
  </header>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
  loginError: PropTypes.string.isRequired,
  isDoingFlashcards: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  exit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Header;
