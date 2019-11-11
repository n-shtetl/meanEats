import React from 'react';
import PostIndexItem from './PostIndexItem';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        const { posts } = this.props;
        console.log(posts);
        return (
            <div id="postIndex">
                {posts.map((post) => (
                    <PostIndexItem post={post}
                                   key={post.id}/>

                ))}
            </div>
        )
    }
}

export default PostIndex;