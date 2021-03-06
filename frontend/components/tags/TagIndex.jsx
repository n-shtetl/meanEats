import React from 'react';
import PostIndexItem from '../posts/PostIndexItem';

class TagIndex extends React.Component {
    constructor(props) {
        super(props);
        this.traverse = this.traverse.bind(this);
        this.swap = this.swap.bind(this);
    }

    swap(json) {
        var ret = {};
        for(var key in json){
          ret[json[key]] = key;
        }
        return ret;
    }

    componentDidMount() {
        this.props.fetchPosts();
        // this.props.fetchTag(this.props.tagId);
        this.props.fetchPostToTags()
        this.props.fetchTags();
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
        let tagHeader;
        if (this.props.tags.tagIndex) {
            this.props.tags.tagIndex.forEach(tag => {
                if (tag.id === this.props.tagId) {
                    tagHeader = tag;
                }
            })
        }
        let tagIndex = {};
        if (this.props.tags.tagIndex) {
            let tagsArr = this.props.tags.tagIndex;
            tagsArr.forEach(tag => {
                tagIndex[tag.id] = tag.tag;
            })
        }
        
        let tagsInOrder;
        if (this.props.tags.tags) {
            tagsInOrder = this.traverse(this.props.tags.tags);
        }

        let postIds;
        let posts;
        if (this.props.pTT) {
            postIds = Object.values(this.props.pTT).filter(pTT => pTT.tag_id === this.props.tagId).map(pTT => pTT.post_id);
            posts = this.props.posts.filter(post => postIds.includes(post.id))
        }

        return (
            <div className="tagIndex">
                <div className="tagHeader">
                    <div>{tagHeader ? tagHeader.tag : null}</div>
                </div>
                <div className="tagIndexPosts">
                {posts.map((post, i) => {
                    return (
                    <PostIndexItem post={post}
                                    tags={Object.values(this.props.pTT).filter(pTT => pTT.post_id === post.id).map(pTT => pTT.tag_id).map(id => tagIndex[id])}
                                    tagsInOrder={tagsInOrder}
                                    tagIndex={this.swap(tagIndex)}
                                    key={post.id}
                                    />
                    )
                })}
                </div>

            </div>
        )
    }
}

export default TagIndex;