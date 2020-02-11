import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.setTextInputRef = element => {
            this.textInput = element;
        }
        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus();
        }
        this.searchRegex = this.searchRegex.bind(this);
    }

    searchRegex() {
      let searchTerm = $('#searchBar').val();
      console.log(searchTerm);
      let regex = RegExp(searchTerm, "i");
      console.log(regex);
      let posts = this.props.posts;
      let newPosts = posts.filter(post => {
        return regex.test(post.title)
      })
      console.log(newPosts);
      
    }

    componentDidUpdate() {
        this.focusTextInput();
    }

    render() {
        if (!this.props.modal) {
            return null;
        } else if (this.props.modal === 'search') {
            return (
                <div className="modal-background" onClick={this.props.closeModal}>
                  <input ref={this.setTextInputRef} id="searchBar" type="text" className="modal-child" placeholder="Type to search..." onClick={e => e.stopPropagation()}/>
                  <div id="searchIconWrapper" onClick={this.searchRegex}>
                        <img id="searchIcon" src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png"/>
                  </div>
                </div>
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