import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../../components/Loading';
import LocationSearchInput from '../LocationSearchInput';
import Campground from '../../components/Campground';

import { ReactComponent as LogoSvg } from '../../assets/campin_logo.svg';

import './CampsList.css';

export class CampsList extends Component {
  renderCamps = () => {
    const filteredCamps = this.props.campsList.filter(camp => (
      camp.name !== 'Rent an RV for Your Next Adventure'
    ))

    return filteredCamps.map((camp, i) => {
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
        <section className='top-bar'>
          <div className='logo-container'>
            <LogoSvg
              onClick={() => window.location.reload()}
              className='logo'
              style={{
                cursor: 'pointer'
              }}
            />
          </div>
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
              {this.renderCamps()}
              <div className='bottom-bar'>
                <a href='https://github.com/aweissman11/goin-campin' target='_blank' className='info-btn'>SITE INFO</a>
              </div>
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