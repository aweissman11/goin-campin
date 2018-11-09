import { setCurrentLocation } from './index';
import { loading, hasErrored } from './index';
import { getCampsList } from './getCampgroundsThunk';

export const getCurrentLocation = () => {
  return (dispatch) => {
    dispatch(loading('searching for a location...', true))
    try {
      const errorCallback = () => dispatch(hasErrored('cannot find location', true))

      navigator.geolocation.getCurrentPosition((location) =>  {
        const { latitude, longitude } = location.coords;
        dispatch(setCurrentLocation([latitude, longitude]));
        dispatch(getCampsList([latitude, longitude]))
        dispatch(loading("found ya! Now let's see about those campgrounds...", true))
      }, errorCallback, {timeout:10000});
      dispatch(loading("please use the search", true))
    } catch(error) {
      dispatch(hasErrored(error.message, true))
      return(error.message);
    }
  }
}
