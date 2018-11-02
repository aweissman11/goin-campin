import { setCurrentLocation } from './index';

export const getCurrentLocation = (location) => {
  return async (dispatch) => {
    dispatch(setCurrentLocation(location));
  }
}