import React from 'react';
import { Link } from 'react-router-dom';

const logoTitle = () => (
    <div>
    <img src="cooking_pot.png" height="100" width="100"/>
    <br/>
    <h2 id='title-text'>Mean Eats</h2>
    </div>
)

export const Greeting = (props) => {
    const SessionLinks = () => {
        const loginLink = () => (
            <div id='loginLink'>
            {logoTitle()}
            <p id='loginLinkPara'>Already a user? Login&nbsp;
                <Link to="/login">here</Link>
            </p>
            </div>
        )
        const signupLink = () => (
            <div id='signupLink'>
            {logoTitle()}
            <p id='signupLinkPara'>Need an account? Sign up&nbsp;
                <Link to="/signup">here</Link>
            </p>
            </div>
        )
        return (props.location.pathname === '/login') ? signupLink() : loginLink() ;
    }
    const PersonalGreeting = () => (
        <div id="personalGreetingDiv">
            <div id='iconAndTitle'>
            <img id="mainIcon" src="cooking_pot.png" height="100" width="100"/>
            <h2 id='titleText'>Mean Eats</h2>
            </div>
            <div id="greetingAndLogout">
            <h4 id="greetingText">Welcome, {props.currentUser.username}</h4>
            <button id="logoutButton" onClick={props.logout}>Logout</button>
            </div>
        </div>
    )
    return props.currentUser ? PersonalGreeting() : SessionLinks();
}
