import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHikesList } from '../../actions/getHikesListThunk';
import Hike from '../../components/Hike';

class HikesList extends Component {

  componentDidMount() {
    const { currentLocation, hikesList } = this.props;
      if (currentLocation.length > 0 && hikesList.length < 1) {
        this.props.getHikesList(currentLocation);
      }
  }

  hikes = () => this.props.hikesList.map( hike => <Hike {...hike} />)

  render() {
    return (
      <div className='hikes-list'>
        <h1>HikesList</h1>
        {
          this.hikes()
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
