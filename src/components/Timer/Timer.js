import React, { Component } from "react";
import Header from './TimerHeader';
import Time from './TimerDisplay';
import Start from './Start';
import TimerConfig from './TimerConfig';

class Timer extends Component {
  render() {
    return (
      <div className="container-fluid" >
        <Header />
        <Time />
        <Start />
        <TimerConfig />
      </div>
    )
  }
};

export default Timer;
