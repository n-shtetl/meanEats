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
                {fP.length === 3 ? (
                <div className="featured-posts"> 
                    <div className="primary-featured-post">
                        <Link to={`/posts/${primary.id}`}>
                            <img src={primary.photoUrl}/>
                            <div className="primaryFeaturedTextContainer">
                                <Link to="/tags/2"><div id="primary-tag" className="tag-box">
                                    Recipes
                                </div></Link>
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
                                <Link to="/tags/3"><div id="secondary-tag" className="tag-box">
                                    How-To
                                </div></Link>
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
                                <Link to="/tags/4"><div id="tertiary-tag" className="tag-box">
                                    Culture
                                </div></Link>
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