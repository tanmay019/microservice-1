import React, { Component } from 'react';
import Clock from './Clock';
import Header from './Header';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            title: 'React Clock',
        };

        console.log(13, 'React Clock');
    }

    render() {
        console.log(17, 'Rerender rate is:-');
        return (
            <div>
                <Header title={this.state.title} />
                <Clock />
            </div>
        );
    }
}
