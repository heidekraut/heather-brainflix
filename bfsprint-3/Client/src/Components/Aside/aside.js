import React, { Component } from 'react'
import './aside.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const url = 'https://project-2-api.herokuapp.com';



export class Aside extends Component {
    state={
        videos: []
    }
    
componentDidMount() {
    axios.get(`${url}/videos/?api_key=heather`)
    .then((response) => {

        this.setState({
            videos: response.data
        })
    })
}


    render() {
        return (
            <section className="video-list">
                <h3 className="video-list__next-video">Next Video</h3>
                
                {
                    this.state.videos.filter((item) => {
                        return item.id !== this.props.mainVideo.id
                    })
                        .map((video) => {
                            return <Link to={`/videos/${video.id}`} className='video-list__container' key={video.id} >
                                <img className='video-list__image' src={video.image} alt="main video"/>
                                <div className='video-list__info-container'>
                                    <p className="video-list__title">{video.title}</p>
                                    <p className="video-list__channel">{video.channel}</p>
                                </div>
                            </Link>
                        })
                }
            </section>
        )
    }
}

export default Aside
