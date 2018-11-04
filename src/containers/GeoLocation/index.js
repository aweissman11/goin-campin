import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';

import './GeoLocation.css';

class GeoLocation extends Component {
  constructor() {
    super()

    this.state = {
      latitude: 0,
      longitude: 0
    }
  }

  componentDidMount() {
    this.props.geoLoading('getting location...', true)
  }
  
  componentDidUpdate() {
    if (this.props.isGeolocationEnabled) {
      if (this.state.latitude !== this.props.coords.latitude) {
        const { latitude, longitude } = this.props.coords;
        this.props.setInitialLocation([latitude, longitude])
        this.setState({
          latitude,
          longitude
        })
        this.props.geoLoading('got location', false)
      } else {
        return;
      }
    } else {
      return;
    }
  }

  render() {
    return (
      <div name='placeholder-div--ignore'></div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(GeoLocation)