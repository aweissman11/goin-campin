import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentLocation } from '../actions/getCurrentLocationThunk';
import { getCampsList } from '../actions/getCampgroundsThunk';
import GeoLocation from './GeoLocation';
import Opening from './Opening';
import CampsList from './CampsList';
import LocationSearchInput from './LocationSearchInput';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isOpening: false,
    }
  }
  
  async componentDidMount() {
    await this.setState({ isOpening: true })
    await setTimeout(() => this.completeOpening(), 13000)
  }

  completeOpening = () => {
    console.log('complete')
    this.setState({ isOpening: false })
  }

  setLocation = (location) => {
    this.props.setInitialLocation(location)
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
                  <Route to='/home' render={()=> {
                    return (
                      <section>
                        <header>We're Goin Campin!</header>
                        <div>
                          <LocationSearchInput 
                            getCampsList={this.props.getCampsList}
                          />
                        </div>
                          <GeoLocation
                            setInitialLocation={(location) => this.setLocation(location)}
                          />
                        <div>
                          <h3>Results:</h3>
                        </div>
                        <CampsList />
                      </section>
                    )
                  }} />
                }
            </div>
            )
        }} />
            
    );
  }
}

export const mapStateToProps = ({ currentLocation, hikesList }) => ({ currentLocation, hikesList });

export const mapDispatchToProps = (dispatch) => ({
  setInitialLocation: (location) => dispatch(getCurrentLocation(location)),
  getCampsList: (location) => dispatch(getCampsList(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
