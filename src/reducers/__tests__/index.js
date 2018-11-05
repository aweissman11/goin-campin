import { campsList } from '../campsList';
import { currentLocation } from '../currentLocation';
import { hikesList } from '../hikesList';
import { loading } from '../loading';

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

})