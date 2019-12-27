import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Campground.css';

export class Campground extends Component {
  render() {
    const { name, forecast } = this.props;
    return (<>
      <div className='campground' onClick={() => this.props.history.push('/campground/' + this.props.id)}>
        <div className='flex-it flex-end'>
          <p className='camp-name'>{name}</p>
        </div>
        <div className='flex-it'>
          <p className='forecast-p'>{forecast[0].descrip}&nbsp;</p>
          <p className='forecast-p'>{forecast[0].temp} degrees</p>
          <div className='forecast-icon-container'>
            <img
              className='forecast-home-icon'
              src={`${forecast[0].icon}`}
              alt={`${forecast[0].summary}`}
            />
          </div>
        </div>
      </div>
      <div className='line-break'></div>
    </>)
  }
}

export default withRouter(Campground);

Campground.propTypes = {
  forecast: PropTypes.array,
  id: PropTypes.string,
  lat: PropTypes.string,
  long: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  wAmps: PropTypes.string,
  wHose: PropTypes.string,
  wPets: PropTypes.string,
  wSewer: PropTypes.string,
  wWater: PropTypes.string,
}