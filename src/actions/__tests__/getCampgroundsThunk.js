import { getCampsList } from '../getCampgroundsThunk';
import { loading, hasErrored } from '../';
import { campgroundsFetch } from '../../utilities/campgroundsFetch';
import { getCampWeather } from '../getCampWeatherThunk';

import { mockResults } from '../__mocks__/mockResults';

jest.mock('../../utilities/campgroundsFetch');
jest.mock('../getCampWeatherThunk', () => ({
  getCampWeather: jest.fn()
}))

describe('getCampsList', () => {
  let mockDispatch;
  const mockLocation = [34, 45];

  beforeEach(() => {
    mockDispatch = jest.fn();
  })
    

  it('should dispatch loading as true', () => {
    const thunk = getCampsList(mockLocation);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(loading('getting campgrounds...', true));
  })

  it('should fetch campgrounds', async () => {
    const mockLocation = [34, 45];
    const thunk = getCampsList(mockLocation);
    await thunk(mockDispatch);
    expect(campgroundsFetch).toHaveBeenCalled()
  })
  
  it('should stop loading', async () => {
    const thunk = getCampsList(mockLocation);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(loading('got the campgrounds...', false))
  })
  
  it('should dispatch getCampWeather with the results', async () => {
    const thunk = getCampsList(mockLocation);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getCampWeather(mockResults))
  })

  it('should catch an error', () => {
    
  })
  
})