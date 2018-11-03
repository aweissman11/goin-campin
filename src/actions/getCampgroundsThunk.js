import { setCampsList } from './index';
import { getCampWeather } from './getCampWeatherThunk';
import { campgroundsFetch } from '../utilities/campgroundsFetch';
import { campgroundsKey } from '../apiKeys';
import convert from 'xml-js';

export const getCampsList = (location) => {
  return async (dispatch) => {
    let campsList;
    let newResult;
    try {
      const campgroundsUrl = `http://api.amp.active.com/camping/campgrounds/?landmarkLat=${location[0]}&landmarkLong=${location[1]}&landmarkName=TRUE&api_key=${campgroundsKey}`;
      campsList = await campgroundsFetch(campgroundsUrl);
      if (campsList.length) {
        var result1 = convert.xml2json(campsList, {compact: false, spaces: 2});
        newResult = JSON.parse(result1);
      }
    } catch(error) {
      console.warn(error.message);
      return (error.message);
    }

    dispatch(getCampWeather(newResult.elements[0].elements));
  }
}