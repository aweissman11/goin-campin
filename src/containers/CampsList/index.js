import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCampsList } from '../../actions/getCampgroundsThunk';

class CampsList extends Component {

  getCampsList = () => {
    const { currentLocation, campsList } = this.props;
    if (currentLocation.length > 0 && campsList.length < 1) {
      this.props.getCampsList(currentLocation);
    }
  }

  renderCamps = () => {
    this.getCampsList();
    if (this.props.campsList.length > 1) {
      const slicedList = this.props.campsList.slice(2, 12);
      return slicedList.map( camp => {
        if (camp.attributes.facilityName !== 'Rent an RV for Your Next Adventure') {
          return (
            <div key={camp.attributes.facilityName} >
              <p>{camp.attributes.facilityName}</p>
              <p>
                <img
                  src={`http://www.reserveamerica.com${camp.attributes.faciltyPhoto}`}
                  alt={`${camp.attributes.facilityName}`}
                />
              </p>
            </div>
          )
        } else {
          return <div></div>;
        }
      })
    }
  }

  render() {
    return (
      <div className='hikes-list'>
        <h1>CampsList</h1>
          {
            this.renderCamps()
          }
      </div>
    )
  }
}

export const mapStateToProps = ({ currentLocation, campsList }) => ({ currentLocation, campsList })

export const mapDispatchToProps = (dispatch) => ({
  getCampsList: (location) => dispatch(getCampsList(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(CampsList)