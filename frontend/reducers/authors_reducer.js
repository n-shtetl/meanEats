import { RECEIVE_AUTHORS } from '../actions/author_actions';

const authorsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_AUTHORS:
            return action.authors
        default:
            return oldState;
    }
}

export default authorsReducer;