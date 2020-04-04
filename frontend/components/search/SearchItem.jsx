import React from 'react';
import { Link } from 'react-router-dom';

class SearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchSteps(this.props.post.id);
        this.searchRegex = this.searchRegex.bind(this);
    }

    componentDidMount() {
        
    }

    searchRegex(queryTerm) {
        let searchTerm = queryTerm;
        let regex = RegExp(searchTerm, "i");
        let steps = this.props.steps;
        let newSteps = steps.filter(step => {
            return regex.test(step.body)
        })
        return newSteps[0];
    }

    render() {
        let regex = RegExp(this.props.searchTerm, "i");
        let filteredSentences;
        let unfilteredSentences;
        if (this.props.steps.length) {
            let step = this.searchRegex(this.props.searchTerm)
            let stepSentences = step.body.split('.')
            filteredSentences = stepSentences.filter(sentence => regex.test(sentence));
        }
        
        return (
            <div className="searchItem">
                <div className="searchItemContainer">
                    <div className="searchItemText">
                        <Link to={`/posts/${this.props.post.id}`}><div className="searchItemTitle">{this.props.post.title.split(' ').map(word => regex.test(word) ? <div className="markWrapper"><mark>{word}</mark>&nbsp;</div> : word+" ")}</div></Link>
                        <div className="searchItemPara">
                            {filteredSentences ? filteredSentences.map((sent, i) => (
                                i < 5 ? <div className="searchItemSent">{sent.split(' ').map((word,i) => regex.test(word) ? <div className="markWrapper"><mark>{word}</mark>&nbsp;</div> : word+" ")}</div> : null
                            )) : <div className="searchItemSent">{this.props.post.kicker}</div>}
                        </div>
                    </div>
                    <Link to={`/posts/${this.props.post.id}`}><div className="searchImageDiv"><img className="searchItemImage" src={this.props.post.photoUrl} height="200" width="240"/></div></Link>
                </div>
            </div>
        )
    }
}

export default SearchItem;