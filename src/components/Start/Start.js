import React, { Component } from "react";
import * as states from '../../TimerStates.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faBackward } from '@fortawesome/free-solid-svg-icons';

class Start extends Component {
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);
  }

  getButton() {
    if (this.props.timerState === states.NOT_SET)
      return <button type="button" class="btn btn-success" onClick={this.props.startTimer}>Start    <FontAwesomeIcon icon={faPlay} /></button>
    if (this.props.timerState === states.RUNNING)
      return <button type="button" class="btn btn-danger" onClick={this.props.stopTimer}>Stop    <FontAwesomeIcon icon={faStop} /></button>
    if (this.props.timerState === states.COMPLETE)
      return <button type="button" class="btn btn-info" onClick={this.props.stopTimer}>Reset    <FontAwesomeIcon icon={faBackward} /></button>
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
