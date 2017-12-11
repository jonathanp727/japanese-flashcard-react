import {
  OPEN_CREATECARDPANEL,
  RECIEVE_TRANSLATION,
  REQUEST_CARDS,
  RECIEVE_CARDS,
  RECIEVE_DELETE_CARD
} from '../actions';

const initialState = {
  id: -1,
  translation: null
};

const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CREATECARDPANEL:
      return Object.assign({}, state, { name: action.name, id: action.id, translation: null });
    case RECIEVE_TRANSLATION:
      return Object.assign(
        {},
        state,
        {
          translation:
          {
            kanji: action.translation[0].kanji,
            reading: action.translation[0].reading,
            gloss: action.translation[0].gloss
          }
        }
      );
    case REQUEST_CARDS:
      return Object.assign({}, state, { name: action.name, id: action.id, translation: null, cards: [] });
    case RECIEVE_CARDS:
      return Object.assign({}, state, { cards: action.cards });
    case RECIEVE_DELETE_CARD:
      return Object.assign({}, state, { cards: state.cards.filter(item => item.id !== action.id) });
    default:
      return state;
  }
};

export default deckReducer;
