
import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCampsList } from '../../actions/getCampgroundsThunk';
import './LocationSearchInput.css';

var zipcodes = require('zipcodes');

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  selectLocation = async (address) => {
    let locationObj;

    if (address.length === 5) {
      locationObj = zipcodes.lookup(address);
    }

    try {
      let results;
      if (!locationObj) {
        results = await geocodeByAddress(address)
      }
      let coords;
      if (results) {
        coords = await getLatLng(results[0])
      } else {
        coords = {
          lat: locationObj.latitude,
          lng: locationObj.longitude
        };
      }
      this.props.getCampsList([coords.lat, coords.lng])
      this.props.history.push('/');
    } catch (error) {
      console.warn('error:', error);
    }
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.selectLocation}
      >
        {
          ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className='search-container'>
              <input
                {...getInputProps({
                  placeholder: 'enter zipcode...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
      </PlacesAutocomplete>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCampsList: (location) => dispatch(getCampsList(location))
})

export default withRouter(connect(null, mapDispatchToProps)(LocationSearchInput));