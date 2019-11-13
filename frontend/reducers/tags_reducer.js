import { RECEIVE_TAGS, RECEIVE_TAG } from '../actions/tag_actions';

const tagsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch(action.type) {
        case RECEIVE_TAGS:
            return action.tags;
        case RECEIVE_TAG: 
            return {[action.tag.id]: action.tag}
        default:
            return oldState;
    }
}

export default tagsReducer;