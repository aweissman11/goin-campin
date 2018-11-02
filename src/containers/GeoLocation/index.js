import React from 'react';
import {geolocated} from 'react-geolocated';

import './GeoLocation.css';

class GeoLocation extends React.Component {
  componentDidUpdate() {
    if (this.props.isGeolocationEnabled) {
      const { latitude, longitude } = this.props.coords
      console.log('latitude:', latitude);
      this.props.setInitialLocation([latitude, longitude])
    }
  }

  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <div className='location-data'>
            <h3>Your current latitude:</h3>
            <p>{this.props.coords.latitude}</p>
            <h3>Your current longitude:</h3>
            <p>{this.props.coords.longitude}</p>
          </div>
          : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(GeoLocation)