import React, { Component } from 'react';
import Header from '../Header/header';
import Video from '../Video/Video';

export class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Video/>
            </div>
        )
    }
}

export default Main
