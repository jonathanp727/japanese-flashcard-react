import {
} from '../actions';

const initialState = {
  loginError: null,
  fetchDeckError: false,
  clickedNewDeck: false,
  noCon: false
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default pageReducer;
