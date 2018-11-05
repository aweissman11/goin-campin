import {hikingListUrl, currentWeatherUrl, fiveDayUrl } from '../urls';
import { hikingKey, weatherKey } from '../../apiKeys';

describe('hikinglisturl', () => {
  it('should return the correct url', () => {
    const location = [34, 45];
    const expected = `https://www.hikingproject.com/data/get-trails?lat=${location[0]}&lon=${location[1]}&maxDistance=10&key=${hikingKey}`
    const result = hikingListUrl(location);
    expect(result).toEqual(expected)

  })
})
describe('currentWeatherUrl', () => {
  it('should return the correct url', () => {
    const location = [34, 45];
    const expected = `http://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=imperial&appid=${weatherKey}`;
    const result = currentWeatherUrl(location);
    expect(result).toEqual(expected)

  })
})
describe('fiveDayUrl', () => {
  it('should return the correct url', () => {
    const location = [34, 45];
    const expected = `http://api.openweathermap.org/data/2.5/forecast?lat=${location[0]}&lon=${location[1]}&units=imperial&cnt=40&appid=${weatherKey}`
    const result = fiveDayUrl(location);
    expect(result).toEqual(expected)

  })
})