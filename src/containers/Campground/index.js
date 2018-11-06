import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Campground.css';

export class Campground extends Component {
  mapForecasts = () => {
    return this.props.forecast.map( (cast, i) => {
      if (i % 4 === 0 ) {
        return (
          <div key={cast.date}className='weather-day'>
            <p>{cast.date.slice(5, 10)}</p>
            <img
              className='forecast-icon'
              src={`${cast.icon}`}
              alt={`${cast.summary}`}
            />
            <p>{cast.descrip}</p>
          </div>
        )
      } 
    })
  }

  render() {
    return (
      <div className='campground' >
        <p className='camp-name'>{this.props.name}</p>
        <div>
          <img
            className='camp-photo'
            src={`${this.props.photo}`}
            alt={`${this.props.name}`}
          />
        </div>
        <div className='forecasts'>
          {
            this.mapForecasts()
          }
        </div>
        <Link to={`/campground/${this.props.id}`}>
          <p className='details-btn'>Details...</p>
        </Link>
      </div>
    )
  }
}

export default Campground