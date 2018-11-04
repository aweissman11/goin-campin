import fetchCall from '../utilities/fetchCall';
import * as urls from '../utilities/urls';

export const weatherFetchMap = async (camps) => {
  const weatherCamps = await camps.map( async camp => {
    const { latitude, longitude } = camp.attributes
    const forecast = await fetchCall(urls.fiveDayUrl([latitude, longitude]))
    return await { ...camp, currentWeather, forecast }
  })
  return Promise.all(weatherCamps);
}