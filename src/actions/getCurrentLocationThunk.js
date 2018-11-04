import { setCurrentLocation } from './index';

export const getCurrentLocation = (location) => {
  return (dispatch) => {
    dispatch(setCurrentLocation(location));
  }
}