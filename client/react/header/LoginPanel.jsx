import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const LoginPanel = ({ login, loginError, handleSubmit }) => (
  <form className="login-form">
    <Field name="username" component="input" type="text" />
    <div className="divider" />
    <Field name="password" component="input" type="password" />
    <button
      name="login-button"
      className="login-button"
      type="submit"
      onClick={
        // Add action attribute to values to distinguish between login and join
        handleSubmit((values) => {
          login({
            ...values,
            action: 'login'
          });
        })
      }
    >Login
    </button>
    <button
      name="register-button"
      className="login-button"
      type="submit"
      onClick={
        // Add action attribute to values to distinguish between login and join
        handleSubmit((values) => {
          login({
            ...values,
            action: 'register'
          });
        })}
    >Join
    </button>
    {loginError && <p>{loginError}</p>}
  </form>
);

LoginPanel.propTypes = {
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default LoginPanel;
