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
        <div className="header">
        <div className="personalGreetingDiv">
            <div id='iconAndTitle'>
            <Link to="/"><div id="mainIconWrapper"><img id="mainIcon" src="cooking_pot.png" height="100" width="100"/></div></Link>
            <h2 id='titleText'>Mean Eats</h2>
            </div>
            <nav id="mainNav">
                <div id="dropdownMenus">
                    <div className="dropdown">Recipes
                        <div className="dropdownElements">
                            <div className="dropdownElement">Browse By:
                                <Link to="/tags/Ingredient"><div className="dropdownSubElement">Ingredient</div></Link>
                                <div className="dropdownSubElement">Cuisine</div>
                                <div className="dropdownSubElement">Dish Type</div>
                                <div className="dropdownSubElement">Cooking Method</div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">How-Tos
                        <div className="dropdownElements">
                            <div className="dropdownElement">
                                <div className="dropdownSubElement">Cooking Techniques</div>
                                <div className="dropdownSubElement">Ingredient Guides</div>
                                <div className="dropdownSubElement">Equipment</div> 
                                <div className="dropdownSubElement">Kitchen Tips</div> 
                                <div className="dropdownSubElement">Entertaining</div> 
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">Culture
                        <div className="dropdownElements">
                            <div className="dropdownElement">
                                <div className="dropdownSubElement">Cuisine Guides</div>
                                <div className="dropdownSubElement">Food History</div>
                                <div className="dropdownSubElement">Food Science</div>
                                <div className="dropdownSubElement">Personal Essays</div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="greetingAndLogout">
            <h4 id="greetingText">Welcome, {props.currentUser.username}</h4>
            <button id="logoutButton" onClick={props.logout}>Logout</button>
            </div>
        </div>
        <div id="bannerBar">
            <div id="progressBar"></div>
        </div>
        </div>
    )
    console.log(props);
    return props.currentUser ? PersonalGreeting() : SessionLinks();
}

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    var el = $("#mainIcon")
    if (scroll > 100) {
        $(".personalGreetingDiv").addClass("collapse");
        $("#mainIcon").detach();
    }
    else {
        $(".personalGreetingDiv").removeClass("collapse");
        $(".personalGreetingDiv").prepend(<img id="mainIcon" src="cooking_pot.png" height="100" width="100"/>)
    }
});
