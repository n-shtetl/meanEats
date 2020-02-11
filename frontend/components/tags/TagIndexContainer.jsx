import { connect } from 'react-redux';
import TagIndex from './TagIndex';
import { fetchPost, fetchPosts } from '../../actions/post_actions';
import { fetchTag, fetchTags } from '../../actions/tag_actions';
import { fetchPostToTags } from '../../actions/post_to_tag_actions';

const mstp = (state, ownProps) => ({
    pTT: state.entities.postToTags,
    posts: Object.values(state.entities.posts),
    tags: state.entities.tags,
    tagId: Number(ownProps.match.params.tagId)
})

const mdtp = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: id => dispatch(fetchPost(id)),
    fetchTag: (tagId) => dispatch(fetchTag(tagId)),
    fetchTags: () => dispatch(fetchTags()),
    fetchPostToTags: () => dispatch(fetchPostToTags())
})

export default connect(mstp, mdtp)(TagIndex);