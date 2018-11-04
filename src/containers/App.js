import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { loading } from '../actions/index'
import { getCurrentLocation } from '../actions/getCurrentLocationThunk';
import { getCampsList } from '../actions/getCampgroundsThunk';
import Opening from '../components/Opening';
import CampsList from './CampsList';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isOpening: true,
    }
  }
  
  async componentDidMount() {
    await setTimeout(() => this.completeOpening(), 13000)
    this.props.geoLoading('searching for a location...', true)
    navigator.geolocation.getCurrentPosition((location) =>  {
      const { latitude, longitude } = location.coords;
      this.setLocation([latitude, longitude]);
      this.props.geoLoading('found ya!', false)
    });
  }

  completeOpening = () => {
    this.setState({ isOpening: false })
  }

  setLocation = async (location) => {
    await this.props.setInitialLocation(location)
    await this.getCampsList();
  }

  getCampsList = () => {
    const { currentLocation, campsList } = this.props;
    if (currentLocation.length > 0 && campsList.length < 1) {
      this.props.getCampsList(currentLocation);
    }
  }

  render() {
    return (
      <Route to='/' render={() => {
       return (
        <div className="App">
          {
            this.state.isOpening ?
              <Route to='/opening' render={() => 
                  <Opening
                    completeOpening={this.completeOpening}
                  />
              } /> :
              <Route to='/home' component={CampsList} />
            }
          </div>
        )
        }} />
            
    );
  }
}

export const mapStateToProps = ({ currentLocation, campsList }) => ({ currentLocation, campsList });

export const mapDispatchToProps = (dispatch) => ({
  setInitialLocation: (location) => dispatch(getCurrentLocation(location)),
  getCampsList: (location) => dispatch(getCampsList(location)),
  geoLoading: (message, isLoading) => dispatch(loading(message, isLoading))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
