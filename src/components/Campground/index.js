import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Campground.css';

export class Campground extends Component {
  mapForecasts = () => {
    return this.props.forecast.map( (cast, i) => {
      if (i % 4 === 0 ) {
        return (
          <div key={cast.date}className='weather-day'>
            <p className='forecast-p'>{cast.date.slice(5, 10)}</p>
            <div className='forecast-icon-container'>
              <img
                className='forecast-icon'
                src={`${cast.icon}`}
                alt={`${cast.summary}`}
              />
              </div>
            <p className='forecast-p'>{cast.descrip}</p>
          </div>
        )
      } else {
        return null;
      }
    })
  }

  render() {
    return (
      <div className='campground' >
        <div className='campground-title'>
          <div className='photo-container'>
            <img
              className='camp-photo'
              src={`${this.props.photo}`}
              alt={`${this.props.name}`}
            />
          </div>
          <p className='camp-name'>{this.props.name}</p>
        </div>
        <div className='forecasts'>
          {
            this.mapForecasts()
          }
        </div>
        <Link to={`/campground/${this.props.id}`}>
          <p className='details-btn'>Get Full Campground Details...</p>
        </Link>
      </div>
    )
  }
}

export default Campground

Campground.propTypes = {
  forecast: PropTypes.array,
  id: PropTypes.string,
  lat: PropTypes.string,
  long:PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  wAmps: PropTypes.string,
  wHose: PropTypes.string,
  wPets: PropTypes.string,
  wSewer: PropTypes.string,
  wWater: PropTypes.string,
}