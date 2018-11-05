import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../index';

describe('Loading', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Loading message='loading message'/>)
    expect(wrapper).toMatchSnapshot()
  })
  
})
