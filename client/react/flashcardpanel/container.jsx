import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';
import FlashcardPanel from './FlashcardPanel';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const FlashcardPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashcardPanel);

export default FlashcardPanelContainer;
