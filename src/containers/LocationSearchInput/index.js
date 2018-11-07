import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { connect } from 'react-redux';

import { getCampsList } from '../../actions/getCampgroundsThunk';
import './LocationSearchInput.css';
 
class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
    this.setState({ address });
  };

  selectLocation = async (address) => {
    try {
      const results = await geocodeByAddress(address)
      const coords = await getLatLng(results[0])
      await this.props.getCampsList([coords.lat, coords.lng])
    } catch(error) {
      console.log('error:', error);
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
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places...',
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

export default connect(null, mapDispatchToProps)(LocationSearchInput);