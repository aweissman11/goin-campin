import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentLocation } from ''

class App extends Component {
  componentDidMount() {
    this.props.getCurrentLocation();
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

export const mapDispatchToProps = (dispatch) => {
  () => dispatch(getCurrentLocation())
}

export default connect(null, mapDispatchToProps)(App);
