import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HikesList from '../../containers/HikesList';
import LocationSearchInput from '../../containers/LocationSearchInput';
import { ReactComponent as LogoSvg } from '../../assets/campin_logo.svg';

import Loading from '../Loading';

import './CampDetails.css';

export class CampDetails extends Component {
  mapForecasts = () => {
    return this.props.forecast.map((cast, i) => {
      const colorClass = `weather-color-${i % 5}`
      return (
        <div key={cast.date} className={`weather-day`}>
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
        <section className='top-bar'>
          <div className='logo-container'>
            <Link to='/'>
              <LogoSvg className='logo' />
            </Link>
          </div>
          <LocationSearchInput />
        </section>
        {
          !this.props.name ?
            <div >
              <h2 className='looking-up'>Looking up your campground...</h2>
              <Loading />
            </div> :
            <div className='loaded-details'>
              <div className='camp-overview'>
                <h1 className='camp-name-details'>{name}</h1>
                <div className='camp-break'></div>
                <div className='camp-info'>
                  <p className='info'>Has Amps: <span className='hookup'>{wAmps || 'NA'}</span></p>
                  <p className='info'>Has Hose Hookup: <span className='hookup'>{wHose || 'NA'}</span></p>
                  <p className='info'>Allows Pets: <span className='hookup'>{wPets || 'NA'}</span></p>
                  <p className='info'>Has Sewer Hookup: <span className='hookup'>{wSewere || 'NA'}</span></p>
                  <p className='info'>Has Water Access: <span className='hookup'>{wWater || 'NA'}</span></p>
                </div>
              </div>
              <div className='camp-break'></div>
              <HikesList lat={lat} long={long} />
              <div className='camp-break'></div>
              <h1 className='nearby-hikes'>Weather Details</h1>
              <div className='detailed-forecasts'>
                {
                  this.mapForecasts()
                }
              </div>
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