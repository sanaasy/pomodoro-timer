import React from "react";
import * as states from '../../TimerStates.js';

const leftPad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`;
}

const TimerDisplay = (props) => {
  return (
    <div>
      {
        (props.timerState === states.COMPLETE)
        && (<audio id="alarm-ring" preload>
          <source src="assets/audio/ticktac.mp3" type="audio/mpeg" />
        </audio>)
      }
      <div>
        <h2 className="text-center">{`${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}</h2>
      </div>
    </div>
  );
};

export default TimerDisplay;
