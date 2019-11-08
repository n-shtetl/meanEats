import { RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';

export const postsReducer = (oldState, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST: 
            
        default:
            return oldState;
    }
}