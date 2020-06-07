import React, { Component } from "react";
import { Heading, Badge } from '@shopify/polaris';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

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
        <div className="header">
          <Heading element="h1">Set Timer <FontAwesomeIcon icon={faClock} /></Heading>
        </div>
        <div className="form-group form-inline table">
          <div className="col-sm-3">
            <Badge >Minutes</Badge>
          </div>
          <input
            id="minutes"
            className="form-control"
            type="number"
            max="59"
            defaultValue={this.props.baseTime.get('minutes')}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group form-inline table">
          <div className="col-sm-3">
            <Badge>Seconds</Badge>
          </div>
          <input
            id="seconds"
            className="form-control"
            type="number"
            max="59"
            defaultValue={this.props.baseTime.get('seconds')}
            onChange={this.handleChange}
          />
        </div>
      </span>
    );
  }
}

export default TimerConfig;
