import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentLocation } from '../actions/getCurrentLocationThunk';
import GeoLocation from './GeoLocation';
import HikesList from './HikesList';

class App extends Component {
  setLocation = (location) => {
    this.props.setInitialLocation(location)
  }

  render() {
    return (
      <div className="App">
        <div className='intro-animation-container'>
        </div>
        <section>
          <header>We're Goin Hiking!</header>
          <div>
            <input placeholder='search here' />
          </div>
          <GeoLocation
            setInitialLocation={(location) => this.setLocation(location)}
          />
          <div>
            <h3>Results:</h3>
          </div>
          <HikesList />
        </section>
        <section>

        </section>
      </div>
    );
  }
}

export const mapStateToProps = ({ currentLocation, hikesList }) => ({ currentLocation, hikesList });

export const mapDispatchToProps = (dispatch) => ({
  setInitialLocation: (location) => dispatch(getCurrentLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
