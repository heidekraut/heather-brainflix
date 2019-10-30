import React, { Component } from 'react';
import './header.scss';
import logo from  '../../Assets/icons/SVG/Icon-likes.svg'

export class Header extends Component {
    render() {
        return (
            <header className="header">

                    {/* <Logo/> */}
                    <div className="header__search-bar">
                        <img src="..."></img>
                        <span className="header__search-txt">Search</span>
                    </div>
                        <button className="header__upload-button">Upload</button>
                    <div className="header__profile-image-container">
                        <img className="header__profile-image"></img>
                    </div>
            </header>
        )
    }
}






export default Header
