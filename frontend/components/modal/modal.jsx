import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { Redirect } from 'react-router-dom';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.state = {
          searchBar: '',
          submitted: false
        }
        this.setTextInputRef = element => {
            this.textInput = element;
        }
        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus();
        }
        this.searchRegex = this.searchRegex.bind(this);
        this.update = this.update.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    searchRegex() {
      let searchTerm = $('#searchBar').val();
      let regex = RegExp(searchTerm, "i");
      let posts = this.props.posts;
      let newPosts = posts.filter(post => {
        return regex.test(post.title)
      })
      return searchTerm;
    }

    componentDidUpdate() {
        this.focusTextInput();
    }

    update(field) {
      return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleKeyPress(event) {
      // Event.preventDefault();
      if (event.key === 'Enter'){
        this.setState({ submitted: true })
      } 
    }

    render() {
        if (!this.props.modal) {
            return null;
        } else if (this.props.modal === 'search' && !this.state.submitted) {
            return (
                <div className="modal-background" onClick={this.props.closeModal}>
                  <input autocomplete="off"   value={this.state.searchBar} onChange={this.update('searchBar')} ref={this.setTextInputRef} id="searchBar" type="text" className="modal-child" placeholder="Type to search..." onClick={e => e.stopPropagation()} onKeyPress={this.handleKeyPress}/>
                  <div id="searchIconWrapper">
                    <img id="searchIcon" src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png"/>
                  </div>
                </div>
            )
        }  else {
            this.setState({ submitted: false })
            this.props.closeModal();
            return (
              <Redirect to={`/search/${this.state.searchBar}`}/>
            )
        }
    }  
  }

const mapStateToProps = state => {
    return {
      modal: state.modal,
      posts: Object.values(state.entities.posts)
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      closeModal: () => dispatch(closeModal()),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Modal);