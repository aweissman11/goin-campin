import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../../components/Loading';
import LocationSearchInput from '../LocationSearchInput';
import { getCampsList } from '../../actions/getCampgroundsThunk';

class CampsList extends Component {
  renderCamps = () => {
    if (this.props.campsList.length > 0) {
      const slicedList = this.props.campsList;
      console.log('slicedList:', slicedList);
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