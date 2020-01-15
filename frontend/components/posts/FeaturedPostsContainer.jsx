import React from 'react';
import { fetchPosts } from '../../actions/post_actions';
import { fetchPostToTags } from '../../actions/post_to_tag_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPostToTags: () => dispatch(fetchPostToTags()),
})