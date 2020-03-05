export const fetchAuthors = () => (
    $.ajax({
        url: `/api/authors/`,
        method: `GET`
    })
)