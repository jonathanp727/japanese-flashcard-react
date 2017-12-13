import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import style from '../../style/flashcardpanel.css';

const FlashcardPanel = ({ flashcard, showAnswer, nextAction }) => {
  if (flashcard) {
    return (
      <div className="flashcard" onClick={() => nextAction(showAnswer)}>
        {flashcard.kanji ? <p className="kanji">{flashcard.kanji}</p> : <p className="kanji">{flashcard.reading}</p>}
        {showAnswer &&
          <div className="answer">
            {flashcard.kanji ? <p>{flashcard.reading}</p> : null}
            <p>{flashcard.gloss}</p>
          </div>
        }
      </div>
    );
  }
  return null;
};

FlashcardPanel.propTypes = {
  flashcard: PropTypes.shape({
    kanji: PropTypes.string,
    reading: PropTypes.string,
    gloss: PropTypes.string
  }).isRequired,
  showAnswer: PropTypes.bool.isRequired,
  nextAction: PropTypes.func.isRequired
};

export default FlashcardPanel;
