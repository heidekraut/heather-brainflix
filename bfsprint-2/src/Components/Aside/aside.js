import React, { Component } from 'react'
import './aside.scss';
import { Link } from 'react-router-dom';


export class Aside extends Component {
    render() {

        //    console.log(this.props.videos)
        // const filteredItems = items.slice(0, i).concat(items.slice(i + 1, items.length))

        return (
            <section className="video-list">
                <h3 className="video-list__next-video">Next Video</h3>
                {
                    this.props.videos.filter((item) => {
                        return item.id !== this.props.mainVideo.id
                    })
                        .map((video) => {
                            return <Link to={`/videos/${video.id}`} className='video-list__container' key={video.id} >
                                <img className='video-list__image' src={video.image} />
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
