import { setCurrentLocation } from './index';
import { loading } from '../actions/index';
import { getCampsList } from './getCampgroundsThunk';

export const getCurrentLocation = () => {
  return (dispatch) => {
    dispatch(loading('searching for a location...', true))
    try {
      navigator.geolocation.getCurrentPosition((location) =>  {
        const { latitude, longitude } = location.coords;
        dispatch(setCurrentLocation([latitude, longitude]));
        dispatch(getCampsList([latitude, longitude]))
      });
      dispatch(loading('found ya!', false))
    } catch(error) {
      console.warn(error.message);
      return(error.message);
    }
  }
}
