import React from 'react';

class PostShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
    }

    render() {
        if (!this.props.post) return null;
        return (
            <div>
                <div>{this.props.post.title}</div>
                <img src={this.props.post.photoUrl}/>
            </div>
        )
    }
}

export default PostShow;