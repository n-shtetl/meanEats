import React from 'react';
import { fetchPosts } from '../../actions/post_actions';
import { fetchPostToTags } from '../../actions/post_to_tag_actions';
import { connect } from 'react-redux';
import PostIndex from './PostIndex';


const mapStateToProps = state => ({
    posts: Object.values(state.entities.posts),
    postToTags: Object.values(state.entities.postToTags)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPostToTags: () => dispatch(fetchPostToTags())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
