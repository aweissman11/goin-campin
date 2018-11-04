import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../../components/Loading';
import LocationSearchInput from '../LocationSearchInput';
import Campground from '../Campground'

class CampsList extends Component {
  renderCamps = () => {
    if (this.props.campsList.length > 0) {
      return this.props.campsList.map( camp => {
        if (camp.name !== 'Rent an RV for Your Next Adventure') {
          return (
            <Campground
              {...camp}
              key={`${camp.name}`}
            />
          )
        } else {
          return <div key={`${camp.name}`} ></div>
        }
      })
    }
  }

  render() {
    return (
    <div className='camps-list'>
      <header>We're Goin Campin!</header>
      <div>
        <LocationSearchInput 
          getCampsList={this.props.getCampsList}
        />
      </div>
      {
        this.props.loading.isLoading ?
          <Loading
            message={this.props.loading.message}
          /> :
          <div>
            <h1>CampsList</h1>
              {this.renderCamps()}
          </div>
      }
    </div>
    )
  }
}

export const mapStateToProps = ({ currentLocation, campsList, loading }) => ({ currentLocation, campsList, loading })

export default connect(mapStateToProps, null)(CampsList)