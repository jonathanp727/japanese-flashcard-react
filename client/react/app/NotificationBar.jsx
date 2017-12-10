import React from 'react';
import PropTypes from 'prop-types';

const NotificationBar = ({ notification }) => (
  <div className="notification-cont">
    <div className="notification-bar" id={notification.substr(0, 3)}>
      {notification}
    </div>
  </div>
);

NotificationBar.propTypes = {
  notification: PropTypes.string.isRequired
};

export default NotificationBar;
