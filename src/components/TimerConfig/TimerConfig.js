import React, { Component } from "react";

class TimerConfig extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newBaseTime = this.props.baseTime;

    if (event.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(event.target.value, 10), 'minutes');
    if (event.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(event.target.value, 10), 'seconds');

    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <span>
        <h2 className="text-primary">Set Timer</h2>
        <div className="form-group form-inline">
          <div className="col-sm-3">
            <label htmlFor="minutes">Minutes</label>
          </div>
          <div className="col-sm-9">
            <input
              id="minutes"
              className="form-control"
              type="number"
              max="59"
              defaultValue={this.props.baseTime.get('minutes')}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="form-group form-inline">
          <div className="col-sm-3">
            <label htmlFor="seconds">Seconds</label>
          </div>
          <div className="col-sm-9">
            <input
              id="seconds"
              className="form-control"
              type="number"
              max="59"
              defaultValue={this.props.baseTime.get('seconds')}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </span>
    );
  }
}

export default TimerConfig;
