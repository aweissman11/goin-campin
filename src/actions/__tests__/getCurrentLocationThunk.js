/* eslint-disable */
import { getCurrentLocation } from '../getCurrentLocationThunk';
import { setCurrentLocation, loading } from '../index';

describe('getCurrentLocation', () => {
  let mockDispatch;
  const mockLocation = [3, 4];

  beforeEach(()=> {
    mockDispatch = jest.fn()
  })

  it('calls dispatch with loading(true)', async () => {
    const thunk = getCurrentLocation(mockLocation)
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(loading('searching for a location...', true))
  })
  
  it('calls dispatch with loading(true) again...', async () => {
    const thunk = getCurrentLocation(mockLocation)
    
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };

    global.navigator.geolocation = mockGeolocation;

    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(loading("please use the search", true))
  })
  
  it('should pass in the location to getCurrentPosition', async () => {
    const mockGetCurrentPosition = jest.fn().mockImplementation((callback) => {
      const location =  {
        coords: {
          latitude: 3,
          longitude: 4
        }
      }
      callback(location);
    })
    
    const mockGeolocation = {
      getCurrentPosition: mockGetCurrentPosition,
      watchPosition: jest.fn()
    };
    
    global.navigator.geolocation = mockGeolocation;

    const thunk = getCurrentLocation();

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setCurrentLocation(mockLocation))

  })
  
})

