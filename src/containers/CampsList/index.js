import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../../components/Loading';
import LocationSearchInput from '../LocationSearchInput';
import Campground from '../Campground'

import './CampsList.css';

export class CampsList extends Component {
  renderCamps = () => {
    const filteredCamps = this.props.campsList.filter(camp => (
      camp.name !== 'Rent an RV for Your Next Adventure'
    ))

    return filteredCamps.map( camp => {
      return (
        <Campground
          {...camp}
          key={`${camp.name}`}
        />
      )
    })
  }

  render() {
    return (
    <div className='camps-list'>
      <header className='goin-campin'>We're Goin Campin!</header>
      <div>
        <LocationSearchInput />
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

export const mapStateToProps = ({ campsList, loading }) => ({ campsList, loading })

export default connect(mapStateToProps, null)(CampsList)