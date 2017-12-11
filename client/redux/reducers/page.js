import {
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGIN_DENIED,
  OPEN_CREATEDECKPANEL,
  CONNECTION_FAILURE,
  RECIEVE_CREATE_DECK
} from '../actions';

const initialState = {
  notification: 'false',
  loginError: '',
  fetchDeckError: false,
  createDeckPanelIsOpen: false,
  isDoingFlashcards: false
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return Object.assign({}, state, { loginError: '' });
    case LOGIN_FAILED:
      return Object.assign({}, state, { loginError: 'No connection to server' });
    case LOGIN_DENIED:
      return Object.assign({}, state, { loginError: 'Incorrect username or password' });
    case OPEN_CREATEDECKPANEL:
      return Object.assign({}, state, { createDeckPanelIsOpen: !state.createDeckPanelIsOpen });
    case CONNECTION_FAILURE:
      return Object.assing({}, state, { notification: 'Cannot connect to server' });
    case RECIEVE_CREATE_DECK:
      return Object.assign({}, state, { notification: 'false', createDeckPanelIsOpen: false });
    default:
      return state;
  }
};

export default pageReducer;
