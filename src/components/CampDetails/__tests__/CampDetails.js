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
    expect(wrapper.instance().mapForecasts().length).toBe(2)
  })
  
  
})