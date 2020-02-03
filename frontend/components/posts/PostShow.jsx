import React from 'react';

class PostShow extends React.Component {
    constructor(props) {
        super(props);   
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId);
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

    handleScroll(e) {
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
                <div className="ingredientsAndDirections">
                    {this.renderIngredients()}
                    {this.renderDirections()}
                </div>
            </div>
        )
    }
}

export default PostShow;