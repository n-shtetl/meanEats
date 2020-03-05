import React from 'react';
import { fetchPosts } from '../../actions/post_actions';
import { fetchSteps } from '../../actions/step_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import Search from './Search';


const mapStateToProps = (state, ownProps) => ({
    searchTerm: ownProps.match.params.searchTerm,
    posts: Object.values(state.entities.posts)
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchSteps: (postId) => dispatch(fetchSteps(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);