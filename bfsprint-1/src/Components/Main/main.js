import React, { Component } from 'react';
import Header from '../Header/header';
import Video from '../Video/Video';
import Description from '../Description/description';

export class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Video/>
                <Description/>
            </div>
        )
    }
}

export default Main
