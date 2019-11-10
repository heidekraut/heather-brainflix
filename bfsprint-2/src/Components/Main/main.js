import React, { Component } from 'react';
import Header from '../Header/header';
import Video from '../Video/Video';
import Description from '../Description/description';
import Aside from '../Aside/aside';
import Comments from '../Comments/comments';
import './main.scss';
import axios from 'axios';

const url = 'https://project-2-api.herokuapp.com';


export class Main extends Component {
    state = {
        mainvideo: {}
    }

    componentDidMount() {

        axios.get(`${url}/videos/1af0jruup5gu?api_key=heather`)
            .then((response) => {

                this.setState({
                    mainvideo: response.data
                })

            })

    }

    componentDidUpdate(prevProps) {
        console.log(prevProps.match.params.id);
        
        if (prevProps.match.params.id !== this.props.match.params.id) {
        axios.get(`${url}/videos/${this.props.match.params.id}?api_key=heather`)
            .then(response => {
                console.log(response.data);
                
                this.setState({
                    mainvideo: response.data
                })
            })
        } 
    }



    render() {
        console.log(this.props.match.params.id);
        


        return (
            <div className="main">
                <Header />
                <Video mainVideo={this.state.mainvideo} />
                <div className='main-content-container'>
                    <div className='main-content-container__description-comments'>
                        <Description mainVideo={this.state.mainvideo} />
                        <Comments />
                    </div>
                    <Aside className='main-content-container__aside-videos' mainVideo={this.state.mainvideo} />
                </div>
            </div>
        )
    }
}

export default Main
