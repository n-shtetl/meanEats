import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './SessionForm';
import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link to='/login'>Log In</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors)
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);