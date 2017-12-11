import React from 'react';
import PropTypes from 'prop-types';
import CreateDeckPanel from './CreateDeckPanel';
import DeckElement from './containerDeckElement';
// eslint-disable-next-line no-unused-vars
import style from '../../style/decklist.css';

const DeckList = ({
  decks,
  createDeckPanelIsOpen,
  openCreateDeckPanel,
  createDeck
}) => (
  <ul className="decklist">
    <li id="decklist-header">
      <button
        className="decklist-button"
        id="newdeck-button"
        onClick={openCreateDeckPanel}
      >New Deck
      </button>
    </li>
    {createDeckPanelIsOpen && <CreateDeckPanel createDeck={createDeck} />}
    {decks.map(deck => (<DeckElement key={deck.id} deck={deck} />))}
  </ul>
);

DeckList.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number
  })).isRequired,
  createDeckPanelIsOpen: PropTypes.bool.isRequired,
  openCreateDeckPanel: PropTypes.func.isRequired,
  createDeck: PropTypes.func.isRequired
};

export default DeckList;

// import React from 'react';
// import PropTypes from 'prop-types';
// import CreateDeckPanel from './CreateDeckPanel';
// import DeckElement from './DeckElement';
// // eslint-disable-next-line no-unused-vars
// import style from '../../style/decklist.css';

// const DeckList = ({
//   decks,
//   createDeckPanelIsOpen,
//   openCreateDeckPanel,
//   createDeck,
//   deleteDeck
// }) => (
//   <ul className="decklist">
//     <li id="decklist-header">
//       <button
//         className="decklist-button"
//         id="newdeck-button"
//         onClick={openCreateDeckPanel}
//       >New Deck
//       </button>
//     </li>
//     {createDeckPanelIsOpen && <CreateDeckPanel createDeck={createDeck} />}
//     {decks.map(deck => (<DeckElement deck={deck} deleteDeck={deleteDeck} />))}
//   </ul>
// );

// DeckList.propTypes = {
//   decks: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string,
//     id: PropTypes.number
//   })).isRequired,
//   createDeckPanelIsOpen: PropTypes.bool.isRequired,
//   openCreateDeckPanel: PropTypes.func.isRequired,
//   createDeck: PropTypes.func.isRequired,
//   deleteDeck: PropTypes.func.isRequired
// };

// export default DeckList;
