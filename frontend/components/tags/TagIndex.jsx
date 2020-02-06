import React from 'react';

class TagIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchTag(this.props.tagId);
    }

    render() {
        let tag;
        console.log(this.props);
        if (this.props.tags) {
            tag = Object(this.props.tags[this.props.tagId])
        }
        console.log(tag.tag);
        return (
            <div className="tagHeader">{tag.tag}</div>
        )
    }
}

export default TagIndex;