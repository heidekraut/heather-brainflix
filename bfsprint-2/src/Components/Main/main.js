import React, { Component } from 'react';
import Header from '../Header/header';
import Video from '../Video/Video';
import Description from '../Description/description';
import Aside from '../Aside/aside';
import Comments from '../Comments/comments';
import './main.scss';
import axios from 'axios';

const apiKey = "d863ef0a-8d96-465a-9c42-4a0a8914cf13";
const url = 'https://project-2-api.herokuapp.com';
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

        axios.get(`${url}/videos/1af0jruup5gu?api_key=heather`)
            .then((response) => {

                this.setState({
                    mainvideo: response.data
                })
            })

        axios.get(`${url}/videos/?api_key=heather`)
            .then((response) => {

                this.setState({
                    videos: response.data
                })
            })

    }

    componentDidUpdate() {
        axios.get(`${url}/videos/${this.props.match.params.id}?api_key=heather`)
            .then(response => {

                this.setState({
                    videos: response.data
                })
            })
    }



    render() {


        return (
            <div>
                <Header />
                <Video mainVideo={this.state.mainvideo} />
                <div className='main-content-container'>
                    <div className='main-content-container__description-comments'>
                        <Description mainVideo={this.state.mainvideo} />
                        <Comments />
                    </div>
                    <Aside className='main-content-container__aside-videos' videos={this.state.videos} mainVideo={this.state.mainvideo} />
                </div>
            </div>
        )
    }
}

export default Main
