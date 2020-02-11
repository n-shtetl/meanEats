import { connect } from 'react-redux';
import PostShow from './PostShow';
import { fetchPost } from '../../actions/post_actions';
import { fetchComments, createComment } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    post: state.entities.posts[ownProps.match.params.postId],
    comments: Object.values(state.entities.comments).filter(comment => comment.post_id === Number(ownProps.match.params.postId)),
    users: state.entities.users,
    session: state.session
})

const mapDispatchToProps = dispatch => ({
    fetchPost: (post) => dispatch(fetchPost(post)),
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers()),
    createComment: (comment) => dispatch(createComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);