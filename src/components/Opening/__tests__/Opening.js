import React from 'react';
import { shallow } from 'enzyme';

import Opening from '../index';

describe('Opening', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Opening completeOpening={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should fire completeOpening onClick', () => {
    const mockComplete = jest.fn();
    const wrapper = shallow(<Opening completeOpening={mockComplete} />)
    wrapper.find('.intro-animation-container').simulate('click');
    expect(mockComplete).toHaveBeenCalled()
  })
  
  
})
