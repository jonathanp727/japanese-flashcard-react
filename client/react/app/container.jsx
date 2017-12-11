import { connect } from 'react-redux';
import App from './App';
import { } from '../../redux/actions';

const mapStateToProps = state => ({
  notification: state.page.notification,
  isDoingFlashcards: state.page.isDoingFlashcards,
  isLoggedIn: !!state.user.name
});

const mapDispatchToProps = dispatch => ({
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
