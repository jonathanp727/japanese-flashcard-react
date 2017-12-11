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
    return fetch(`http://localhost:3000/api/deck/user/${userId}`, {
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
    return fetch('http://localhost:3000/api/deck/', {
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
    return fetch(`http://localhost:3000/api/deck/${deck.id}`, {
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
