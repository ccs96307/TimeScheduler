// src/Clock.js
import React, { Component } from 'react';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    document.title = 'Clock - TimeScheduler';
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: new Date()
    });
  }

  render() {
    const { currentTime } = this.state;
    return (
      <div>
        <h1>Clock Page</h1>
        <h2>{currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
