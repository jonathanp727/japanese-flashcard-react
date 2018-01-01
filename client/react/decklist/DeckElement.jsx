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
  openFlashCardPanel,
  getCards
}) => (
  <li key={deck.id}>
    <div className="deck-ele">
      <div className="deckname-cont" onClick={() => getCards(deck)}>
        <p className="deckname">{deck.name}</p>
      </div>
      <div className="button-cont">
        <button
          className="start-button"
          onClick={() => openFlashCardPanel(deck)}
        >Start Session
        </button>
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
  openFlashCardPanel: PropTypes.func.isRequired,
  viewCardsPanelIsOpen: PropTypes.bool.isRequired,
  createCardPanelIsOpen: PropTypes.bool.isRequired,
  getCards: PropTypes.func.isRequired
};

export default DeckElement;
