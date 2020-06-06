import React, { Component } from "react";
import * as states from '../../TimerStates.js';

class Start extends Component {
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);
  }

  getButton() {
    if (this.props.timerState === states.NOT_SET)
      return <button type="button" class="btn btn-success" onClick={this.props.startTimer}>Start</button>
    if (this.props.timerState === states.RUNNING)
      return <button type="button" class="btn btn-danger" onClick={this.props.stopTimer}>Stop</button>
    if (this.props.timerState === states.COMPLETE)
      return <button type="button" class="btn btn-info" onClick={this.props.stopTimer}>Reset</button>
  }

  render() {
    return (
      <div class="text-center">
        {this.getButton()}
      </div>
    );
  }
};

export default Start;
