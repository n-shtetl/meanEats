import { RECEIVE_POST_TO_TAGS, RECEIVE_POST_TO_TAG } from '../actions/post_to_tag_actions';

const postToTagsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_POST_TO_TAGS:
            return action.postToTags
        case RECEIVE_POST_TO_TAG: 
            return {[action.postToTag.id]: action.postToTag}
        default:
            return oldState;
    }
}

export default postToTagsReducer;