import React from 'react';
import PostIndexItem from './PostIndexItem';
import FeaturedPosts from './FeaturedPosts';
import RecipeDropdowns from './RecipeDropdowns'
import { fetchPost } from '../../util/post_api_util';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { allHowTo: false }
        this.traverse = this.traverse.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchPostToTags();
        this.props.fetchTags();
    }

    traverse(tags) {
        let queue = [tags[0]];
        while (queue.length) {
            let shifted = queue.shift();
            console.log(shifted.tag_name);
            if (shifted.subs) {
                shifted.subs.forEach(sub => {
                    sub.
                    queue.push(sub)
                })
            }
        }
    }

    render() {
        const { posts } = this.props;
        const { postToTags } = this.props;
        const { tags } = this.props;
        // console.log(posts);
        // console.log(tags);
        // if (tags.length) {
        //     this.traverse(tags);
        // }
        // let tagTree = this.traverse(tag);
        // console.log(tagTree);
        // console.log(postToTags);
        let featuredPostIds = postToTags.filter(pTT => pTT.tag_id === 14).map(pTT => pTT.post_id);
        let featuredPosts = [];
        posts.forEach(function(post) {
            if (featuredPostIds.some(id => id === post.id)) {
                featuredPosts.push(post);
            }      
        })

        let howToPostIds = this.props.postToTags.filter(pTT => pTT.tag_id === 12).map(pTT => pTT.post_id);
        let howToPosts = [];
        posts.forEach(function(post) {
            if (howToPostIds.some(id => id === post.id)) {
                howToPosts.push(post);
            }
        })
    
        return (
            <div id="postIndexWrapper">
            <FeaturedPosts className="featuredPosts" fP={featuredPosts}/>
            <RecipeDropdowns tags={tags} />
            <div className="howToHeader">HOW-TOS</div>
            <div className="howToPosts">
                {this.state.allHowTo ? 
                    howToPosts.map((post, i) => i < 8 ? (
                    <PostIndexItem post={post}
                                    pTT={postToTags.filter(pTT => pTT.post_id === post.id)}
                                    fetchTag={this.props.fetchTag}
                                    key={post.id}/>
                    ) : null) :
                    howToPosts.map((post) => (
                        <PostIndexItem post={post}
                                        pTT={postToTags.filter(pTT => pTT.post_id === post.id)}
                                        fetchTag={this.props.fetchTag}
                                        key={post.id}/>))
                }
            </div>
            <div className="seeMoreDiv" onClick={() => this.setState({allHowTo: !this.state.allHowTo})}>
                <div className="seeMoreBarContainer">
                    <div className="seeMoreBar"/>   
                </div>
                {this.state.allHowTo ? <div className="seeMoreText">See More Posts</div> : <div className="seeMoreText">See Less Posts</div>}
            </div>
            {/* <div id="postIndex">
                {posts.map((post) => (
                    <PostIndexItem post={post}
                                   tags={postToTags.filter(pTT => pTT.post_id === post.id)}
                                   key={post.id}/>

                ))}
            </div> */}
            </div>
        )
    }
}

export default PostIndex;