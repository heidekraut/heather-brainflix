import React, { Component } from 'react';
import Header from '../Header/header';
import Video from '../Video/Video';
import Description from '../Description/description';
import Aside from '../Aside/aside';
import videoList from '../Main/data';
import Comments from '../Comments/comments';
import mainVideo from './data-main-vid';

export class Main extends Component {
    state = {
        videos: videoList,
        mainvideo: mainVideo
    }

    render() {
        
        return (
            <div>
                <Header/>
                <Video mainVideo={this.state.mainvideo}/>
                <div className='main-content-container'>
                <Description/>
                <Comments />
                <Aside video={this.state.videos}/>
                </div>
            </div>
        )
    }
}

export default Main
