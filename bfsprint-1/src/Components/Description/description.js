import React, { Component } from 'react';
import views from "../../Assets/icons/SVG/Icon-views.svg";
import likes from "../../Assets/icons/SVG/Icon-likes.svg";
import './description.scss';


export class Description extends Component {
    render() {

        return (
            <div className="description">
                    <h1 className="description__title">{this.props.mainVideo.title}</h1>

                    <div className="description__video-info">

                        <div className="description__byline-date-container">
                            <span className="description__byline">By {this.props.mainVideo.channel}</span>
                            <span className="description__date">{this.props.mainVideo.timestamp}</span>
                        </div>

                        <div className="description__social-container">

                                <div className="description__views-container">
                                    <img src={views} alt="views icon"/>
                                    <span className="description__views">{this.props.mainVideo.views}</span>
                                </div>

                                <div className="description__likes-container">
                                    <img src={likes} alt="likes icon"/>
                                    <span className="description__views">{this.props.mainVideo.likes}</span>
                                </div>

                    </div>

                    </div>  
                    <p className="description__paragraph">{this.props.mainVideo.description}</p>
                </div>
        )
    }
}

export default Description
