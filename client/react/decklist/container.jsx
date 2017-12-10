import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';
import DeckList from './DeckList';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const DeckListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);

export default DeckListContainer;
