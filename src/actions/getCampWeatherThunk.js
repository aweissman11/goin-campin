import { setCampsList } from './index';
import { campgroundCleaner } from '../utilities/campgroundCleaner'
import { weatherFetchMap } from '../utilities/weatherFetchMap';

export const getCampWeather = (camps) => {
  return async (dispatch) => {
    try {
      const weatherCamps = await weatherFetchMap(camps)
      console.log('weatherCamps:', JSON.stringify(weatherCamps, null, 2));
      const cleanCamps = campgroundCleaner(weatherCamps);
      dispatch(setCampsList(cleanCamps));
    } catch(error) {
      console.warn(error.message);
      return (error.message);
    }
  }
}