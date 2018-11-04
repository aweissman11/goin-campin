/* eslint-disable */
import { getCurrentLocation } from '../getCurrentLocationThunk';
import { setCurrentLocation, loading } from '../index';

// jest.mock('../someSortOfThunk.js')

describe('getCurrentLocation', () => {
  let mockDispatch;
  const mockLocation = [3, 4];

  beforeEach(()=> {
    mockDispatch = jest.fn()
  })

  it('calls dispatch with setCurrentLocation(location)', async () => {
    const thunk = getCurrentLocation(mockLocation)
    
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(loading('searching for a location...', true))
  })

  // it('should pass in the location to getCurrentPosition', async () => {
  //   const mockGetCurrentPosition = jest.fn().mockImplementation((location) => {
  //     location = {
  //       coords: {
  //         latitude: 3,
  //         longitude: 4
  //       }
  //     }
  //   })

  //   window.navigator = {
  //     geolocation: {
  //       getCurrentPosition: mockGetCurrentPosition
  //     }
  //   }
    

  //   const thunk = getCurrentLocation(mockLocation);

  //   await thunk(mockDispatch);

  //   expect(mockDispatch).toHaveBeenCalledWith(setCurrentLocation(mockLocation))

  // })
  
})

