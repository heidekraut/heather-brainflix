import React, { Component } from 'react';
import mainVideo from '../Main/data-main-vid';
import './video.scss';

export class Video extends Component {
    render() {

        return (
            <section className='main-video'>
                <video poster={this.props.mainVideo.image} className="main-video__video" alt='bmx kids'>
                </video>
            </section>
        )
    }
}

export default Video

