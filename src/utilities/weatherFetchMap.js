import fetchCall from '../utilities/fetchCall';
import * as urls from '../utilities/urls';

export const weatherFetchMap = async (camps) => {
  const weatherCamps = await camps.map( async camp => {
    const currentWeather = await fetchCall(urls.currentWeatherUrl([camp.latitude, camp.longitude]))
    return await { ...camp, currentWeather }
  })
  return Promise.all(weatherCamps);
}