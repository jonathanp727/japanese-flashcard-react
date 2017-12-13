import React from 'react';
import PropTypes from 'prop-types';

const ExitFlashcardPanel = ({ exit }) => (
  <div>
    <button onClick={() => exit()} className="exit-button">Quit</button>
  </div>
);

ExitFlashcardPanel.propTypes = {
  exit: PropTypes.func.isRequired
};

export default ExitFlashcardPanel;
