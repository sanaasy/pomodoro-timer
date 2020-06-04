import React from "react";

const Timer = () => {
  return (
    <div className="container-fluid">
      <h2 className="text-center">Pomodoro Timer</h2>
      <h2 className="text-center">00:00</h2>
      <div class="text-center">
        <button type="button" class="btn btn-success">Start</button>
      </div>
      <h2 className="text-primary">Set Timer</h2>
      <div className="form-group form-inline">
        <div className="col-sm-3">
          <label htmlFor="minutes">Minutes</label>
        </div>
        <div className="col-sm-9">
          <input id="minutes" className="form-control" type="number"></input>
        </div>
      </div>
      <div className="form-group form-inline">
        <div className="col-sm-3">
          <label htmlFor="seconds">Seconds</label>
        </div>
        <div className="col-sm-9">
          <input id="seconds" className="form-control" type="number"></input>
        </div>
      </div>
    </div>
  );
};

export default Timer;