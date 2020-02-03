import * as TagApiUtil from '../util/tag_api_util';
export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS';

const receiveTags = (tags) => ({
    type: RECEIVE_TAGS,
    tags
});

const receiveTag = (tag) => ({
    type: RECEIVE_TAG,
    tag
});

const receiveTagErrors = errors => ({
    type: RECEIVE_TAG_ERRORS,
    errors
})

export const fetchTags = () => dispatch => {
    return TagApiUtil.fetchTags()
        .then(tags => dispatch(receiveTags(tags)))
        .fail(errors => dispatch(receiveTagErrors(errors)))
}

export const fetchTag = tagId => dispatch => {
    debugger
    return TagApiUtil.fetchTag(tagId)
        .then(tag => dispatch(receiveTag(tag)))
        .fail(errors => dispatch(receiveTagErrors(errors)))
}