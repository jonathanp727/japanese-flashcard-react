import fetch from 'cross-fetch';
import { fetchDecks } from './request';

export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const loginSucceeded = (json, username) => ({
  type: LOGIN_SUCCEEDED,
  user: username,
  userId: json.id,
  token: json.token
});

export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginFailed = () => ({
  type: LOGIN_FAILED
});

export const LOGIN_DENIED = 'LOGIN_DENIED';
export const loginDenied = () => ({
  type: LOGIN_DENIED
});

export function login(username, password) {
  return function (dispatch) {
    return fetch('/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(
        response => response.json(),
        () => dispatch(loginFailed())
      )
      .then((json) => {
        if (json.status === 401) {
          dispatch(loginDenied());
        } else if (json.type !== LOGIN_FAILED) {
          dispatch(loginSucceeded(json, username));
          dispatch(fetchDecks(json.id));
        }
      });
  };
}

export function register(username, password) {
  return function (dispatch) {
    return fetch('/api/join', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(
        response => response.json(),
        () => dispatch(loginFailed())
      )
      .then((json) => {
        if (json.status === 401) {
          dispatch(loginDenied());
        } else if (json.type !== LOGIN_FAILED) {
          dispatch(loginSucceeded(json, username));
          dispatch(fetchDecks(json.id));
        }
      });
  };
}

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});
