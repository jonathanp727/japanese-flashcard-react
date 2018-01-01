import fetch from 'cross-fetch';

export const CONNECTION_FAILURE = 'CONNECTION_FAILURE';
export const connectionFailure = () => ({
  type: CONNECTION_FAILURE
});

export const REQUEST_DECKS = 'REQUEST_DECKS';
export const requestDecks = () => ({
  type: REQUEST_DECKS
});

export const RECIEVE_DECKS = 'RECIEVE_DECKS';
export const recieveDecks = json => ({
  type: RECIEVE_DECKS,
  decks: json.map(deck => ({
    name: deck.name,
    id: deck.id
  }))
});

export function fetchDecks(userId) {
  return function (dispatch, getState) {
    dispatch(requestDecks());
    return fetch(`/api/deck/user/${userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getState().user.token
      }
    })
      .then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then((json) => {
        if (json.type !== CONNECTION_FAILURE) {
          dispatch(recieveDecks(json));
        }
      });
  };
}

export const REQUEST_CREATE_DECK = 'REQUEST_CREATE_DECK';
export const requestCreateDeck = () => ({
  type: REQUEST_CREATE_DECK
});

export const RECIEVE_CREATE_DECK = 'RECIEVE_CREATE_DECK';
export const recieveCreateDeck = (name, id) => ({
  type: RECIEVE_CREATE_DECK,
  deck: { name, id }
});


export function createDeck(deckname) {
  return function (dispatch, getState) {
    dispatch(requestCreateDeck());
    return fetch('/api/deck/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getState().user.token
      },
      body: JSON.stringify({
        'name': deckname,
        'userId': getState().user.id
      })
    })
      .then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then((json) => {
        if (json.type !== CONNECTION_FAILURE) {
          dispatch(recieveCreateDeck(deckname, json.id));
        }
      });
  };
}

export const REQUEST_DELETE_DECK = 'REQUEST_DELETE_DECK';
export const requestDeleteDeck = () => ({
  type: REQUEST_DELETE_DECK
});

export const RECIEVE_DELETE_DECK = 'RECIEVE_DELETE_DECK';
export const recieveDeleteDeck = deck => ({
  type: RECIEVE_DELETE_DECK,
  deck
});

export function deleteDeck(deck) {
  return function (dispatch, getState) {
    dispatch(requestDeleteDeck());
    return fetch(`/api/deck/${deck.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getState().user.token
      }
    })
      .then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then((json) => {
        if (json.type !== CONNECTION_FAILURE) {
          dispatch(recieveDeleteDeck(deck));
        }
      });
  };
}

export const REQUEST_TRANSLATION = 'REQUEST_TRANSLATION';
export const requestTranslation = () => ({
  type: REQUEST_TRANSLATION
});

export const RECIEVE_TRANSLATION = 'RECIEVE_TRANSLATION';
export const recieveTranslation = json => ({
  type: RECIEVE_TRANSLATION,
  translation: json
});

export function getTranslation(japanese) {
  return function (dispatch, getState) {
    dispatch(requestTranslation());
    return fetch(`/api/dict/?j=${japanese}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getState().user.token
      }
    })
      .then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then((json) => {
        if (json.type !== CONNECTION_FAILURE) {
          dispatch(recieveTranslation(json));
        }
      });
  };
}

export const REQUEST_CREATE_CARD = 'REQUEST_CREATE_CARD';
export const requestCreateCard = () => ({
  type: REQUEST_CREATE_CARD
});

export const RECIEVE_CREATE_CARD = 'RECIEVE_CREATE_CARD';
export const recieveCreateCard = () => ({
  type: RECIEVE_CREATE_CARD
});

export function createCard(kanji, reading, gloss) {
  return function (dispatch, getState) {
    dispatch(requestCreateCard());
    return fetch('/api/flashcard/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getState().user.token
      },
      body: JSON.stringify({
        'kanji': kanji,
        'reading': reading,
        'pos': null,
        'gloss': gloss,
        'deckId': getState().deck.id
      })
    })
      .then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then((json) => {
        if (json.type !== CONNECTION_FAILURE) {
          dispatch(recieveCreateCard());
        }
      });
  };
}

export const REQUEST_CARDS = 'REQUEST_CARDS';
export const requestCards = deck => ({
  type: REQUEST_CARDS,
  name: deck.name,
  id: deck.id
});

export const RECIEVE_CARDS = 'RECIEVE_CARDS';
export const recieveCards = cards => ({
  type: RECIEVE_CARDS,
  cards
});

export function getCards(deck) {
  return function (dispatch, getState) {
    dispatch(requestCards(deck));
    if (getState().page.viewCardsPanelIsOpen) {
      return fetch(`/api/flashcard/deck/${deck.id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': getState().user.token
        }
      })
        .then(
          response => response.json(),
          () => dispatch(connectionFailure())
        )
        .then((json) => {
          if (json.type !== CONNECTION_FAILURE) {
            dispatch(recieveCards(json));
          }
        });
    }
    return null;
  };
}

export const REQUEST_DELETE_CARD = 'REQUEST_DELETE_CARD';
export const requestDeleteCard = () => ({
  type: REQUEST_DELETE_CARD
});

export const RECIEVE_DELETE_CARD = 'RECIEVE_DELETE_CARD';
export const recieveDeleteCard = id => ({
  type: RECIEVE_DELETE_CARD,
  id
});

export function deleteCard(id) {
  return function (dispatch, getState) {
    dispatch(requestDeleteCard());
    return fetch(`/api/flashcard/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': getState().user.token
      }
    })
      .then(
        response => response.json(),
        () => dispatch(connectionFailure())
      )
      .then((json) => {
        if (json.type !== CONNECTION_FAILURE) {
          dispatch(recieveDeleteCard(id));
        }
      });
  };
}
