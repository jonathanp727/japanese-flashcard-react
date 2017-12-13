import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';
import DeckElement from './DeckElement';
import { openCreateCardPanel, openFlashCardPanel, deleteDeck, getCards } from '../../redux/actions';

const mapStateToProps = state => ({
  createCardPanelIsOpen: state.page.createCardPanelIsOpen,
  viewCardsPanelIsOpen: state.page.viewCardsPanelIsOpen,
  curDeckId: state.deck.id
});

const mapDispatchToProps = dispatch => ({
  openCreateCardPanel: deck => dispatch(openCreateCardPanel(deck)),
  openFlashCardPanel: (deck) => {
    dispatch(getCards(deck));
    dispatch(openFlashCardPanel(deck));
  },
  deleteDeck: deck => dispatch(deleteDeck(deck)),
  getCards: deck => dispatch(getCards(deck))
});

const DeckElementContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckElement);

export default DeckElementContainer;
