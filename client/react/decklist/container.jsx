import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';
import DeckList from './DeckList';
import { openCreateDeckPanel, createDeck, deleteDeck } from '../../redux/actions';

const mapStateToProps = state => ({
  decks: state.user.decks,
  createDeckPanelIsOpen: state.page.createDeckPanelIsOpen
});

const mapDispatchToProps = dispatch => ({
  openCreateDeckPanel: () => dispatch(openCreateDeckPanel()),
  createDeck: values => dispatch(createDeck(values.deckname)),
  deleteDeck: deck => dispatch(deleteDeck(deck))
});

const DeckListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);

export default DeckListContainer;
