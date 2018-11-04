import { getCampsList } from '../getCampgroundsThunk';
import { loading } from '../';

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
  
  it('should convert the list to json', () => {
    // no idea how to test this
  })
  
  it('should catch an error', () => {
    
  })
  
  it('should dispatch getCampWeather with the results', () => {
  
  })
  
  it('should dispath loading as false', () => {
  
  })
  
})