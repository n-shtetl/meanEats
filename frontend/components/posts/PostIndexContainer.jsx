import React from 'react';
import { fetchPosts } from '../../actions/post_actions';
import { fetchPost } from '../../actions/post_actions';
import { fetchPostToTags } from '../../actions/post_to_tag_actions';
import { connect } from 'react-redux';
import { fetchTag } from '../../actions/tag_actions';
import { fetchTags } from '../../actions/tag_actions';
import PostIndex from './PostIndex';


const mapStateToProps = state => ({
    posts: Object.values(state.entities.posts),
    postToTags: Object.values(state.entities.postToTags),
    tags: Object.values(state.entities.tags)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: id => dispatch(fetchPost(id)),
    fetchPostToTags: () => dispatch(fetchPostToTags()),
    fetchTag: id => dispatch(fetchTag(id)),
    fetchTags: () => dispatch(fetchTags())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
