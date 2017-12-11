import React from 'react';
import PropTypes from 'prop-types';

const ViewCardsPanel = ({ cards = [], deleteCard }) => (
  <div className="viewcards-panel">
    {cards.map(card => (
      <div className="card-cont">
        <div className="card">
          <p>{card.kanji}</p>
        </div>
        <button className="delete-card-button" onClick={() => deleteCard(card.id)}>Ø</button>
      </div>
    ))}
  </div>
);

ViewCardsPanel.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    kanji: PropTypes.string,
    id: PropTypes.number
  })).isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default ViewCardsPanel;
