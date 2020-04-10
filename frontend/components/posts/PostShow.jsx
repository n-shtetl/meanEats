import React from 'react';
import { logout } from '../../util/session_api_util';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    constructor(props) {
        super(props);   
        this.toggleComments = this.toggleComments.bind(this);
        this.submitComment = this.submitComment.bind(this);        
        this.traverse = this.traverse.bind(this);
        this.scrollToComments = this.scrollToComments.bind(this);
        this.openFacebook = this.openFacebook.bind(this);
        this.swap = this.swap.bind(this);
        this.state = {
            commentsOpen: true,
            commentPage: 1,
            commentText: ''
        }
    }

    swap(json) {
        var ret = {};
        for(var key in json){
          ret[json[key]] = key;
        }
        return ret;
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
        this.props.fetchComments();
        this.props.fetchUsers();
        this.props.fetchSteps(this.props.match.params.postId);
        this.props.fetchPTTs();
        this.props.fetchTags();
        this.props.fetchAuthors();
    }

    scrollToComments() {
        let commentBox = $('.commentBox');
        $('html, body').animate({
            scrollTop: commentBox.offset().top  
        }, 2000)
    }

    openFacebook() {
        
        window.open(
            'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 
            'facebook-share-dialog', 
            'width=626,height=436'); 
          return false;
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
                <div className="ingredientsTitle">Ingredients</div>
                {ingredientsArr.map(ingredient => (
                    <div className="ingredientText">
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
                <div className="directionsTitle">Directions</div>
                <ol>
                {directionsArr.map(direction => (
                        <li className="directionsText">{direction}</li>
                ))}
                </ol>
            </div>
        )
    }

    displayStars(numStars) {
        switch(numStars) {
            case 1: 
                return <div className="starImageWrapper"><img className="starImage" src="1Stars.png"/></div>
            case 2: 
                return <div className="starImageWrapper"><img className="starImage" src="2Stars.png"/></div>
            case 3: 
                return <div className="starImageWrapper"><img className="starImage" src="3Stars.png"/></div>
            case 4: 
                return <div className="starImageWrapper"><img className="starImage" src="4Stars.png"/></div>
            case 5: 
                return <div className="starImageWrapper"><img className="starImage" src="5Stars.png"/></div>
            default:
                return null;
        }
    }

    traverse(tags) {
        let tagsInOrder = {};
        let queue = [tags];
        let i = 0;
        while (queue.length) {
            let shifted = queue.shift();
            tagsInOrder[shifted.tag_name] = i++;
            if (shifted.subs) {
                shifted.subs.forEach(sub => {
                    queue.push(sub)
                })
            }
        }
        return tagsInOrder;
    }


    render() {
        if (!this.props.post) return null;
        const { body } = this.props.post;
        const { steps } = this.props;
        let pTTs;
        if (this.props.pTTs) {
            pTTs = this.props.pTTs.filter(pTT => pTT.post_id === Number(this.props.match.params.postId))
        }
        let tagsInOrder;
        if (this.props.tags.length) {
            tagsInOrder = this.traverse(this.props.tags[0])
        }
        let tagIndex = {};
        if (this.props.tags.length) {
            let tagsArr = this.props.tags[1];
            tagsArr.forEach(tag => {
                tagIndex[tag.id] = tag.tag;
            })
        }
        let tags;
        if (tagIndex && pTTs) {
            tags = pTTs.map(pTT => pTT.tag_id).map(id => tagIndex[id]).reverse();
            if (tags[0] !== undefined) {
                tags = tags.map(tag => tag);
            } else {
                tags = [];
            }
        }
        let author;
        if (this.props.authors) {
            author = this.props.authors[this.props.post.author_id]
        }
        let separatedSteps;
        if (steps) {
            separatedSteps = steps.map(step => step.body.split("\n"))
        }
        let separatedRecipeBody;
        if (this.props.post.recipe_body) {
            separatedRecipeBody = this.props.post.recipe_body.split("\n");
        }
        let separatedWhyItWorks, firstHalf;
        if (this.props.post.why_it_works) {
            separatedWhyItWorks = this.props.post.why_it_works.split("\n");
            firstHalf = separatedWhyItWorks.splice(separatedWhyItWorks.length/2)
        }
        let separatedNotes;
        if (this.props.post.notes) {
            separatedNotes = this.props.post.notes.split("\n")
        }
        return (
            <div className="postShowContainer">
                <div className="postShowVideoContainer"><video className="postShowVideo" controls muted  autoplay="autoplay"><source id="video" src={this.props.post.video_url} type="video/mp4"></source></video></div>
                <div className='postShow'>
                    
                    <div className="tagBox">
                        <div className="tagSubBox">
                        {tags ? tags.reverse().map((tag, i) => (
                            i !== tags.length-1 ? <Link to={`/tags/${this.swap(tagIndex)[tag]}`}><div className="tagString">{tag.toUpperCase() + "   / "}</div></Link> : <Link to={`/tags/${this.swap(tagIndex)[tag]}`}><div className="tagString"><b>{tag.toUpperCase()}</b></div></Link>
                        )) : null}
                        </div>
                    </div>
                    <h1 className='postShowTitle'>{this.props.post.title}</h1>
                    <div className="postAuthorName">
                            {author ? author.name : null}
                    </div>
                    <div className="postShowLinks">
                        <div className="postShowEmailLink">
                            <a href={"mailto:?to=&subject=" + this.props.post.title + "&body=Found this on Mean Eats and thought you might enjoy it: " + window.location.href}><img src="email_icon1.png" height="33" width="33"/></a>
                            <div className="postShowEmailCircle">
                                <svg height="50" width="50">
                                    <circle cx="24" cy="24" r="23" stroke="#f0cc64" stroke-width="1" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className="postShowCommentsLink" onClick={this.scrollToComments}>
                            <div className="postShowCommentCircle">
                                <svg height="50" width="50">
                                    <circle className="bigCircle" cx="24" cy="24" r="23" stroke="#f0cc64" stroke-width="1" fill="white" />
                                </svg>
                            </div>
                            <img src="chat_bubble_icon.png" height="33" width="33"/>
                            <div className="commentNumberCircle">
                                <svg height="16" width="16">
                                    <circle cx="7" cy="7" r="6" stroke="#ff3600" stroke-width="1" fill="#ff3600" />
                                </svg>
                                <div className="commentNumber">{this.props.comments ? this.props.comments.length : null}</div> 
                            </div>
                        </div>
                        <div className="postShowFacebookLink">
                            <div className="facebookLink" onClick={this.openFacebook}>
                                <a href="#"><img src="facebook_icon.png" height="33" width="33"/></a>
                                <div className="postShowFacebookCircle">
                                    <svg height="50" width="50">
                                        <circle cx="24" cy="24" r="23" stroke="#f0cc64" stroke-width="1" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="postShowKicker">
                        <em>{this.props.post ? this.props.post.kicker : null}</em>
                    </div>
                    <h4 className="postShowDate">Published on: {this.props.post.created_at.slice(0,10)}</h4>
                    <div className="postShowImageWrapper">
                        <img className='postShowImage' src={this.props.post.photoUrl}/>
                    </div>
                    <div className="recipeBody">
                            {separatedRecipeBody ? separatedRecipeBody.map(para => (
                                <div className="recipeBodyPara"><div>{para}</div><br></br></div>
                            )) : null}
                    </div>
                    {separatedWhyItWorks ? <div className="whyItWorksTitle">Why It Works</div> : null}
                    <div className="whyItWorks">
                        {separatedWhyItWorks ? <ul>{separatedWhyItWorks.map(para => (
                            <li className="whyItWorksItem">{para}</li>
                        ))}</ul> : null}
                        {firstHalf ? <ul>{firstHalf.map(para => (
                            <li className="whyItWorksItem">{para}</li>
                        ))}</ul> : null}
                    </div>
                    {separatedWhyItWorks ? <div className="recipeInfo">
                            <div className="yield">
                                <div className="yieldTitle">YIELD:</div>
                                {this.props.post ? this.props.post.yield : null}
                            </div>
                            <div className="slash">/</div>
                            <div className="activeTime">
                                <div className="activeTimeTitle">ACTIVE TIME:</div>
                                {this.props.post ? this.props.post.active_time : null}
                            </div>
                            <div className="slash">/</div>
                            <div className="totalTime">
                                <div className="totalTimeTitle">TOTAL TIME:</div>
                                {this.props.post ? this.props.post.total_time : null}
                            </div>
                            <div className="slash">/</div>
                            <div className="rated">
                                <div className="ratedTitle">RATED:</div>
                                {this.props.post ? this.displayStars(this.props.post.rated) : null}
                            </div>
                        </div>
                    : null}
                    {/* {this.playVideo()} */}
                    {/* <div className="postShowBody">
                        {bodyArr.map(para => (
                            <div>
                            <div>{para}</div>
                            <br/>
                            </div>
                        ))}
                    </div> */}
                    {steps ? steps.map((step1, i) => (
                                <div className="stepsContainer">
                                    <div className="stepTitle">{step1.title}</div>
                                    {step1.photoUrl ? <div className="postShowImageWrapper"><img src={step1.photoUrl} className="postShowImage"/></div>:null}
                                    <div className="stepBody">{separatedSteps.map( (step2, j) => (
                                        i === j ? <div className="paragraphContainer">{step2.map(para => <div className="stepParagraph">{para}</div>)}</div> : null
                                        // <div className="paragraphContainer">{i === j ? step2 : null}<br/></div>
                                    ))}</div>
                                </div>
                            ))
                    : null}
                    <div className="ingredientsAndDirections">
                        {this.renderIngredients()}
                        {this.renderDirections()}
                    </div>
                    {this.props.post.special_equipment ? <div className="specialEquipmentAndNotes">
                            <div className="specialEquipment">
                                <div className="specialEquipmentTitle">Special Equipment</div>
                                {this.props.post ? <div className="specialEquipmentText">{this.props.post.special_equipment}</div> : null}
                            </div>
                            <div className="notes">
                                <div className="notesTitle">Notes</div>
                                {separatedNotes ? separatedNotes.map(para => (
                                    <div className="notesPara">{para}</div>
                                )) : null}
                            </div>
                        </div>
                    : null}
                    <div className="authorBio">
                        <div className="authorBioContainer">
                            <img className="authorAvatar" height="88" width="88" src={author ? author.photoUrl : null}></img>
                            <div className="authorBioTextContainer">
                                <div className="authorBioText">
                                    <b><div className="authorBioName">{author ? author.name : null}</div></b>
                                    <li className="authorBioTitle">{author ? author.title : null}</li>
                                </div>
                                <div className="authorBioPara">{author ? author.bio : null}</div>
                            </div>
                        </div>
                    </div>
                    <div className="postShowLinks2">
                        <div className="postShowEmailLink">
                            <a href={"mailto:?to=&subject=" + this.props.post.title + "&body=Found this on Mean Eats and thought you might enjoy it: " + window.location.href}><img src="email_icon1.png" height="33" width="33"/></a>
                            <div className="postShowEmailCircle">
                                <svg height="50" width="50">
                                    <circle cx="24" cy="24" r="23" stroke="#f0cc64" stroke-width="1" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div className="postShowCommentsLink" onClick={this.scrollToComments}>
                            <div className="postShowCommentCircle">
                                <svg height="50" width="50">
                                    <circle className="bigCircle" cx="24" cy="24" r="23" stroke="#f0cc64" stroke-width="1" fill="white" />
                                </svg>
                            </div>
                            <img src="chat_bubble_icon.png" height="33" width="33"/>
                            <div className="commentNumberCircle">
                                <svg height="16" width="16">
                                    <circle cx="7" cy="7" r="6" stroke="#ff3600" stroke-width="1" fill="#ff3600" />
                                </svg>
                                <div className="commentNumber">{this.props.comments ? this.props.comments.length : null}</div> 
                            </div>
                        </div>
                        <div className="postShowFacebookLink">
                            <div className="facebookLink" onClick={this.openFacebook}>
                                <a href="#"><img src="facebook_icon.png" height="33" width="33"/></a>
                                <div className="postShowFacebookCircle">
                                    <svg height="50" width="50">
                                        <circle cx="24" cy="24" r="23" stroke="#f0cc64" stroke-width="1" fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className="commentBox">
                    {this.renderComments()}
                    {this.renderAddComments()}
                    </div>
                </div>
            </div>
        )
    }
}


export default PostShow;