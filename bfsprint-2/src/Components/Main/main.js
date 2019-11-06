import React, { Component } from 'react';
import Header from '../Header/header';
import Video from '../Video/Video';
import Description from '../Description/description';
import Aside from '../Aside/aside';
import videoList from '../Main/data';
import Comments from '../Comments/comments';
import mainVideo from './data-main-vid';
import './main.scss';
import axios from 'axios';

const apiKey = "d863ef0a-8d96-465a-9c42-4a0a8914cf13";
const videoURL = 'https://project-2-api.herokuapp.com/videos/?api_key=heather';
// const idURL = 'https://project-2-api.herokuapp.com/' + {this.response.data[i].id} + '?api_key=heather'

// const videoArray = response.data;
// const mainVideoID = response.data[i].id

export class Main extends Component {
    state = {
        videos: [],
        mainvideo: {}
    }

    componentDidMount() {
        //axios request then sset state to the main video

        axios.get(videoURL)
        .then((response) => {

            console.log(response.data);

            this.setState({
                mainvideo: response.data[0]
            })
        })
    }

    componentDidUpdate() {

        axios.get(videoURL) 
        .then((response) => {

            console.log(response);
            this.setState({
                // videos: response.data
            })

        })
    }

    //no event handler -- use life cycle method to update state setState() of the main video 
// axios request when clicking on side video 



componentWillUnmount() {
    clearInterval(this.state.videos);
}


    render() {
        
        return (
            <div>
                <Header/>
                <Video mainVideo={this.state.mainvideo}/>
                <div className='main-content-container'>
                    <div className='main-content-container__description-comments'>
                        <Description mainVideo={this.state.mainvideo}/>
                        <Comments />
                    </div>
                    <Aside className='main-content-container__aside-videos' videos={this.state.videos} mainVideo={this.state.mainvideo}/>
                </div>
            </div>
        )
    }
}

export default Main
