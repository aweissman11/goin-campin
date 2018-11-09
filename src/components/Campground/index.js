import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Campground.css';

export class Campground extends Component {
  render() {
    const { name, color, forecast } = this.props;
    const colorClass = `camp-color-${color}`
    return (
      <div className={`campground ${colorClass}`} >
        <p className='camp-name'>{name}</p>
        <div className='weather-info'>
          <div key={forecast[0].date} className='weather-day'>
            <p className='forecast-p'>{forecast[0].descrip}</p>
            <p className='forecast-p'>{forecast[0].temp} degrees</p>
          </div>
          <div className='forecast-icon-container'>
            <img
              className='forecast-home-icon'
              src={`${forecast[0].icon}`}
              alt={`${forecast[0].summary}`}
            />
          </div>
        </div>
        <Link to={`/campground/${this.props.id}`} className='detail-link'>
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