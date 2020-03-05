import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Greeting } from './Greeting';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: (modalType) => dispatch(openModal(modalType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);