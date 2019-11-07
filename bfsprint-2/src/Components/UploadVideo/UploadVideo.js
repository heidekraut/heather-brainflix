import React, { Component } from 'react';
import './UploadVideo.scss';
import Header from '../Header/header';
import './UploadVideo.scss';
import videoPreview from '../../Assets/images/Upload-video-preview.jpg';
import { Link } from 'react-router-dom'

export class UploadVideo extends Component {
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

                        <form className="uploadvideo__form">
                            <section className="uploadvideo__form-container">
                                <div className="uploadvideo__form-container textboxes">
                                    <label for="" className="uploadvideo__label1">Title your video</label>
                                    <textarea className="uploadvideo__text-container" id="" placeholder="Add a title to your video" required></textarea>

                                    <label for="" className="uploadvideo__label2">Add a video Description</label>
                                    <textarea className="uploadvideo__text-container second" id="" placeholder="Add a description of your video" required></textarea>
                                </div>
                                <div className="uploadvideo__button-container">
                                    <button type="" className="uploadvideo__button-publish" id="" required>Publish</button>
                                    <button type="" className="uploadvideo__button-cancel" id="" required>Cancel</button>
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
