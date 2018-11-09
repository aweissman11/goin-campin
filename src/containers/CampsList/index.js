import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../../components/Loading';
import LocationSearchInput from '../LocationSearchInput';
import Campground from '../../components/Campground';

import './CampsList.css';

import { mockCampsList } from './__mocks__/mockCampsList';

export class CampsList extends Component {
  renderCamps = () => {
    const filteredCamps = this.props.campsList.filter(camp => (
      camp.name !== 'Rent an RV for Your Next Adventure'
    ))

    // change back to filteredCamps to get real data
    return filteredCamps.map( (camp, i) => {
      return (
        <Campground
          {...camp}
          key={`${camp.name}`}
          color={i % 5}
        />
      )
    })
  }

  render() {
    return (
    <div className='camps-list'>
      <section className='top-bar'>
        <div className='logo'>LOGO</div>
        <LocationSearchInput />
      </section>
      <div>
      </div>
      {
        this.props.loading.isLoading ?
          <Loading
            message={this.props.loading.message}
          /> :
          <div>
            <div className='nearby-campgrounds'>
              <h1>Nearby Campgrounds</h1>
              <p>Current Weather</p>
            </div>
              {this.renderCamps()}
          </div>
      }
    </div>
    )
  }
}

export const mapStateToProps = ({ campsList, loading }) => ({ campsList, loading })

export default connect(mapStateToProps, null)(CampsList)

CampsList.propTypes = {
  campsList: PropTypes.array,
  dispatch: PropTypes.func,
  loading: PropTypes.object
}