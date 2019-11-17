import React, { Component } from 'react'
import './comments.scss'
import profileImage from '../../Assets/images/Mohan-muruge.jpg'

export class Comments extends Component {


    render() {

        console.log(this.props.mainVideo.comments)

        const commentsObj = this.props.mainVideo.comments
        console.log(commentsObj)

        const commentArray = this.props.mainVideo.comments.Object.keys(comments).map((i) => comments[i])
        console.log(commentArray)

        return (

            <section className="comments">
                <h3 className='comments__title'>3 Comments</h3>

                <form className="commentsform">
                    <img src={profileImage} className="commentsform__profile-image-large" alt="profile"/>
                    <section className="commentsform__comment-input-container">
                    <label htmlFor="commentsform__comment-input-area" className="commentsform__heading">Join the Conversation</label>
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
                                <p className="comments__comment">Comment</p>
                            </div>

                        </div>
                
                    </section>


                    <section className="comments__comment-container">

                        <div className="comments__innerCommentContainer">

                        <div className="comments__profileImageSmall"></div>

                            <div className="comments__words">
                                <span className="comments__user-name">Gary Wong</span>
                                <span className="comments__post-date">12/18/2019</span>
                                <p className="comments__comment">Comment</p>
                            </div>

                        </div>

                    </section>

                    <section className="comments__comment-container">

                        <div className="comments__innerCommentContainer">

                        <div className="comments__profileImageSmall"></div>

                            <div className="comments__words">
                                <span className="comments__user-name">Theodore Duncan</span>
                                <span className="comments__post-date">12/06/2019</span>
                                <p className="comments__comment">Comment</p>
                            </div>

                        </div>

                        </section>

                    
                
            </section>    
        )
    }
}

export default Comments
