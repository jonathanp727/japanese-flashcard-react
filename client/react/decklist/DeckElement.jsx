import React from 'react';
import PropTypes from 'prop-types';

const DeckElement = ({ deck, deleteDeck }) => (
  <li key={deck.id} className="deck-ele">
    <p className="deckname">{deck.name}</p>
    <div className="button-cont">
      <button className="decklist-button">Add Card</button>
      <button className="delete-deck-button" onClick={() => deleteDeck(deck)}>Ø</button>
    </div>
  </li>
);

DeckElement.propTypes = {
  deck: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number
  }).isRequired,
  deleteDeck: PropTypes.func.isRequired
};

export default DeckElement;
