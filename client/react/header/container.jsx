import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Header from './Header';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: 'login' })(Header));

export default HeaderContainer;
