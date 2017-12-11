import {
  LOGIN_SUCCEEDED,
  LOGOUT,
  RECIEVE_DECKS,
  RECIEVE_CREATE_DECK,
  RECIEVE_DELETE_DECK
} from '../actions';

const initialState = {
  name: '',
  decks: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return Object.assign(
        {},
        state,
        {
          name: action.user,
          id: action.userId,
          token: action.token
        }
      );
    case LOGOUT:
      return initialState;
    case RECIEVE_DECKS:
      return Object.assign({}, state, { decks: action.decks });
    case RECIEVE_CREATE_DECK:
      return Object.assign({}, state, state.decks.push(action.deck));
    case RECIEVE_DELETE_DECK:
      return Object.assign({}, state, { decks: state.decks.filter(item => item !== action.deck) });
    default:
      return state;
  }
};

export default userReducer;
