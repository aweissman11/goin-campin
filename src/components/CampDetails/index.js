import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HikesList from '../../containers/HikesList';

import Loading from '../Loading';

import './CampDetails.css';

export class CampDetails extends Component {
  mapForecasts = () => {
    return this.props.forecast.map( (cast) => {
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
    })
  }
  render() {
    const { lat, long, name, wAmps, wHose, wPets, wSewere, wWater } = this.props
    return (
      <div className='camp-details'>
        {
          !this.props.name ?
          <div >
            <h2 className='looking-up'>Looking up your campground...</h2>
            <Loading /> 
          </div> :
          <div className='loaded-details'>
            <Link to='/'>
              <p className='home-btn'>Go Home</p>
            </Link>
            <div className='camp-overview'>
              <h1 className='camp-name-details'>{name}</h1>
              <div className='camp-info'>
                <p className='info'>Has Amps: {wAmps || 'NA'}</p>
                <p className='info'>Has Hose Hookup: {wHose || 'NA'}</p>
                <p className='info'>Allows Pets: {wPets || 'NA'}</p>
                <p className='info'>Has Sewer Hookup: {wSewere || 'NA'}</p>
                <p className='info'>Has Water Hookup: {wWater || 'NA'}</p>
              </div>
            </div>
            <div className='detailed-forecasts'>
              {
                this.mapForecasts()
              }
            </div>
            <HikesList lat={lat} long={long}/>
          </div>
        }
      </div>
    )
  }
}

export default CampDetails;

CampDetails.propTypes = {
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
  wWater: PropTypes.string
};

// forecast:
// Array[40]
// id:
// "721016"
// lat:
// "39.6493861"
// long:
// "-105.024525"
// name:
// "South Park Mobile Home and RV Community"
// photo:
// "http://www.reserveamerica.com/webphotos/INDP/pid721016/0/80x53.jpg"
// wAmps:
// "Y"
// wHose:
// "N"
// wPets:
// "N"
// wSewer:
// "N"
// wWater:
// ""