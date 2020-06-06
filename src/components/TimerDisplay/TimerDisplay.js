import React from "react";
import Sound from 'react-sound';
import * as states from '../../TimerStates.js';
import alarm from '../../pomodoro-alarm.mp3';

const leftPad = (val) => {
  if (val < 10) return `0${val}`;

  return `${val}`;
}

const TimerDisplay = (props) => {
  return (
    <div>
      {
        (props.timerState === states.COMPLETE)
        &&
        (
          <Sound
            url={alarm}
            playStatus={Sound.status.PLAYING}
            volume={1.4}
          />
        )
      }
      <div>
        <h2 className="text-center">{`${leftPad(props.currentTime.get('minutes'))}:${leftPad(props.currentTime.get('seconds'))}`}</h2>
      </div>
    </div>
  );
};

export default TimerDisplay;
