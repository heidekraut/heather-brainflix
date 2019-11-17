import React, { Component } from 'react';
import './UploadVideo.scss';
import Header from '../Header/header';
import './UploadVideo.scss';
import videoPreview from '../../Assets/images/Upload-video-preview.jpg';
import axios from 'axios';

const nanoid = require('nanoid')
const url = 'https://localhost:8090';


export class UploadVideo extends Component {

    handlePublish = (event) => {
        event.preventDefault()

        let inputValueTitle = event.target.title.value; 
        let inputValueDescription = event.target.description.value; 

        console.log(inputValueDescription, inputValueTitle);


     axios.post(`${url}/videos`, {
        id: nanoid,
        title: inputValueTitle,
        description: inputValueDescription,
       })
    .then(function (response) {
        console.log(response);
///redirect to home page 

    })
    .catch(function (error) {
        console.log(error);
      });
    }


    render() {
        return (
            <>
                <Header />
                <section className="uploadvideo">
                <h2 className="uploadvideo__title">Upload Video</h2>

                    <div className="uploadvideo__inner-container">
                        <span className="uploadvideo__thumbnail-title">Video Thumbnail</span>

                            <div className="uploadvideo__thumbnail-container">
                                <img src={videoPreview} alt="bike" className="uploadvideo__preview-image"></img>
                            </div>

                        <form onSubmit={this.handlePublish} className="uploadvideo__form">
                            <section className="uploadvideo__form-container">
                                <div className="uploadvideo__form-container textboxes">
                                    <label htmlFor="" className="uploadvideo__label1">Title your video</label>
                                    <textarea name="title" className="uploadvideo__text-container" id="" placeholder="Add a title to your video" required></textarea>

                                    <label htmlFor="" className="uploadvideo__label2">Add a video Description</label>
                                    <textarea name="description" className="uploadvideo__text-container second" id="" placeholder="Add a description of your video" required></textarea>
                                </div>
                                <div className="uploadvideo__button-container">
                                    <button value={""} name="publishButton" className="uploadvideo__button-publish" id="01" required>Publish</button>
                                    <button className="uploadvideo__button-cancel" id="02" required>Cancel</button>
                                </div>
                            </section>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}

export default UploadVideo
