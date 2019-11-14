import React from 'react';
import { Link } from 'react-router-dom';



const PostIndexItem = (props) => {
    console.log(props);
    return (
        <div id="postIndexItem">  
            <Link to={`/posts/${props.post.id}`} id>
                <img src={props.post.photoUrl} height="300" width="300"/>
                <div id="postIndexItemTextContainer">
                    <div id="titleText">
                   {props.post.title}
                   </div>
                   <div id="postIndexItemKicker">
                    <em>{props.post.kicker}</em>
                   </div>
                </div>
            </Link>
        </div>
    )
}


export default PostIndexItem;