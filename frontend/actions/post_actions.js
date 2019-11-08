export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const RECEIVE_POST = "RECEIVE_POST"
import * as PostApiUtil from '../util/post_api_util';

const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
})

const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
})

export const fetchPosts = () => {
    return PostApiUtil.fetchPosts()
        .then(posts => dispatch(receivePosts(posts)))
}

export const fetchPost = (postId) => {
    return PostApiUtil.fetchPost(postId)
        .then(post => dispatch(receivePost(post)))
}

export const createPost = (post) => {
    return PostApiUtil.createPost(post)
        .then(post => dispatch(receivePost(post)))
}
