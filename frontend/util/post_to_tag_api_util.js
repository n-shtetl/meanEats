export const fetchPostToTags = () => (
    $.ajax({
        url: `api/post_to_tags/`,
        method: 'GET'
    })
)

export const fetchPostToTag = (postToTagId) => (
    $.ajax({
        url: `api/post_to_tags/${postToTagId}`,
        method: `GET`,
    })
)

export const makePostToTag = (postToTag) => (
    $.ajax({
        url: `api/post_to_tags/`,
        method: `POST`,
        data: { postToTag }
    })
)

export const deletePostToTag = (postToTagId) => (
    $.ajax({
        url: `api/post_to_tags/${postToTagId}`,
        method: 'DELETE'
    })
)