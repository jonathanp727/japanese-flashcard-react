import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';
import ViewCardsPanel from './ViewCardsPanel';
import { deleteCard } from '../../redux/actions';

const mapStateToProps = state => ({
  cards: state.deck.cards
});

const mapDispatchToProps = dispatch => ({
  deleteCard: id => dispatch(deleteCard(id))
});

const ViewCardsPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCardsPanel);

export default ViewCardsPanelContainer;
