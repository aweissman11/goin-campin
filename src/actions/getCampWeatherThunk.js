import { setCampsList, hasErrored } from './index';
import { campgroundCleaner } from '../utilities/campgroundCleaner'
import { weatherFetchMap } from '../utilities/weatherFetchMap';

export const getCampWeather = (camps) => async (dispatch) => {
  try {
    const weatherCamps = await weatherFetchMap(camps)
    const cleanCamps = campgroundCleaner(weatherCamps);
    dispatch(setCampsList(cleanCamps));
  } catch (error) {
    dispatch(hasErrored(error.message, true))
    return (error.message);
  }
}