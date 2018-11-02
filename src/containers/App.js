import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentLocation } from '../actions/getCurrentLocationThunk';
import GeoLocation from './GeoLocation';

class App extends Component {
  // componentDidMount() {
  //   this.props.setInitialLocation();
  // }

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
            setInitialLocation={this.props.setInitialLocation}
          />
          <div>
            <h3>Results:</h3>
            <div>
              <ul>
                <li>Hike Name</li>
                <li>Hike Name</li>
                <li>Hike Name</li>
                <li>Hike Name</li>
                <li>Hike Name</li>
                <li>Hike Name</li>
                <li>Hike Name</li>
                <li>Hike Name</li>
                <li>Hike Name</li>
                <li>Hike Name</li>
                <li>Hike Name</li>
                <li>Hike Name</li>
              </ul>
            </div>
          </div>
        </section>
        <section>

        </section>
      </div>
    );
  }
}

export const mapStateToProps = ({ currentLocation }) => ({ currentLocation });

export const mapDispatchToProps = (dispatch) => ({
  setInitialLocation: () => dispatch(getCurrentLocation())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
