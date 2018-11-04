import React, { Component } from 'react';

export class Campground extends Component {
  render() {
    return (
      <div>
        <div>
          <p>
            <img
              src={`http://www.reserveamerica.com${this.props.attributes.faciltyPhoto}`}
              alt={`${this.props.attributes.facilityName}`}
            />
            <span>{this.props.attributes.facilityName}</span>
            <span>{this.props.currentWeather.condition}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Campground