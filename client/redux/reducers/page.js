import {
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGIN_DENIED
} from '../actions';

const initialState = {
  notification: 'false',
  loginError: null,
  fetchDeckError: false,
  clickedNewDeck: false,
  noCon: false
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return Object.assign({}, state, { loginError: null });
    case LOGIN_FAILED:
      return Object.assign({}, state, { loginError: 'No connection to server' });
    case LOGIN_DENIED:
      return Object.assign({}, state, { loginError: 'Incorrect username or password' });
    default:
      return state;
  }
};

export default pageReducer;
