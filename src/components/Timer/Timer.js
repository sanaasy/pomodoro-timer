import React, { Component } from "react";
import moment from 'moment';
import Header from '../TimerHeader';
import Time from '../TimerDisplay';
import Start from '../Start';
import TimerConfig from '../TimerConfig';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      currentTime: moment.duration(25, 'minutes'),
      // time that it always goes back to 
      baseTime: moment.duration(25, 'minutes'),
    }

    this.setBaseTime = this.setBaseTime.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime,
    });
  }

  render() {
    return (
      <div className="container-fluid" >
        <Header />
        <Time
          currentTime={this.state.currentTime}
        />
        <Start />
        <TimerConfig
          baseTime={this.state.baseTime}
          setBaseTime={this.setBaseTime}
        />
      </div>
    )
  }
};

export default Timer;
