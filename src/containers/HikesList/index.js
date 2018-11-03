import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHikesList } from '../../actions/getHikesListThunk';

class HikesList extends Component {

  getHikesList = () => {
    const { currentLocation, hikesList } = this.props;
    if (currentLocation.length > 0 && hikesList.length < 1) {
      this.props.getHikesList(currentLocation);
    }
  }

  render() {
    return (
      <div className='hikes-list'>
        <h1>HikesList</h1>
        {
          this.getHikesList()
        }
      </div>
    )
  }
}

export const mapStateToProps = ({ currentLocation, hikesList }) => ({ currentLocation, hikesList })

export const mapDispatchToProps = (dispatch) => ({
  getHikesList: (location) => dispatch(getHikesList(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(HikesList)