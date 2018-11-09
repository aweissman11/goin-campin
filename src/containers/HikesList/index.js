import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHikesList } from '../../actions/getHikesListThunk';
import Hike from '../../components/Hike';

import './HikesList.css'

import { hikesList } from './__mocks__/hikesList';

class HikesList extends Component {

  componentDidMount() {
    const { currentLocation, hikesList } = this.props;
      if (currentLocation.length > 0 && hikesList.length < 1) {
        this.props.getHikesList(currentLocation);
      }
  }

  // map over this.props.hikesList to use real data
  hikes = () => hikesList.trails.map( (hike, i) => (
    <Hike color={i%5} key={hike.id} {...hike} />
  ))

  render() {
    return (
      <div className='hikes-list'>
        <h1>Nearby Hikes</h1>
        <div className='hikes'>
          {
            this.hikes()
          }
        </div>
      </div>
    )
  }
}

export const mapStateToProps = ({ currentLocation, hikesList }) => ({ currentLocation, hikesList })

export const mapDispatchToProps = (dispatch) => ({
  getHikesList: (location) => dispatch(getHikesList(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(HikesList)
