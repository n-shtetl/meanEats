import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Greeting } from './Greeting';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);