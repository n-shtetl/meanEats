import { connect } from 'react-redux';
import PostShow from './PostShow';
import { fetchPost } from '../../actions/post_actions';
import { fetchComments, createComment } from '../../actions/comment_actions';
import { fetchUsers } from '../../actions/session_actions';
import { fetchSteps } from '../../actions/step_actions';
import { fetchPostToTags } from '../../actions/post_to_tag_actions';
import { fetchTags } from '../../actions/tag_actions';
import { fetchAuthors } from '../../actions/author_actions';


const mapStateToProps = (state, ownProps) => ({
    post: state.entities.posts[ownProps.match.params.postId],
    comments: Object.values(state.entities.comments).filter(comment => comment.post_id === Number(ownProps.match.params.postId)),
    users: state.entities.users,
    session: state.session,
    steps: Object.values(state.entities.steps),
    pTTs: Object.values(state.entities.postToTags),
    tags: Object.values(state.entities.tags),
    authors: state.entities.authors
})

const mapDispatchToProps = dispatch => ({
    fetchPost: (post) => dispatch(fetchPost(post)),
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers()),
    createComment: (comment) => dispatch(createComment(comment)),
    fetchSteps: (stepId) => dispatch(fetchSteps(stepId)),
    fetchPTTs: () => dispatch(fetchPostToTags()),
    fetchTags: () => dispatch(fetchTags()),
    fetchAuthors: () => dispatch(fetchAuthors())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);