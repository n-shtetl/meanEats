import React from 'react';
import PostIndexItem from './PostIndexItem';
import FeaturedPostsContainer from './FeaturedPostsContainer';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchPostToTags();
    }

    render() {
        const { posts } = this.props;
        const { postToTags } = this.props;
        return (
            <div>
            <FeaturedPostsContainer />
            <div id="postIndex">
                {posts.map((post) => (
                    <PostIndexItem post={post}
                                   tags={postToTags.filter(pTT => pTT.post_id === post.id)}
                                   key={post.id}/>

                ))}
            </div>
            </div>
        )
    }
}

export default PostIndex;