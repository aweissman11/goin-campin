import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Loading from '../Loading';

export class CampDetails extends Component {
  render() {
    const { name, photo, wAmps, wHose, wPets, wSewere, wWater } = this.props
    return (
      <div>
        {
          !this.props.name ?
          <div>
            <h2>Looking up your campground...</h2>
            <Loading /> 
          </div>:
          <div>
            <Link to='/'>
              <p>Go Home</p>
            </Link>
            <h1>{name}</h1>
            <p>Has Amps: {wAmps}</p>
            <p>Has Hose Hookup: {wHose}</p>
            <p>Allows Pets: {wPets}</p>
            <p>Has Sewer Hookup: {wSewere}</p>
            <p>Has Water Hookup: {wWater}</p>
          </div>
        }
      </div>
    )
  }
}

export default withRouter(CampDetails);


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