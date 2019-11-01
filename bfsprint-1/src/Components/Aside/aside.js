import React, { Component } from 'react'
// import '../Aside/aside.scss';
import './aside.scss'
// import videoList from '../../Components/Main/data';


export class Aside extends Component {
    render() {
        console.log(this.props);
        
        return (
                <section className="video-list">
                    {
                    this.props.video.map((video) => {
                        return <div className='video-list__container' key={video.id} >
                            <img className='video-list__image' src={video.image} />
                                <div className='video-list__info-container'>
                                    <p className="video-list__title">{video.title}</p>
                                    <p className="video-list__channel">{video.channel}</p>
                                </div>
                        </div>  
                        })
                    }
                </section>
        )
    }
}

export default Aside
