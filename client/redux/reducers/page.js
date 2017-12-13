import {
  LOGIN_SUCCEEDED,
  LOGIN_FAILED,
  LOGIN_DENIED,
  OPEN_CREATEDECKPANEL,
  CONNECTION_FAILURE,
  RECIEVE_CREATE_DECK,
  RECIEVE_CREATE_CARD,
  OPEN_CREATECARDPANEL,
  REQUEST_CARDS,
  OPEN_FLASHCARDPANEL,
  EXIT_FLASHCARDPANEL,
  NEXT_ACTION
} from '../actions';

const initialState = {
  notification: 'false',
  loginError: '',
  fetchDeckError: false,
  createDeckPanelIsOpen: false,
  viewCardsPanelIsOpen: false,
  createCardPanelIsOpen: false,
  isDoingFlashcards: false,
  showAnswer: false
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
    case RECIEVE_CREATE_CARD:
      return Object.assign({}, state, { notification: 'false', createCardPanelIsOpen: false });
    case OPEN_CREATECARDPANEL:
      return Object.assign(
        {},
        state,
        {
          createCardPanelIsOpen: !state.createCardPanelIsOpen,
          viewCardsPanelIsOpen: false
        }
      );
    case REQUEST_CARDS:
      return Object.assign(
        {},
        state,
        {
          viewCardsPanelIsOpen: !state.viewCardsPanelIsOpen,
          createCardPanelIsOpen: false
        }
      );
    case OPEN_FLASHCARDPANEL:
      return Object.assign({}, state, { isDoingFlashcards: true });
    case EXIT_FLASHCARDPANEL:
      return Object.assign({}, state, { isDoingFlashcards: false });
    case NEXT_ACTION:
      return Object.assign({}, state, { showAnswer: !state.showAnswer });
    default:
      return state;
  }
};

export default pageReducer;
