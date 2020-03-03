import React from 'react';
import { Redirect } from 'react-router-dom';
import SearchItemContainer from './SearchItemContainer';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchPosts();
        this.searchRegex = this.searchRegex.bind(this);
        this.state = {
            searchBar: '',
            submitted: false
        }
        this.update = this.update.bind(this);
        this.newSearch = this.newSearch.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.setTextInputRef = element => {
            this.textInput = element;
        }
        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus();
        }
    }

    componentDidUpdate() {
        this.focusTextInput();
        this.clearInput();
    }

    clearInput() {
        let input = $('.searchPageInput')
        input.val('');
    }

    newSearch() {
        this.setState({ submitted: true })
    }


    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    searchRegex() {
        let searchTerm = this.props.searchTerm;
        let regex = RegExp(searchTerm, "i");
        let posts = this.props.posts;
        let newPosts = posts.filter(post => {
            return regex.test(post.title)
        })
        return newPosts;
    }

    handleKeyPress(event) {
        if (event.key === 'Enter'){
          this.setState({ submitted: true })
        } 
      }

    render() {
        if (this.props.posts && !this.state.submitted) {
            let regexPosts = this.searchRegex();
            return (
                <div className="searchPage">
                    <div className="searchBarBlock">
                        <div className="resultsFor">RESULTS FOR</div>
                        <div className="searchInputDiv">
                            <img src="mini_search_icon.png" className="miniSearchIcon" height="20px" width="20px"/>
                            <input type="text" ref={this.setTextInputRef} onKeyPress={this.handleKeyPress} onChange={this.update('searchBar')} value={this.state.searchBar} className="searchPageInput"/>
                        </div>
                        <div className="searchButton" onClick={this.newSearch}>SEARCH</div>
                    </div>
                    {regexPosts.length ? regexPosts.map(post => <SearchItemContainer post={post} fetchSteps={this.props.fetchSteps} searchTerm={this.props.searchTerm}/>) : <div className="noResults">No results found for '{this.props.searchTerm}'.</div>}
                </div>
            )
        } else if (this.props.posts && this.state.submitted) {
            this.setState({ submitted: false })
            return (
                <Redirect to={`/search/${this.state.searchBar}`}/>
            )
        }
        else {
            return (
                null
            )
        }
    }
}

export default Search;