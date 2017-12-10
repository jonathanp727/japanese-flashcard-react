import React from 'react';
import PropTypes from 'prop-types';

const NotificationBar = ({ notification }) => (
  <div>{notification}</div>
);

NotificationBar.propTypes = {
  notification: PropTypes.string.isRequired
};

export default NotificationBar;
