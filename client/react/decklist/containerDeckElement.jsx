import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';
import DeckElement from './DeckElement';
import { openCreateCardPanel, deleteDeck } from '../../redux/actions';

const mapStateToProps = state => ({
  createCardPanelIsOpen: state.page.createCardPanelIsOpen,
  curDeckId: state.deck.id
});

const mapDispatchToProps = dispatch => ({
  openCreateCardPanel: deck => dispatch(openCreateCardPanel(deck)),
  deleteDeck: deck => dispatch(deleteDeck(deck))
});

const DeckElementContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckElement);

export default DeckElementContainer;
