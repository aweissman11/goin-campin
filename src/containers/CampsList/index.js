import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../../components/Loading';
import LocationSearchInput from '../LocationSearchInput';
import { getCampsList } from '../../actions/getCampgroundsThunk';
import Campground from '../Campground'

class CampsList extends Component {
  componentDidMount() {
    // console.log('camplist here to save the day')
  }
  renderCamps = () => {
    if (this.props.campsList.length > 0) {
      return this.props.campsList.map( camp => {
        if (camp.attributes.facilityName !== 'Rent an RV for Your Next Adventure') {
          return (
            <Campground
              attributes={{...camp.attributes}} 
              currentWeather={camp.currentWeather}
              key={`${camp.attributes.facilityName}`}
            />
          )
        } else {
          return <div key={`${camp.attributes.facilityName}`} ></div>
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
              {
                this.renderCamps()
              }
          </div>
      }
    </div>
    )
  }
}

export const mapStateToProps = ({ currentLocation, campsList, loading }) => ({ currentLocation, campsList, loading })

export const mapDispatchToProps = (dispatch) => ({
  getCampsList: (location) => dispatch(getCampsList(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(CampsList)