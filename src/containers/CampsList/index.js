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
      <div className='logo'>LOGO</div>
      <div>
        <LocationSearchInput />
      </div>
      {
        this.props.loading.isLoading ?
          <Loading
            message={this.props.loading.message}
          /> :
          <div>
            <h1>Nearby Camp grounds</h1>
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