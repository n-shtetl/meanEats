import React from 'react';
import PostIndexItem from './PostIndexItem';

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