import { hikingKey, weatherKey } from '../apiKeys';

export const hikingListUrl = (location) => {
  const url = `https://www.hikingproject.com/data/get-trails?lat=${location[0]}&lon=${location[1]}&maxDistance=10&key=${hikingKey}`
  return url;
}

export const currentWeatherUrl = (location) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=imperial&appid=${weatherKey}`;
  return url;
}

export const fiveDayUrl = (location) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${location[0]}&lon=${location[1]}&units=imperial&cnt=40&appid=${weatherKey}`
  return url;
}

