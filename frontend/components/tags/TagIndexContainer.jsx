import { connect } from 'react-redux';

const mstp = state => ({
    pTT: state.entities.postToTags,
    posts: Object.values(state.entities.posts),
    tags: state.entities.tags
})

const mdtp = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: id => dispatch(fetchPost(id))
})