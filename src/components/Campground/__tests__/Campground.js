import React from 'react';
import { shallow } from 'enzyme';

import Campground from '../index';

describe('Campground', () => {
  const mockCamp = {
    "name": "Rent an RV for Your Next Adventure",
    "photo": "http://www.reserveamerica.com/webphotos/IND2/pid720142/0/80x53.jpg",
    "lat": "39.7302833",
    "long": "-104.9525917",
    "wAmps": "Y",
    "wPets": "Y",
    "wSewer": "N",
    "wHose": "N",
    "wWater": "Lakefront",
    "forecast": [
      {
        "date": "2018-11-05 18:00:00",
        "humidity": 49,
        "temp": 55.35,
        "max": 55.35,
        "min": 45.14,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 8.66
      },
      {
        "date": "2018-11-05 21:00:00",
        "humidity": 41,
        "temp": 53.87,
        "max": 53.87,
        "min": 46.22,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 12.06
      },
      {
        "date": "2018-11-06 00:00:00",
        "humidity": 41,
        "temp": 43.47,
        "max": 43.47,
        "min": 38.37,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 8.1
      },
      {
        "date": "2018-11-06 03:00:00",
        "humidity": 55,
        "temp": 30.61,
        "max": 30.61,
        "min": 28.06,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 6.04
      },
      {
        "date": "2018-11-06 06:00:00",
        "humidity": 52,
        "temp": 26.97,
        "max": 26.97,
        "min": 26.97,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 7.63
      },
      {
        "date": "2018-11-06 09:00:00",
        "humidity": 56,
        "temp": 25.17,
        "max": 25.17,
        "min": 25.17,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 6.64
      },
      {
        "date": "2018-11-06 12:00:00",
        "humidity": 55,
        "temp": 21.86,
        "max": 21.86,
        "min": 21.86,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 6.02
      },
      {
        "date": "2018-11-06 15:00:00",
        "humidity": 47,
        "temp": 28.57,
        "max": 28.57,
        "min": 28.57,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 7.25
      },
      {
        "date": "2018-11-06 18:00:00",
        "humidity": 45,
        "temp": 42.43,
        "max": 42.43,
        "min": 42.43,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 9.08
      },
      {
        "date": "2018-11-06 21:00:00",
        "humidity": 39,
        "temp": 43.03,
        "max": 43.03,
        "min": 43.03,
        "descrip": "few clouds",
        "summary": "Clouds",
        "icon": "http://openweathermap.org/img/w/02d.png",
        "windSpeed": 10
      },
      {
        "date": "2018-11-07 00:00:00",
        "humidity": 39,
        "temp": 35.43,
        "max": 35.43,
        "min": 35.43,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 7.52
      },
      {
        "date": "2018-11-07 03:00:00",
        "humidity": 49,
        "temp": 24.57,
        "max": 24.57,
        "min": 24.57,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 5.41
      },
      {
        "date": "2018-11-07 06:00:00",
        "humidity": 67,
        "temp": 17.33,
        "max": 17.33,
        "min": 17.33,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 2.04
      },
      {
        "date": "2018-11-07 09:00:00",
        "humidity": 73,
        "temp": 14.2,
        "max": 14.2,
        "min": 14.2,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 2.51
      },
      {
        "date": "2018-11-07 12:00:00",
        "humidity": 76,
        "temp": 11.66,
        "max": 11.66,
        "min": 11.66,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 0.94
      },
      {
        "date": "2018-11-07 15:00:00",
        "humidity": 76,
        "temp": 18.11,
        "max": 18.11,
        "min": 18.11,
        "descrip": "light snow",
        "summary": "Snow",
        "icon": "http://openweathermap.org/img/w/13d.png",
        "windSpeed": 3.38
      },
      {
        "date": "2018-11-07 18:00:00",
        "humidity": 54,
        "temp": 35.61,
        "max": 35.61,
        "min": 35.61,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 2.82
      },
      {
        "date": "2018-11-07 21:00:00",
        "humidity": 49,
        "temp": 38.61,
        "max": 38.61,
        "min": 38.61,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 5.59
      },
      {
        "date": "2018-11-08 00:00:00",
        "humidity": 56,
        "temp": 30.71,
        "max": 30.71,
        "min": 30.71,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 4.41
      },
      {
        "date": "2018-11-08 03:00:00",
        "humidity": 75,
        "temp": 20.91,
        "max": 20.91,
        "min": 20.91,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 5.37
      },
      {
        "date": "2018-11-08 06:00:00",
        "humidity": 78,
        "temp": 16.4,
        "max": 16.4,
        "min": 16.4,
        "descrip": "light snow",
        "summary": "Snow",
        "icon": "http://openweathermap.org/img/w/13n.png",
        "windSpeed": 0.58
      },
      {
        "date": "2018-11-08 09:00:00",
        "humidity": 75,
        "temp": 13.52,
        "max": 13.52,
        "min": 13.52,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 1.59
      },
      {
        "date": "2018-11-08 12:00:00",
        "humidity": 80,
        "temp": 13.42,
        "max": 13.42,
        "min": 13.42,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 3.27
      },
      {
        "date": "2018-11-08 15:00:00",
        "humidity": 71,
        "temp": 20.01,
        "max": 20.01,
        "min": 20.01,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 4.38
      },
      {
        "date": "2018-11-08 18:00:00",
        "humidity": 55,
        "temp": 35.35,
        "max": 35.35,
        "min": 35.35,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 2.37
      },
      {
        "date": "2018-11-08 21:00:00",
        "humidity": 44,
        "temp": 39.8,
        "max": 39.8,
        "min": 39.8,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 1.72
      },
      {
        "date": "2018-11-09 00:00:00",
        "humidity": 47,
        "temp": 32.13,
        "max": 32.13,
        "min": 32.13,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 4.61
      },
      {
        "date": "2018-11-09 03:00:00",
        "humidity": 67,
        "temp": 18.71,
        "max": 18.71,
        "min": 18.71,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 2.15
      },
      {
        "date": "2018-11-09 06:00:00",
        "humidity": 67,
        "temp": 13.24,
        "max": 13.24,
        "min": 13.24,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 2.04
      },
      {
        "date": "2018-11-09 09:00:00",
        "humidity": 61,
        "temp": 11.61,
        "max": 11.61,
        "min": 11.61,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 3.76
      },
      {
        "date": "2018-11-09 12:00:00",
        "humidity": 63,
        "temp": 10.96,
        "max": 10.96,
        "min": 10.96,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 4.41
      },
      {
        "date": "2018-11-09 15:00:00",
        "humidity": 55,
        "temp": 17.43,
        "max": 17.43,
        "min": 17.43,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 4.74
      },
      {
        "date": "2018-11-09 18:00:00",
        "humidity": 42,
        "temp": 39.05,
        "max": 39.05,
        "min": 39.05,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 2.73
      },
      {
        "date": "2018-11-09 21:00:00",
        "humidity": 36,
        "temp": 44.63,
        "max": 44.63,
        "min": 44.63,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 1.86
      },
      {
        "date": "2018-11-10 00:00:00",
        "humidity": 50,
        "temp": 33.77,
        "max": 33.77,
        "min": 33.77,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 1.79
      },
      {
        "date": "2018-11-10 03:00:00",
        "humidity": 63,
        "temp": 18.92,
        "max": 18.92,
        "min": 18.92,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 2.37
      },
      {
        "date": "2018-11-10 06:00:00",
        "humidity": 59,
        "temp": 14.12,
        "max": 14.12,
        "min": 14.12,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 2.75
      },
      {
        "date": "2018-11-10 09:00:00",
        "humidity": 53,
        "temp": 12.45,
        "max": 12.45,
        "min": 12.45,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 3.6
      },
      {
        "date": "2018-11-10 12:00:00",
        "humidity": 50,
        "temp": 11.99,
        "max": 11.99,
        "min": 11.99,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01n.png",
        "windSpeed": 3.71
      },
      {
        "date": "2018-11-10 15:00:00",
        "humidity": 37,
        "temp": 20.67,
        "max": 20.67,
        "min": 20.67,
        "descrip": "clear sky",
        "summary": "Clear",
        "icon": "http://openweathermap.org/img/w/01d.png",
        "windSpeed": 4.41
      }
    ]
  }

  it('should match the snapshot', () => {
    const wrapper = shallow(<Campground {...mockCamp} />)
    expect(wrapper).toMatchSnapshot()
  })
})

