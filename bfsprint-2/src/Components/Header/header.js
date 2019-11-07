import React, { Component } from 'react';
import './header.scss';
import Logo from  '../../Assets/logos/Logo-brainflix.svg';
import searchLogo from '../../Assets/icons/SVG/Icon-search.svg';
import profileImage from '../../Assets/images/Mohan-muruge.jpg';
import uploadPlus from '../../Assets/icons/SVG/Icon-upload.svg';
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header className="header">

                <Link to="/" className="header__logo">
                 <img src={Logo} alt="logo"></img>
                </Link>

                <div className="header__inner-container">
                
                    <div className="header__search-bar">
                        <img className="header__search-icon" src={searchLogo} />
                        <span className="header__search-txt">Search</span>
                    </div>

                    <div className="header__smaller-container">
                            <div className="header__upload-button-container">

                                 
                                <Link to="/uploadvideo">
                                <button className="header__upload-button">Upload </button>
                                <img src={uploadPlus} alt="icon logo"/>
                                </Link>
                                
            
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
