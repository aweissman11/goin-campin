import { getCampWeather } from './getCampWeatherThunk';
import { campgroundsFetch } from '../utilities/campgroundsFetch';
import { loading, hasErrored } from '../actions/index';
import { campgroundsKey } from '../apiKeys';
import convert from 'xml-js';

export const getCampsList = (location) => {
  return async (dispatch) => {
    let campsList;
    let newResult;
    dispatch(loading('getting campgrounds...', true))
    try {
      const campgroundsUrl = `http://api.amp.active.com/camping/campgrounds/?landmarkLat=${location[0]}&landmarkLong=${location[1]}&landmarkName=TRUE&api_key=${campgroundsKey}`;
      campsList = await campgroundsFetch(campgroundsUrl);
    } catch (error) {
      dispatch(hasErrored(error.message, true))
      return;
    }

    const result1 = convert.xml2json(campsList, { compact: false, spaces: 2 });
    newResult = JSON.parse(result1);

    const results = newResult.elements[0].elements.slice(0, 25)
    dispatch(getCampWeather(results));
    dispatch(loading('got the campgrounds...', false))
  }
}