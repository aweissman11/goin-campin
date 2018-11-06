import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentLocation } from '../actions/getCurrentLocationThunk';
import Opening from '../components/Opening';
import CampsList from './CampsList';
import CampDetails from '../components/CampDetails';
import { Route, withRouter } from 'react-router-dom';

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
      <div>
        <Route exact path='/campground/:id' render={({ match }) => {
          const correctCamp = this.props.campsList.find( camp => camp.id === match.params.id)
          return <CampDetails {...correctCamp}/>
        }}/>

        <Route exact path='/' render={() => {
        return (
          <div className="App">
            {
              this.state.isOpening ?
                <Opening
                  completeOpening={this.completeOpening}
                /> :
                <CampsList />
              }
            </div>
          )
        }} />
      </div>
            
    );
  }
}

export const mapStateToProps = ({ campsList }) => ({ campsList })

export const mapDispatchToProps = (dispatch) => ({
  setInitialLocation: (location) => dispatch(getCurrentLocation(location))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
