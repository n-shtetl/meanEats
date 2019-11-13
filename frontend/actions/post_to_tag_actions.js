import * as PostToTagApiUtil from '../util/post_to_tag_api_util';
export const RECEIVE_POST_TO_TAGS = 'RECEIVE_POST_TO_TAGS';
export const RECEIVE_POST_TO_TAG = 'RECEIVE_POST_TO_TAG';
export const RECEIVE_POST_TO_TAG_ERRORS = 'RECEIVE_POST_TO_TAG_ERRORS';

const receivePostToTags = (postToTags) => ({
    type: RECEIVE_POST_TO_TAGS,
    postToTags
});

const receivePostToTag = (postToTag) => ({
    type: RECEIVE_POST_TO_TAG,
    postToTag
});

const receivePostToTagErrors = errors => ({
    type: RECEIVE_POST_TO_TAG_ERRORS,
    errors
})

export const fetchPostToTags = () => dispatch => {
    return PostToTagApiUtil.fetchPostToTags()
        .then(postToTags => dispatch(receivePostToTags(postToTags)))
        .fail(errors => dispatch(receivePostToTagErrors(errors)))
}

export const fetchPostToTag = postToTagId => dispatch => {
    return PostToTagApiUtil.fetchPostToTag(postToTagId)
        .then(postToTag => dispatch(receivePostToTag(postToTag)))
        .fail(errors => dispatch(receivePostToTagErrors(errors)))
}