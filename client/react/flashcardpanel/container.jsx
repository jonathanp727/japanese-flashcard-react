import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';
import FlashcardPanel from './FlashcardPanel';
import { nextAction } from '../../redux/actions';

const mapStateToProps = state => ({
  flashcard: state.deck.currentCard,
  showAnswer: state.page.showAnswer
});

const mapDispatchToProps = dispatch => ({
  nextAction: isShowingAnswer => dispatch(nextAction(isShowingAnswer))
});

const FlashcardPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashcardPanel);

export default FlashcardPanelContainer;
