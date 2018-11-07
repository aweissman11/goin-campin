import { campsList } from '../campsList';
import { currentLocation } from '../currentLocation';
import { hikesList } from '../hikesList';
import { loading } from '../loading';
import { hasErrored } from '../hasErrored';
import { rootReducer } from '../index';

describe('campsList', () => {
  it('should set camps list', () => {
    const mockAction = {
      type: 'SET_CAMPS_LIST',
      campsList: [1, 2, 3]
    }
    const expected = [1, 2, 3];
    const result = campsList(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = []
    const result = campsList(undefined, {})

    expect(result).toEqual(expected)
  })
})
  
describe('currentLocation', () => {
  it('should set current location', () => {
    const mockAction = {
      type: 'SET_CURRENT_LOCATION',
      location: [1, 2]
    }
    const expected = [1, 2];
    const result = currentLocation(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = []
    const result = currentLocation(undefined, {})

    expect(result).toEqual(expected)
  })
})
  
describe('hikesList', () => {
  it('should set hikes list', () => {
    const mockAction = {
      type: 'SET_HIKES_LIST',
      hikesList: [1, 2]
    }
    const expected = [1, 2];
    const result = hikesList(undefined, mockAction);

    expect(result).toEqual(expected);
  })

  it('should return default state', () => {
    const expected = []
    const result = hikesList(undefined, {})

    expect(result).toEqual(expected)
  })
})
  
describe('loading', () => {
  it('should start loading', () => {
    const mockLoading = {
      isLoading: true,
      message: 'booting up...'
    }
    const mockAction = {
      type: 'LOADING',
      isLoading: true,
      message: 'booting up...'
    }
    const expected = mockLoading;
    const result = loading(undefined, mockAction);
    
    expect(result).toEqual(expected);
  })
  
  it('should return default state', () => {
    const expected = {
      isLoading: true,
      message: 'booting up...'
    }
    const result = loading(undefined, {})

    expect(result).toEqual(expected)
  })
})
  
describe('hasErrored', () => {
  it('should not cause an error right away', () => {
    const mockError = {
      hasErrored: true,
      message: 'We are all gonna die!'
    }
    const mockAction = {
      type: 'HAS_ERRORED',
      hasErrored: true,
      message: 'We are all gonna die!'
    }
    const expected = mockError;
    const result = hasErrored(undefined, mockAction);
    
    expect(result).toEqual(expected);
  })
  
  it('should return default state', () => {
    const expected = {
      hasErrored: false,
      message: 'nope'
    }
    const result = hasErrored(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('rootReducer', () => {
  it('should match the snapshot', () => {
    expect(rootReducer).toMatchSnapshot();
  })
  
})