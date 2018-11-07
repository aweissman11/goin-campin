import React from 'react';
import { shallow } from 'enzyme';

import { App, mapDispatchToProps } from '../App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App 
      currentLocation={[34,45]}
      campList={['a', 'b', 'c']}
      setInitialLocation={jest.fn()}
    />)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should completeOpening', () => {
    expect(wrapper.instance().state.isOpening).toEqual(true);
    
    wrapper.instance().completeOpening()
    
    expect(wrapper.instance().state.isOpening).toEqual(false);
  })
  
  it('should have a different snapshot if opening is true', () => {
    wrapper.instance().setState({ isOpening: false })
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should MDTP', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.setInitialLocation();


    expect(mockDispatch).toHaveBeenCalled()
  })
})
