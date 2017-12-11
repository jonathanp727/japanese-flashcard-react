import {
  OPEN_CREATECARDPANEL,
  RECIEVE_TRANSLATION
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
    default:
      return state;
  }
};

export default deckReducer;
