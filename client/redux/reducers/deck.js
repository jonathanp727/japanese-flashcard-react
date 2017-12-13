import {
  OPEN_CREATECARDPANEL,
  OPEN_FLASHCARDPANEL,
  EXIT_FLASHCARDPANEL,
  RECIEVE_TRANSLATION,
  REQUEST_CARDS,
  RECIEVE_CARDS,
  RECIEVE_DELETE_CARD,
  NEXT_ACTION
} from '../actions';

const initialState = {
  id: -1,
  translation: null
};

const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CREATECARDPANEL:
      return Object.assign({}, state, { name: action.name, id: action.id, translation: null });
    case OPEN_FLASHCARDPANEL:
      return Object.assign({}, state, { name: action.name, id: action.id });
    case EXIT_FLASHCARDPANEL:
      return initialState;
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
      return Object.assign({}, state, { cards: action.cards, currentCard: action.cards[0], cardIndex: 0, numCards: action.cards.length });
    case NEXT_ACTION:
      return Object.assign(
        {},
        state,
        (() => {
          if (action.isShowingAnswer) {
            let { cardIndex } = state;
            cardIndex += 1;
            if (cardIndex === state.numCards) {
              cardIndex = 0;
            }
            const currentCard = state.cards[cardIndex];
            return { cardIndex, currentCard };
          }
          return null;
        })()
      );
    case RECIEVE_DELETE_CARD:
      return Object.assign({}, state, { cards: state.cards.filter(item => item.id !== action.id) });
    default:
      return state;
  }
};

export default deckReducer;
