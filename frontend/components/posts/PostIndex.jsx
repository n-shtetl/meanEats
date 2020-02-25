import React from 'react';
import PostIndexItem from './PostIndexItem';
import FeaturedPosts from './FeaturedPosts';
import RecipeDropdowns from './RecipeDropdowns'
import { fetchPost } from '../../util/post_api_util';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { allHowTo: false, allCulture: false }
        this.traverse = this.traverse.bind(this);
        this.props.fetchPosts();
        this.props.fetchPostToTags();
        this.props.fetchTags();
        this.props.fetchComments();
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchPostToTags();
        this.props.fetchTags();
        this.props.fetchComments();
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
        const { posts } = this.props;
        const { postToTags } = this.props;
        const { tags } = this.props;
        console.log(tags);
        let tagIndex = {};
        if (tags.length) {
            let tagsArr = tags[1];
            tagsArr.forEach(tag => {
                tagIndex[tag.id] = tag.tag;
            })
        }
        console.log(tagIndex);
        let tagsInOrder;
        if (tags.length) {
            tagsInOrder = this.traverse(tags[0])
        }
        
        let featuredPostIds = postToTags.filter(pTT => pTT.tag_id === 18).map(pTT => pTT.post_id);
        let featuredPosts = [];
        posts.forEach(function(post) {
            if (featuredPostIds.some(id => id === post.id)) {
                featuredPosts.push(post);
            }      
        })

        let howToPostIds = this.props.postToTags.filter(pTT => pTT.tag_id === 3).map(pTT => pTT.post_id);
        let howToPosts = [];
        posts.forEach(function(post) {
            if (howToPostIds.some(id => id === post.id)) {
                howToPosts.push(post);
            }
        })

        let culturePostIds = this.props.postToTags.filter(pTT => pTT.tag_id === 4).map(pTT => pTT.post_id)
        let culturePosts = [];
        posts.forEach(function(post) {
            if (culturePostIds.some(id => id === post.id)) {
                culturePosts.push(post);
            }
        })
        console.log(this.props);
        return (
            <div id="postIndexWrapper">
            <FeaturedPosts className="featuredPosts" fP={featuredPosts}/>
            <RecipeDropdowns tags={tags} />
            <div className="howToHeader">HOW-TOS</div>
            <div className="howToPosts">
                {this.state.allHowTo ? 
                    howToPosts.map((post, i) => i < 8 ? ( 
                    <PostIndexItem post={post}
                                    tags={postToTags.filter(pTT => pTT.post_id === post.id).map(pTT => pTT.tag_id).map(id => tagIndex[id])}
                                    tagsInOrder={tagsInOrder}
                                    key={post.id}/>
                    ) : null) :
                    howToPosts.map((post) => (
                        <PostIndexItem post={post}
                                        tags={postToTags.filter(pTT => pTT.post_id === post.id).map(pTT => pTT.tag_id).map(id => tagIndex[id])}
                                        tagsInOrder={tagsInOrder}
                                        key={post.id}/>))
                }
            </div>
            <div className="seeMoreDiv" onClick={() => this.setState({allHowTo: !this.state.allHowTo})}>
                <div className="seeMoreBarContainer">
                    <div className="seeMoreBar"/>   
                </div>
                {this.state.allHowTo ? <div className="seeMoreText">See More Posts</div> : <div className="seeMoreText">See Less Posts</div>}
            </div>
            <div className="cultureHeader">СULTURE</div>
            <div className="culturePosts">
                {!this.state.allCulture ? 
                    culturePosts.map((post, i) => i < 8 ? ( 
                    <PostIndexItem post={post}
                                    tags={postToTags.filter(pTT => pTT.post_id === post.id).map(pTT => pTT.tag_id).map(id => tagIndex[id])}
                                    tagsInOrder={tagsInOrder}
                                    key={post.id}/>
                    ) : null) :
                    culturePosts.map((post) => (
                        <PostIndexItem post={post}
                                        tags={postToTags.filter(pTT => pTT.post_id === post.id).map(pTT => pTT.tag_id).map(id => tagIndex[id])}
                                        tagsInOrder={tagsInOrder}
                                        key={post.id}/>))
                }
            </div>
            <div className="seeMoreDiv" onClick={() => this.setState({allCulture: !this.state.allCulture})}>
                <div className="seeMoreBarContainer">
                    <div className="seeMoreBar"/>   
                </div>
                {!this.state.allCulture ? <div className="seeMoreText">See More Posts</div> : <div className="seeMoreText">See Less Posts</div>}
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