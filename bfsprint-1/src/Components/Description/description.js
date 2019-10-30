import React, { Component } from 'react';
import './description.scss'

export class Description extends Component {
    render() {
        return (
            <div className="description">
                <h1 className="description__title">BMX Rampage 2018 Rampage</h1>
                <span className="description__byline">By Red Cow</span>
                <p className="description__paragraph">On a gusty day in Southern Utah a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments that sports has ever seen. While mother nature only allowed for one full run before it became impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time, eight years after his Red Cow Rampage record.</p>
            </div>
        )
    }
}

export default Description
