import fetchCall from '../utilities/fetchCall';
import { fiveDayUrl } from '../utilities/urls';

export const weatherFetchMap = async (camps) => {
  const weatherCamps = await camps.map( async camp => {
    const { latitude, longitude } = camp.attributes
    const forecast = await fetchCall(fiveDayUrl([latitude, longitude]))
    return await { ...camp, forecast }
  })
  return Promise.all(weatherCamps);
}