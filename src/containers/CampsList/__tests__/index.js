import React from 'react';
import { shallow } from 'enzyme';

import { CampsList, mapStateToProps } from '../index';
import { mockCampsList } from '../__mocks__/mockCampsList';

describe('CampsList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CampsList 
      campsList={mockCampsList}
      loading={{isLoading: false, message: 'hi'}}
    />)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  it('should match the snapshot if Loading', () => {
    wrapper.instance().setState({ isLoading: true })
    expect(wrapper).toMatchSnapshot()
  })

  // should have entire state tree in mock state
  describe('mapStateToProps', () => {
    it('should map the campslist state to props', () => {
      const expected = mockCampsList
      const mockState = {
        campsList: mockCampsList
      }
      
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps.campsList).toEqual(expected)
    })

    it('should map the loading state to props', () => {
      const expected = {
        isLoading: true,
        message: 'loading right now'
      }
      const mockState = {
        loading: expected
      }
      
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps.loading).toEqual(expected)
    })
  })
  
})
