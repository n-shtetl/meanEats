import React from 'react';
import { $CombinedState } from 'redux';

const traverse = (tag, i) => {  
    if (tag.subs.length) {
        return (
            <ul className={`dropdown${i++}`}>
                {tag.subs.map(sub => (
                    <li className="sub-dropdown-element">
                        {sub.tag_name}
                        {traverse(sub, i)}
                    </li>
                ))}
            </ul>
        )
    } else {
        return null;
    }
}

const display = (div) => {
    let dropdown;
    switch (div.className) {
        case "Ingredient-dropdown": 
            dropdown = $('.sub-dropdowns0');
            break;
        case "Cuisine-dropdown":
            dropdown = $('.sub-dropdowns1');
            break;
        case "Dish Type-dropdown":
            dropdown = $('.sub-dropdowns2');
            break;
        case "Cooking Method-dropdown":
            dropdown = $('.sub-dropdowns3');
            break;
    }
    if (dropdown.css("maxHeight") !== "0px") {
        dropdown.css({"maxHeight": "0px"})
    } else {
        dropdown.css({"maxHeight": "300px"})
    }
    // dropdown.prop("scrollHeight"
}


const RecipeDropdowns = (props) => {
    if (props.tags.length) {
        const recipes = props.tags[0].subs[1];
        return (
            <div className="outermost-recipe-dropdown-div">
            <div className="explore-div">Explore Recipes By</div>
            <div className="recipe-dropdowns">
                {recipes.subs.map((tag, i) => (
                    <div className={tag.tag_name +"-dropdown"} onClick={(e) => display(e.currentTarget)}>
                        <div className={tag.tag_name+"-dropdown-text"}>
                        {tag.tag_name}
                        </div>
                        <div className="dropdown-triangle"/>
                        <div className={`sub-dropdowns${i}`}>
                            {traverse(tag,0)}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        )
    } else {
        return null;
    }
    
}

export default RecipeDropdowns;