import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Header from './Header';
import { login, logout, register, exitFlashCardPanel } from '../../redux/actions';

const mapStateToProps = state => ({
  username: state.user.name,
  loginError: state.page.loginError,
  isDoingFlashcards: state.page.isDoingFlashcards
});

const mapDispatchToProps = dispatch => ({
  login: (values) => {
    if (values.action === 'login') {
      dispatch(login(values.username, values.password));
    } else {
      dispatch(register(values.username, values.password));
    }
  },
  logout: () => dispatch(logout()),
  exit: () => dispatch(exitFlashCardPanel())
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'login' })(Header));

export default HeaderContainer;
