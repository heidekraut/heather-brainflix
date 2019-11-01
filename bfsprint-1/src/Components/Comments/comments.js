import React, { Component } from 'react'
import './comments.scss'

export class Comments extends Component {
    render() {
        return (
            <div>
                <h3 className='comments__title'>Comments</h3>

                <form className="commentsform">
                    <div className="commentsform__profile-image-large"></div>
                    <section className="commentsform__comment-input-container">
                    <label for="commentsform__comment-input-area">Join the Conversation</label>
                    <textarea nameName="comment" id="commentsform__comment-input-area" placeholder="comment here" required></textarea>
                    <button type="submit" className="commentsform__post-button" id="commentsform__submitButton" required>Comment</button>
                    </section>
                </form>
                
            </div>    
        )
    }
}

export default Comments
