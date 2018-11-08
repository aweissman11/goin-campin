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
    const { photo, name, color, forecast } = this.props;
    const colorClass = `camp-color-${color}`
    return (
      <div className={`campground ${colorClass}`} >
        <p className='camp-name'>{name}</p>
        <div key={forecast[0].date} className='weather-day'>
          <p className='forecast-p'>current weather</p>
          <div className='forecast-icon-container'>
            <img
              className='forecast-icon'
              src={`${forecast[0].icon}`}
              alt={`${forecast[0].summary}`}
            />
            </div>
          <p className='forecast-p'>{forecast[0].descrip}</p>
          <p className='forecast-p'>{forecast[0].temp} degrees</p>
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