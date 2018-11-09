import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getHikesList } from '../../actions/getHikesListThunk';
import Hike from '../../components/Hike';

import './HikesList.css'

class HikesList extends Component {

  componentDidMount() {
    const { lat, long } = this.props;
        this.props.getHikesList([lat, long]);
  }

  hikes = () => this.props.hikesList.map( (hike, i) => (
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
