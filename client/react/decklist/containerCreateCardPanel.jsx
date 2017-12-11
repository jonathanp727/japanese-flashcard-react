import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import CreateCardPanel from './CreateCardPanel';
import { createCard, getTranslation } from '../../redux/actions';

const mapStateToProps = (state) => {
  if (state.deck.translation) {
    return {
      initialValues: {
        kanji: state.deck.translation.kanji,
        reading: state.deck.translation.reading,
        gloss: state.deck.translation.gloss
      }
    };
  }
  return {};
};

const mapDispatchToProps = dispatch => ({
  getTranslation: values => dispatch(getTranslation(values.japanese)),
  createCard: values => dispatch(createCard(values.kanji, values.reading, values.gloss))
});

const CreateCardPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'createCard' })(CreateCardPanel));

export default CreateCardPanelContainer;
