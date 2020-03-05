import * as AuthorApiUtil from '../util/author_api_util';
export const RECEIVE_AUTHORS = "RECEIVE_AUTHORS";

const receiveAuthors = (authors) => ({
    type: RECEIVE_AUTHORS,
    authors
})

export const fetchAuthors = () => dispatch => {
    return AuthorApiUtil.fetchAuthors()
        .then(authors => dispatch(receiveAuthors(authors)))
}