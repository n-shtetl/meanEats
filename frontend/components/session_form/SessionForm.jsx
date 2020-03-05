import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        // this.submitDemoUser = this.submitDemoUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.loginGuest = this.loginGuest.bind(this);
    }

    loginGuest(username, password) {
        if (username.length > 0) {
          this.setState({ username: [this.state.username] + username.shift() }, 
            () => setTimeout(() => this.loginGuest(username, password), 25));
        } else if (password.length > 0) {
          this.setState({ password: [this.state.password] + password.shift() }, 
            () => setTimeout(() => this.loginGuest(username, password), 25));
        } else {
          return this.handleSubmit();
        }
      }

    handleDemoLogin() {
        let username = "demoUser".split('');
        let password = "password".split('');
        this.setState({ username: "", password: "" }, () => this.loginGuest(username, password));
    }

      

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
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

    submitDemoUser() {
        this.props.processForm({username: 'demoUser', password: 'password'});
    }

    renderDemoLogin() {
        if (this.props.formType === 'login') {
            return (
                <button id='demoLoginButton' className="button"
                        type="submit" 
                        onClick={this.handleDemoLogin}>
                            Demo Login
                </button>
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
            <div className="sessionFormButtons">
            <button className="button" type="submit">{this.props.formType}</button>
            {this.renderDemoLogin()}
            </div>
        </form>
        </div>
        )
    }
}

export default SessionForm;