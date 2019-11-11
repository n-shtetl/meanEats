import React from 'react';
import { fetchPosts } from '../../actions/post_actions';
import { connect } from 'react-redux';
import PostIndex from './PostIndex';


const mapStateToProps = state => ({
    posts: Object.values(state.entities.posts)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
