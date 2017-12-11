import { connect } from 'react-redux';
import DeckList from './DeckList';
import { openCreateDeckPanel, createDeck } from '../../redux/actions';

const mapStateToProps = state => ({
  decks: state.user.decks,
  curDeck: state.deck.id,
  createDeckPanelIsOpen: state.page.createDeckPanelIsOpen
});

const mapDispatchToProps = dispatch => ({
  openCreateDeckPanel: () => dispatch(openCreateDeckPanel()),
  createDeck: values => dispatch(createDeck(values.deckname))
});

const DeckListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);

export default DeckListContainer;
