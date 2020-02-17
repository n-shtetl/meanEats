import React from 'react';
import { logout } from '../../util/session_api_util';

class PostShow extends React.Component {
    constructor(props) {
        super(props);   
        this.toggleComments = this.toggleComments.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.state = {
            commentsOpen: true,
            commentPage: 1,
            commentText: ''
        }
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
        this.props.fetchComments();
        this.props.fetchUsers();
        
    }

    submitComment() {
        let comment = {body: this.state.commentText, 
                       post_id: this.props.match.params.postId,
                       user_id: this.props.session.id}
        this.props.createComment(comment)
        // this.props.fetchComments();
        // this.setState({commentText: ''})
        this.triggerRender()
    }

    triggerRender() {
        this.props.fetchComments();
        this.setState({commentText: ''})
    }

    toggleComments() {
        this.setState({commentsOpen: !this.state.commentsOpen})
    }

    formatDate(time) {
        let date = new Date(time);
        let dateString = "";
        let AM = true;
        let hours;
        if (date.getHours() === 0) {
            hours = 12
        } else if (date.getHours() > 12) {
            hours = date.getHours()%12
            AM = false;
        } else {
            hours = date.getHours();
        }
        let minutes = date.getMinutes();
        dateString += hours + ":" + minutes;
        if (AM) {
            dateString += " AM on "
        } else {
            dateString += " PM on "
        }
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getYear()-100;
        
        dateString += day + "/" + month + "/" + year;
        return dateString;
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderAddComments() {
        return (
            <div className="addCommentContainer">
                <div className="addCommentHeader">ADD COMMENT</div> 
                <textarea className="textField"
                            value={this.state.commentText}
                            onChange={this.update('commentText')}
                                                >
                </textarea>
                <div className="postCommentButton" onClick={this.submitComment}>POST COMMENT</div>
            </div>
        )
    }

    playVideo() {
        
    }

    renderComments() {
        let user;
        if (this.props.session) {
            user = this.props.users[this.props.session.id]
        }
        const { comments } = this.props;
        if (comments === null || comments === undefined) {
            return null;
        }
        else if (this.state.commentsOpen) {
        return (
            <div className="commentContainer">
                <div className="greetingAndOpenOrClose">
                <div className="openOrClose">
                    <div className="hideComments" onClick={this.toggleComments}>HIDE COMMENTS</div>
                </div>
                <div className="helloUsername">
                    Hello, {user.username}!
                </div>
                </div>
                <div className="commentPagination">
                    {comments.length < 16 ? <div className="commentNumbers">{comments.length} Comments</div> : <div className="commentNumbers">({this.state.commentPage*15-14}-{this.state.commentPage*15 > this.props.comments.length ? this.props.comments.length : this.state.commentPage*15}) of {this.props.comments.length} Comments</div>}
                    <div className="pageLinks">
                    {comments.length > 15 ? comments.map((comment, i) => i % 15 === 0 ? <div className="pageLink">{i/15+1}</div> : null) : null}
                    </div>
                </div>
                {comments.length < 16 ? comments.map((comment,i) => (
                    <div className="usernameTimeStampAndBody">
                    <div className="usernameAndTimestamp">
                        <div className="commentUsername">{this.props.users[comment.user_id].username}</div>
                        <div className="commentTimestamp">{this.formatDate(comment.created_at)}</div>
                    </div>
                    <div className="commentBody">
                        {comment.body}
                    </div>
                    <div classNamne="commentDividerContainer">
                        <div className="commentDivider"></div>
                    </div>
                    </div>
                )) : comments.map((comment,i) => (
                <div>{i+1 <= this.state.commentPage*15 && i+1 >= this.state.commentPage*15-14
                        ? <div className="usernameTimeStampAndBody">
                          <div className="usernameAndTimestamp">
                            <div className="commentUsername">{this.props.users[comment.user_id].username}</div>
                            <div className="commentTimestamp">{this.formatDate(comment.created_at)}</div>
                          </div>
                          <div className="commentBody">
                            {comment.body}
                          </div> 
                          <div className="commentDivider"></div>
                          </div>
                        : null}
                </div>
                ))}
            </div>
        )
        } else {
            return (
            <div className="showComments" onClick={this.toggleComments}>
                {this.props.comments.length === 1 ? <div>Show 1 comment</div> : <div>Show {this.props.comments.length} comments</div>}
            </div>
            )
        }
    }

    renderIngredients() {
        const { ingredients } = this.props.post;
        if (ingredients === null || ingredients === undefined) return null;
        const ingredientsArr = ingredients.split("\n");
        return (
            <div className="postShowIngredients">
            {ingredientsArr.map(ingredient => (
                <div>
                    {ingredient}
                    <br/><br/>
                </div>
            ))}
            </div>
        )
    }

    renderDirections() {
        const { directions } = this.props.post;
        if (directions === null || directions === undefined) return null;
        const directionsArr = directions.split("\n");
        return (
            <div className="postShowDirections">
            {directionsArr.map(direction => (
                <div>
                    {direction}
                    <br/><br/>
                </div>
            ))}
            </div>
        )
    }


    render() {
        if (!this.props.post) return null;
        const { body } = this.props.post;
        const bodyArr = body.split("\n")
        return (
            <div className='postShow'>
                <h1 className='postShowTitle'>{this.props.post.title}</h1>
                <h4 className="postShowDate">Published on: {this.props.post.created_at.slice(0,10)}</h4>
                <div className="postShowImageWrapper">
                    {this.props.post.video_url ? <video className="postShowImage" controls muted  autoplay="autoplay"><source id="video" src={this.props.post.video_url} type="video/mp4"></source></video> : <img className='postShowImage' src={this.props.post.photoUrl}/>}
                </div>
                {/* {this.playVideo()} */}
                <div className="postShowBody">
                    {bodyArr.map(para => (
                        <div>
                        <div>{para}</div>
                        <br/>
                        </div>
                    ))}
                </div>
                <div className="ingredientsAndDirections">
                    {this.renderIngredients()}
                    {this.renderDirections()}
                </div>
                <div className='divider'></div>
                <div className="commentBox">
                {this.renderComments()}
                {this.renderAddComments()}
                </div>
            </div>
        )
    }
}

export default PostShow;