import * as Actions from '../index';

describe('actions', () => {
  it('should have a type of SET_CURRENT_LOCATION', () => {
    const location = [3, 4];
    const expected = {
      type: 'SET_CURRENT_LOCATION',
      location
    }
    const result = Actions.setCurrentLocation(location);
    expect(result).toEqual(expected)
  })
  
  it('should have a type of SET_HIKES_LIST', () => {
    const hikesList = [3, 4];
    const expected = {
      type: 'SET_HIKES_LIST',
      hikesList
    }
    const result = Actions.setHikesList(hikesList);
    expect(result).toEqual(expected)
  })

  it('should have a type of SET_CAMPS_LIST', () => {
    const campsList = [3, 4];
    const expected = {
      type: 'SET_CAMPS_LIST',
      campsList
    }
    const result = Actions.setCampsList(campsList);
    expect(result).toEqual(expected)
  })

  it('should have a type of LOADING', () => {
    const message = 'loading message';
    const isLoading = true;
    const expected = {
      type: 'LOADING',
      message,
      isLoading
    }
    const result = Actions.loading(message, isLoading);
    expect(result).toEqual(expected)
  })

  it('should have a type of HAS_ERRORED', () => {
    const message = 'error message';
    const hasErrored = true;
    const expected = {
      type: 'HAS_ERRORED',
      message,
      hasErrored
    }
    const result = Actions.hasErrored(message, hasErrored);
    expect(result).toEqual(expected)
  })

  
})