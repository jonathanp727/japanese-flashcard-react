import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const CreateDeckPanel = ({ createDeck, handleSubmit }) => (
  <li className="newdeck-panel">
    <form className="newdeck-form" onSubmit={handleSubmit(createDeck)}>
      <label id="createdeck-label" htmlFor="deckname">
        <p id="label-text">Name</p>
        <Field name="deckname" className="createdeck-input" component="input" />
      </label>
      <button className="createdeck-button">Create</button>
    </form>
  </li>
);

CreateDeckPanel.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  createDeck: PropTypes.func.isRequired
};

const CreateDeckPanelForm = reduxForm({
  // a unique name for the form
  form: 'createDeck'
})(CreateDeckPanel);

export default CreateDeckPanelForm;
