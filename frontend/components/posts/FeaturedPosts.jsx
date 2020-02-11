import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedPost extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {        
        const { fP } = this.props;
        const primary = fP[0];
        const secondary = fP[1];
        const tertiary = fP[2];
        return ( 
            <div className="featured"> 
                {fP.length > 0 ? (
                <div className="featured-posts"> 
                    <div className="primary-featured-post">
                        <Link to={`/posts/${primary.id}`}>
                            <img src={primary.photoUrl}/>
                            <div className="primaryFeaturedTextContainer">
                                <div id="primary-tag" className="tag-box">
                                    Recipes
                                </div>
                                <div>
                                    {primary.title}
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="secondary-tertiary-wrapper">
                    <div className="secondary-featured-post">
                        <Link to={`/posts/${secondary.id}`}>
                            <img src={secondary.photoUrl}/>
                            <div className="secondaryFeaturedTextContainer">
                                <div id="secondary-tag" className="tag-box">
                                    How-To
                                </div>
                                <div>
                                    {secondary.title}
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="tertiary-featured-post">
                        <Link to={`/posts/${tertiary.id}`}>
                            <img src={tertiary.photoUrl}/>
                            <div className="tertiaryFeaturedTextContainer">
                                <div id="tertiary-tag" className="tag-box">
                                    Culture
                                </div>
                                <div>
                                    {tertiary.title}
                                </div>
                            </div>
                        </Link>
                    </div>
                    </div>
                </div>
                ) : null}
            </div>
        )
    }
}

export default FeaturedPost;