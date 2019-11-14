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
        const { body } = this.props.post;
        const bodyArr = body.split("\n")
        return (
            <div className='postShow'>
                <h1 className='postShowTitle'>{this.props.post.title}</h1>
                <div className="postShowImageWrapper">
                    <img className='postShowImage' src={this.props.post.photoUrl}/>
                </div>
                <div className="postShowBody">
                    {bodyArr.map(para => (
                        <div>
                        <div>{para}</div>
                        <br/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default PostShow;