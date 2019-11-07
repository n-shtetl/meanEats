import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './SessionForm';
import { Link } from 'react-router-dom';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to='/signup'>Sign Up</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors)
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);