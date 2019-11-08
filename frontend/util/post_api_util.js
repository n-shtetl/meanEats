export const fetchPosts = () => (
    $.ajax({
        url: 'api/posts',
        method: 'GET'
    })
)

export const createPost = (post) => (
    $.ajax({
        url: 'api/posts/',
        method: 'POST',
        data: { post }
    })
)

export const fetchPost = (postId) => (
    $.ajax({
        url: `/api/posts/${postId}`,
        method: 'GET'
    })
)