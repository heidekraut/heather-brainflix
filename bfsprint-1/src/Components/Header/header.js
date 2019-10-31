import React, { Component } from 'react';
import './header.scss';
import Logo from  '../../Assets/logos/Logo-brainflix.svg'

export class Header extends Component {
    render() {
        return (
            <header className="header">

                <img src={Logo} alt="logo"></img>
                    <div className="header__search-bar">
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
