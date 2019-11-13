import { RECEIVE_TAG_ERRORS } from '../actions/tag_actions';

const tagsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_TAG_ERRORS: 
            return action.errors.responseJSON
        default:
            return oldState;
    }
}

export default tagsErrorsReducer;