import React, { Component } from 'react';
import './header.scss';
import Logo from  '../../Assets/logos/Logo-brainflix.svg';
import searchLogo from '../../Assets/icons/SVG/Icon-search.svg';
import profileImage from '../../Assets/images/Mohan-muruge.jpg';
import uploadPlus from '../../Assets/icons/SVG/Icon-upload.svg';

export class Header extends Component {
    render() {
        return (
            <header className="header">

                <img className="header__logo" src={Logo} alt="logo"></img>

                <div className="header__inner-container">
                
                    <div className="header__search-bar">
                        <img className="header__search-icon" src={searchLogo} />
                        <span className="header__search-txt">Search</span>
                    </div>

                    <div className="header__smaller-container">
                            <div className="header__upload-button-container">
                                <button className="header__upload-button">Upload 
                                <img src={uploadPlus} alt="icon logo"/>
                                </button>
                            </div>

                            <div className="header__profile-image-container">
                                <img className="header__profile-image" src={profileImage}></img>
                            </div>
                    </div>

                </div>

            </header>
        )
    }
}






export default Header
