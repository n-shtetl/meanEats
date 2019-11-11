import { connect } from 'react-redux';
import PostShow from './PostShow';
import { fetchPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => ({
    post: state.entities.posts[ownProps.match.params.postId]
})

const mapDispatchToProps = dispatch => ({
    fetchPost: (post) => dispatch(fetchPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);