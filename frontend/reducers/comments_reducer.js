import { RECEIVE_COMMENTS } from '../actions/comment_actions';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_COMMENTS:
            return action.comments
        default:
            return oldState;
    }
}

export default commentsReducer;