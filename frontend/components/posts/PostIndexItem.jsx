import React from 'react';
import { Link } from 'react-router-dom';



class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {

    }

    render() {
        let buttonTag;
        if(this.props.tagsInOrder) {
            let temp = this.props.tags.sort((tag1, tag2) => this.props.tagsInOrder[tag1]-this.props.tagsInOrder[tag2])
            buttonTag = temp.pop();
        }
        console.log(this.props, "here i am");
        console.log(this.props.tagIndex[buttonTag], "here i also am")

        return (
        <div id="postIndexItem">  
            <Link to={`/posts/${this.props.post.id}`} id>
                <img src={this.props.post.photoUrl} height="300" width="300"/>
                <div id="postIndexItemTextContainer">
                    <div id="titleText">
                   {this.props.post.title}
                   <Link to={`/tags/${this.props.tagIndex[buttonTag]}`}><div className="buttonTag">{buttonTag}</div></Link>
                   </div>
                   <div id="postIndexItemKicker">
                    {this.props.post.kicker}
                   </div>
                </div>
            </Link>
        </div>
        )
    }
}


export default PostIndexItem;