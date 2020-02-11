import * as CommentApiUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const fetchComments = () => dispatch => {
    return CommentApiUtil.fetchComments()
        .then(comments => dispatch(receiveComments(comments)))
}

export const createComment = (comment) => dispatch => {
    return CommentApiUtil.createComment(comment)
        .then(comments => dispatch(receiveComments(comments)))
}