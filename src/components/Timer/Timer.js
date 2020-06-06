import React, { Component } from "react";
import moment from 'moment';
import Header from '../TimerHeader';
import Time from '../TimerDisplay';
import Start from '../Start';
import TimerConfig from '../TimerConfig';
import * as states from '../../TimerStates.js';

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      currentTime: moment.duration(25, 'minutes'),
      // time that it always goes back to 
      baseTime: moment.duration(25, 'minutes'),
      timerState: states.NOT_SET,
      timer: null,
    }

    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime,
    });
  }

  startTimer() {
    this.setState({
      timerState: states.RUNNING,
      timer: setInterval(this.reduceTimer, 1000),
    })
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer)
    }

    this.setState({
      timerState: states.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime),
    })
  }

  reduceTimer() {
    if (this.state.currentTime.get('minutes') === 0 && this.state.currentTime.get('seconds') === 0) {
      this.completeTimer();
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, 'second');

    this.setState({
      currentTime: newTime,
    })
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer)
    }

    this.setState({
      timerState: states.COMPLETE,
      timer: null,
    })
  }

  render() {
    return (
      <div className="container-fluid" >
        <Header />
        <Time
          currentTime={this.state.currentTime}
          timerState={this.state.timerState}
        />
        <Start
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          timerState={this.state.timerState}
        />
        {
          (this.state.timerState !== states.RUNNING)
          &&
          (< TimerConfig
            baseTime={this.state.baseTime}
            setBaseTime={this.setBaseTime}
          />)
        }
      </div>
    )
  }
};

export default Timer;
