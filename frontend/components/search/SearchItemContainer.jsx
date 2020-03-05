import React from 'react';
import { connect } from 'react-redux';
import SearchItem from './SearchItem';

const mapStateToProps = (state, ownProps) => ({
    steps: Object.values(state.entities.steps)
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchItem);