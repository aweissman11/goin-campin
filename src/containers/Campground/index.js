import React, { Component } from 'react';

export class Campground extends Component {
  render() {
    return (
      <div>
        <div>
          <p>
            <img
              src={`${this.props.photo}`}
              alt={`${this.props.name}`}
            />
            <span>{this.props.name}</span>
            <img
              src={`${this.props.forecast[0].icon}`}
              alt={`${this.props.forecast[0].summary}`}
            />
          </p>
        </div>
      </div>
    )
  }
}

export default Campground