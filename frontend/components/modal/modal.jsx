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
                  <div id="searchIconWrapper">
                        <img id="searchIcon" src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png"/>
                  </div>
                </div>
            )
        }   
    }  
  }

const mapStateToProps = state => {
    return {
      modal: state.modal
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      closeModal: () => dispatch(closeModal())
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Modal);