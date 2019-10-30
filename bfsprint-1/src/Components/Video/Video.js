import React, { Component } from 'react';
import './video.scss';

export class Video extends Component {
    render() {
        return (
            <div>
                <iframe className="video"></iframe>
            </div>
        )
    }
}

export default Video
