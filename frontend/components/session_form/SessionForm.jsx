import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        return (
            <div id='sessionErrors'>
                {this.props.errors.map((error, i) => (
                    <div key={`error${i}`}>{error}</div>
                ))}
            </div> 
        )
    }

    renderEmail() {
        if (this.props.formType === 'signup') {
            return (
            <label>
            <input className='sessionInput' 
                   type="text" 
                   placeholder=" email"
                   value={this.state.email}
                   onChange={this.update('email')}
                />
            </label>
            )
        }
    }

    render() {
        return (
        <div>
        {this.renderErrors()}
        <form  id='sessionForm' onSubmit={this.handleSubmit}>
            <label className='sessionLabel'>
                <input className="sessionInput"
                       type="text" 
                       placeholder=" username"
                       value={this.state.username}
                       onChange={this.update('username')}
                />
            </label>
            {this.renderEmail()}
            <label className='sessionLabel'>
                <input className="sessionInput"
                       type="password" 
                       placeholder=" password"
                       value={this.state.password}
                       onChange={this.update('password')}
                />
            </label>
            <button id="sessionButton" type="submit">{this.props.formType}</button>
        </form>
        </div>
        )
    }
}

export default SessionForm;