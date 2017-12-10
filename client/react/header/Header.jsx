import React from 'react';
import PropTypes from 'prop-types';
import UserPanel from './UserPanel';
import LoginPanel from './LoginPanel';
// eslint-disable-next-line no-unused-vars
import style from '../../style/header.css';

const Header = ({
  username,
  loginError,
  login,
  logout,
  handleSubmit
}) => (
  <header>
    <h1>Flashcard App</h1>
    <div className="userpanel-cont">
      {username ?
        <UserPanel username={username} logout={logout} /> :
        <LoginPanel login={login} handleSubmit={handleSubmit} loginError={loginError} />
      }
    </div>
  </header>
);

Header.propTypes = {
  username: PropTypes.string.isRequired,
  loginError: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default Header;
