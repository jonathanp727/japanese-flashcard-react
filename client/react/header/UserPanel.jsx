import React from 'react';
import PropTypes from 'prop-types';

const UserPanel = ({ username, logout }) => (
  <div className="userpanel">
    <p>Welcome {username}!</p>
    <button className="login-button" onClick={logout}>Logout</button>
  </div>
);

UserPanel.propTypes = {
  username: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired
};

export default UserPanel;
