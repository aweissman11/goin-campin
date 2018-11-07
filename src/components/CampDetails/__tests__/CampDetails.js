import React from 'react';
import { shallow } from 'enzyme';

import { CampDetails } from '../index';

describe('CampDetails', () => {
  const mockForecast = [
    {
      date: 'asaskdjfhlakjhdflkdf',
      icon: 'asldfkj;a',
      summary: 'asldkfj',
      descrip: 'asldkf'
    },
    {
      date: 'asasdfasdfdf',
      icon: 'asldfkj;a',
      summary: 'asldkfj',
      descrip: 'asldljkahsdfljhalsdkfjhkf'
    },
  ]
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CampDetails forecast={mockForecast} />)
  })
  



  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot with a name', () => {
    wrapper = shallow(<CampDetails forecast={mockForecast} name='jose' />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should map the forecast', () => {
    const expected = [
      <div className="weather-day">
        <p className="forecast-p">
          djfhl
        </p>
        <div className="forecast-icon-container">
          <img
            alt="asldkfj"
            className="forecast-icon"
            src="asldfkj;a"
          />
          </div>
            <p className="forecast-p">asldkf</p>
          </div>,
          <div className="weather-day">
            <p className="forecast-p">
            fasdf  
            </p>
            <div className="forecast-icon-container">
            <img alt="asldkfj" className="forecast-icon" src="asldfkj;a" />
          </div>
          <p className="forecast-p">asldljkahsdfljhalsdkfjhkf</p>
        </div>
      ]
    expect(wrapper.instance().mapForecasts().length).toBe(2)
  })
  
  
})