import React from "react";

const TimerConfig = () => {
  return (
    <span>
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
    </span>
  );
};

export default TimerConfig;
