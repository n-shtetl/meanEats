export const fetchComments = () => (
    $.ajax({
        url: `/api/comments/`,
        method: `GET`
    })
)

export const createComment = (comment) => (
    $.ajax({
        url: `/api/comments/`,
        method: `POST`,
        data: { comment }
    })
)