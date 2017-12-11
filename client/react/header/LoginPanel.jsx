import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const LoginPanel = ({ login, loginError, handleSubmit }) => (
  <form onSubmit={handleSubmit(login)} className="login-form">
    <Field name="username" component="input" type="text" />
    <div className="divider" />
    <Field name="password" component="input" type="password" />
    <button className="login-button" type="submit">Login</button>
    {loginError && <p>{loginError}</p>}
  </form>
);

LoginPanel.propTypes = {
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default LoginPanel;
