import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentLocation } from '../actions/getCurrentLocationThunk';
import Opening from '../components/Opening';
import CampsList from './CampsList';
import { Route } from 'react-router-dom';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      isOpening: true,
    }
  }
  
  async componentDidMount() {
    await setTimeout(() => this.completeOpening(), 13000)
    await this.props.setInitialLocation()
  }

  completeOpening = () => {
    this.setState({ isOpening: false })
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

export const mapDispatchToProps = (dispatch) => ({
  setInitialLocation: (location) => dispatch(getCurrentLocation(location))
})

export default connect(null, mapDispatchToProps)(App);
