import React, { Component } from 'react';
import mainVideo from '../Main/data-main-vid';
import './video.scss';

export class Video extends Component {
    render() {
        console.log(this.props.mainVideo.image0);
        return (
            <div>
                <img src={mainVideo.image0} className="video" alt='bmx kids' />
            </div>
        )
    }
}

export default Video

console.log(mainVideo)
