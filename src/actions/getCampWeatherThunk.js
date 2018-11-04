import { setCampsList } from './index';

import { weatherFetchMap } from '../utilities/weatherFetchMap';

export const getCampWeather = (camps) => {
  return async (dispatch) => {
    
    const weatherCamps = await weatherFetchMap(camps)
    
    // try {

    //   if (campsList.length) {
    //     var result1 = convert.xml2json(campsList, {compact: false, spaces: 2});
    //     newResult = JSON.parse(result1);
    //   }
    // } catch(error) {
    //   console.warn(error.message);
    //   return (error.message);
    // }
    dispatch(setCampsList(weatherCamps));
  }
}