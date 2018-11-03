import React, { Component } from 'react';
import GeoLocation from '../../containers/GeoLocation';

export class Opening extends Component {
  render() {
    return (
        <div 
          className='intro-animation-container'
          onClick={() => this.props.completeOpening()}
        >
          <GeoLocation 
            setInitialLocation={(location) => this.props.setInitialLocation(location)}
            geoLoading={(locationData) => this.props.geoLoading(locationData)}
          />
          
        </div>
    )
  }
}

export default Opening;