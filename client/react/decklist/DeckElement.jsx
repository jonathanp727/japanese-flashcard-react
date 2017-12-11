import React from 'react';
import PropTypes from 'prop-types';
import CreateCardPanel from './containerCreateCardPanel';
import ViewCardsPanel from './containerViewCardsPanel';

const DeckElement = ({
  deck,
  curDeckId,
  createCardPanelIsOpen,
  viewCardsPanelIsOpen,
  deleteDeck,
  openCreateCardPanel,
  getCards
}) => (
  <li key={deck.id}>
    <div className="deck-ele">
      <p className="deckname" onClick={() => getCards(deck)}>{deck.name}</p>
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
    {viewCardsPanelIsOpen && curDeckId === deck.id && <ViewCardsPanel />}
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
  viewCardsPanelIsOpen: PropTypes.func.isRequired,
  createCardPanelIsOpen: PropTypes.bool.isRequired,
  getCards: PropTypes.func.isRequired
};

export default DeckElement;
