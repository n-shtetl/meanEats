import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case CLEAR_ERRORS: 
            return [];
        case RECEIVE_ERRORS: 
            return action.errors.responseJSON
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return oldState;
    }
}

export default sessionErrorsReducer;