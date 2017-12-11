import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const CreateCardPanel = ({ getTranslation, createCard, handleSubmit }) => (
  <div className="createcard-panel">
    <TranslationForm getTranslation={getTranslation} />
    <form onSubmit={handleSubmit(createCard)} className="createcard-form">
      <div className="kanji-reading">
        <label htmlFor="kanji">
          <p className="label-text">Kanji</p>
          <Field
            name="kanji"
            component="input"
          />
        </label>
        <label htmlFor="reading">
          <p className="label-text">Reading</p>
          <Field
            name="reading"
            component="input"
          />
        </label>
      </div>
      <div className="gloss">
        <label htmlFor="gloss">
          <p className="label-text">English</p>
          <Field
            name="gloss"
            component="textarea"
          />
        </label>
      </div>
      <div className="createcard-button-cont">
        <button className="decklist-button">Submit</button>
      </div>
    </form>
  </div>
);

CreateCardPanel.propTypes = {
  getTranslation: PropTypes.func.isRequired,
  createCard: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

// Second form element so CreateCardPanel can handle two seperate forms
const TranslationForm = reduxForm({ form: 'getTranslation' })(({ getTranslation, handleSubmit }) => (
  <form onSubmit={handleSubmit(getTranslation)} className="translation-form">
    <Field name="japanese" component="input" />
    <button className="decklist-button">Load word</button>
  </form>
));

// const TranslationForm = () => (<div />);
export default CreateCardPanel;
