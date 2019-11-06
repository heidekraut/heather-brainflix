import React, { Component } from 'react'
import './comments.scss'
import profileImage from '../../Assets/images/Mohan-muruge.jpg'

export class Comments extends Component {
    render() {
        return (
            <section className="comments">
                <h3 className='comments__title'>3 Comments</h3>

                <form className="commentsform">
                    <img src={profileImage} className="commentsform__profile-image-large"/>
                    <section className="commentsform__comment-input-container">
                    <label for="commentsform__comment-input-area" className="commentsform__heading">Join the Conversation</label>
                    <textarea className="comment" id="commentsform__comment-input-area" placeholder="comment here" required></textarea>
                    <button type="submit" className="commentsform__post-button" id="commentsform__submitButton" required>Comment</button>
                    </section>
                </form>

                    <section className="comments__comment-container">

                        <div className="comments__innerCommentContainer">

                        <div className="comments__profileImageSmall"></div>

                            <div className="comments__words">
                                <span className="comments__user-name">Michael Lyons</span>
                                <span className="comments__post-date">12/06/2019</span>
                                <p className="comments__comment">They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the best concert opening I have EVER witnessed.</p>
                            </div>

                        </div>
                
                    </section>


                    <section className="comments__comment-container">

                        <div className="comments__innerCommentContainer">

                        <div className="comments__profileImageSmall"></div>

                            <div className="comments__words">
                                <span className="comments__user-name">Gary Wong</span>
                                <span className="comments__post-date">12/18/2019</span>
                                <p className="comments__comment">Ever time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!</p>
                            </div>

                        </div>

                    </section>

                    <section className="comments__comment-container">

                        <div className="comments__innerCommentContainer">

                        <div className="comments__profileImageSmall"></div>

                            <div className="comments__words">
                                <span className="comments__user-name">Theodore Duncan</span>
                                <span className="comments__post-date">12/06/2019</span>
                                <p className="comments__comment">How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He's definitely my favourite ever!</p>
                            </div>

                        </div>

                        </section>

                    
                
            </section>    
        )
    }
}

export default Comments
