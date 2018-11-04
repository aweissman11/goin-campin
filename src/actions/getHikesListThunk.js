import { fetchCall } from '../utilities/fetchCall';
import { setHikesList } from './index';
import { hikingListUrl } from '../utilities/urls';

export const getHikesList = (location) => {
  return async (dispatch) => {
    let hikesList;
    try {
      hikesList = await fetchCall(hikingListUrl(location));
      console.log('hikesList:', hikesList);
    } catch(error) {
      console.warn(error.message);
      return error.message
    }
    dispatch(setHikesList(hikesList.trails));
  }
}
        
