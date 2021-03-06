import React, { Component } from 'react';
import Display from './Display';
import Panel from './Panel';

class Clock extends Component {

    constructor() {
        super();
        
        this.state = {
            date: new Date(),
            isDateVisible: true
        };
        console.log('did we reach @ console');
        this.toggleDate = this.toggleDate.bind(this);
    }

    componentDidMount() {
        this.startTime();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    startTime() {        
        this.timer = setInterval(() => {
            this.setState(() => ({ date: new Date()}));
        }, 1000);
    }   
    
    toggleDate() {
        this.setState((prevState) => ({ isDateVisible: !prevState.isDateVisible}));
        try {
            fetch('/logger')
                .then(res => res.json())
                .then(res => {console.log(res);});
        } catch (error) {
            console.log(error);            
        }
    }

    render() {
        console.log('we reached here ?');
        return (
            <div>
                <Panel toggleDate={this.toggleDate} dateOn={this.state.isDateVisible} />
                <Display date={this.state.date} isDateVisible={this.state.isDateVisible} />
            </div>
        );
    }
}

export default Clock;