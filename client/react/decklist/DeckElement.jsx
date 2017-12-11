import React from 'react';
import PropTypes from 'prop-types';
import CreateCardPanel from './containerCreateCardPanel';

const DeckElement = ({
  deck,
  curDeckId,
  createCardPanelIsOpen,
  deleteDeck,
  openCreateCardPanel
}) => (
  <li key={deck.id}>
    <div className="deck-ele">
      <p className="deckname">{deck.name}</p>
      <div className="button-cont">
        <button
          className="decklist-button"
          onClick={() => openCreateCardPanel(deck)}
        >Add Card
        </button>
        <button className="delete-deck-button" onClick={() => deleteDeck(deck)}>Ø</button>
      </div>
    </div>
    {createCardPanelIsOpen && curDeckId === deck.id && <CreateCardPanel />}
  </li>
);

DeckElement.propTypes = {
  deck: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number
  }).isRequired,
  curDeckId: PropTypes.number.isRequired,
  deleteDeck: PropTypes.func.isRequired,
  openCreateCardPanel: PropTypes.func.isRequired,
  createCardPanelIsOpen: PropTypes.bool.isRequired
};

export default DeckElement;
