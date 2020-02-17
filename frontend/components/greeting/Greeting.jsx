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
            <Link to="/"><div id="mainIconWrapper"><img id="mainIcon" src="Serious_Eats_Logo.png" height="100" width="100"/></div></Link>
            </div>
            <nav id="mainNav">
                <div className="containerDropdown">
                    <div className="dropdown" id="recipeDropdown"><strong>Recipes</strong><div className="upArrow" id="recipeArrow"></div>
                        <div className="dropdownElements" id="recipes">
                            {/* <div className="dropdownElement">Browse By: */}
                                <Link to="/tags/"><div className="dropdownSubElement browseBy"><div className="flexDropdownElement">Ingredient</div></div></Link>
                                <div className="dropdownSubElement browseBy"><div className="flexDropdownElement">Cuisine</div></div>
                                <div className="dropdownSubElement browseBy"><div className="flexDropdownElement">Dish Type</div></div>
                                <div className="dropdownSubElement browseBy"><div className="flexDropdownElement">Cooking Method</div></div>
                            {/* </div> */}
                        </div>
                    </div>
                 </div>
                 <div className="containerDropdown">
                    <div className="dropdown" id="howToDropdown"><strong>How-Tos</strong><div className="upArrow" id="howToArrow"></div>
                        <div className="dropdownElements" id="howTos">
                            <div className="dropdownElement">
                                <div className="dropdownSubElement"><div className="flexDropdownElement">Cooking Techniques</div></div>
                                <Link to="/tags/113"><div className="dropdownSubElement"><div className="flexDropdownElement">Ingredient Guides</div></div></Link>
                                <div className="dropdownSubElement"><div className="flexDropdownElement">Equipment</div></div> 
                                <div className="dropdownSubElement"><div className="flexDropdownElement">Kitchen Tips</div></div> 
                                <div className="dropdownSubElement"><div className="flexDropdownElement">Entertaining</div></div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerDropdown">
                    <div className="dropdown" id="productDropdown"><strong>Product Recs</strong><div className="upArrow" id="productArrow"></div>
                        <div className="dropdownElements" id="productRecs">
                            <div className="dropdownElement">
                            <div className="dropdownSubElement">Equipment Reviews</div>
                            <div className="dropdownSubElement">Taste Tests</div>
                            <div className="dropdownSubElement">Buying Guides</div>
                            <div className="dropdownSubElement">Editor's Picks</div>  
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="containerDropdown">
                    <div className="dropdown" id="cultureDropdown"><strong>Culture</strong><div className="upArrow" id="cultureArrow"></div>
                        <div className="dropdownElements" id="culture">
                            <div className="dropdownElement">
                                <Link to="/tags/115"><div className="dropdownSubElement">Cuisine Guides</div></Link>
                                <div className="dropdownSubElement">Food History</div>
                                <div className="dropdownSubElement">Food Science</div>
                                <div className="dropdownSubElement">Personal Essays</div>
                            </div>
                        </div>
                    </div>
                </div>
                    {/* <h4 id="greetingText">Welcome, {props.currentUser.username}</h4> */}
                    <div id="profileDiv">
                        <img id="profileIcon" src="https://img.icons8.com/ios-filled/50/000000/user-female-circle.png"/>
                    </div>
                    <div id="searchDiv" onClick={() => props.openModal('search')}>
                        <img id="searchIcon" src="https://img.icons8.com/pastel-glyph/64/000000/search--v2.png"/>
                    </div>
            </nav>
        </div>
        <div id="bannerBar" className="bannerBar">
            <div id="progressBar" className="progressBar"></div>
        </div>
        </div>
    )
    return props.currentUser ? PersonalGreeting() : SessionLinks();
}

$(window).scroll(function() {     
    let scroll = $(window).scrollTop();
    let scrollPercent = 100 * scroll / ($(document).height() - $(window).height());
    let el = $("#mainIcon");
    let elSrc = el.attr("src");
    let banner = $("#bannerBar");
    let progress = $("#progressBar");
    if (scroll > 100 && elSrc !== "smallSELogo.png") {
       el.fadeOut(250);
       setTimeout(function() {
           el.attr('src', 'smallSELogo.png').css({'top': '0%', 'left':'6.5%', 'width':'50px', 'height':'50px'})
       }, 400)
       setTimeout(function() {
        el.fadeIn();
       },450)
       banner.removeClass('bannerBar').addClass('thickBar', 500);
       progress.addClass('progressBar', 500).css('width', scrollPercent+"%");
    } else if (scroll > 100) {
        progress.css('width', scrollPercent+"%");
    }
    else if (scroll <= 100 && elSrc !== "Serious_Eats_Logo.png") {
        el.fadeOut(250);
        setTimeout(function() {
            el.attr('src', 'Serious_Eats_Logo.png').css({'height':'75px', 'width':'90px', 'top': '10%', 'left':'5%'})
        }, 400)
        setTimeout(function() {
            el.fadeIn();
        }, 450)
        banner.removeClass('thickBar').addClass('bannerBar', 2000);
        progress.removeClass('progressBar');
    }
});
