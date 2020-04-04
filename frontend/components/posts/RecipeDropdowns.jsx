import React from 'react';
import { $CombinedState } from 'redux';
import { Link } from 'react-router-dom';

const traverse = (tag, i, tagIndex) => {  
    if (tag.subs.length) {
        return (
            <ul className={`dropdown${i++}`}>
                {tag.subs.map(sub => (
                    <li className="sub-dropdown-element">
                        <Link to={`/tags/${tagIndex[sub.tag_name]}`}><div className="tagWrapper">{sub.tag_name}</div></Link>
                        {traverse(sub, i, tagIndex)}
                    </li>
                ))}
            </ul>
        )
    } else {
        return null;
    }
}

function swap(json) {
    var ret = {};
    for(var key in json){
      ret[json[key]] = key;
    }
    return ret;
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
    console.log(props.tagIndex, "here i am");
    let tagIndex = props.tagIndex;
    if (props.tags.length) {
        const recipes = props.tags[0].subs[0];
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
                            {traverse(tag,0, tagIndex)}
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