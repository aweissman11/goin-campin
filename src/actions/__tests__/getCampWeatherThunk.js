import { getCampWeather } from '../getCampWeatherThunk';
import { setCampsList } from '../index';
import { campgroundCleaner } from '../../utilities/campgroundCleaner';

describe('getCampWeather', () => {
  let mockDispatch;
  const mockCamps = [
    {
      "type": "element",
      "name": "result",
      "attributes": {
        "agencyIcon": "",
        "agencyName": "",
        "availabilityStatus": "Y",
        "contractID": "IND2",
        "contractType": "PRIVATE",
        "facilityID": "720142",
        "facilityName": "Rent an RV for Your Next Adventure",
        "faciltyPhoto": "/webphotos/IND2/pid720142/0/80x53.jpg",
        "favorite": "N",
        "latitude": "39.7302833",
        "listingOnly": "Y",
        "longitude": "-104.9525917",
        "regionName": "",
        "reservationChannel": "Web Reservable",
        "shortName": "M042",
        "sitesWithAmps": "Y",
        "sitesWithPetsAllowed": "Y",
        "sitesWithSewerHookup": "N",
        "sitesWithWaterHookup": "N",
        "sitesWithWaterfront": "Lakefront",
        "state": "CO"
      },
      "forecast": {
        "list": [
          'a',
          'b',
          'c'
        ]
      },
      "main": {
        "humidity": 45,
        "temp": 55,
        "temp_max": 75,
        "temp_min": 33
      }
    },
    {
      "type": "element",
      "name": "result",
      "attributes": {
        "agencyIcon": "",
        "agencyName": "",
        "availabilityStatus": "N",
        "contractID": "CO",
        "contractType": "STATE",
        "facilityID": "50021",
        "facilityName": "Chatfield State Park",
        "faciltyPhoto": "/webphotos/CO/pid50021/0/80x53.jpg",
        "favorite": "N",
        "latitude": "39.5380556",
        "listingOnly": "N",
        "longitude": "-105.0872222",
        "regionName": "",
        "reservationChannel": "",
        "shortName": "CHSR",
        "sitesWithAmps": "Y",
        "sitesWithPetsAllowed": "Y",
        "sitesWithSewerHookup": "Y",
        "sitesWithWaterHookup": "Y",
        "sitesWithWaterfront": "",
        "state": "CO"
      },
      "forecast": {
        "list": [
          'a',
          'b',
          'c'
        ]
      },
      "main": {
        "humidity": 45,
        "temp": 55,
        "temp_max": 75,
        "temp_min": 33
      }
    }
  ];

  beforeEach(() => {
    mockDispatch = jest.fn();
    
  })
  

  it.skip('should dispatch setCampsList', async () => {
    const thunk = getCampWeather(mockCamps);
    const expected = campgroundCleaner(mockCamps);
    console.log('expected:', expected);

    await thunk(mockDispatch);
    
    expect(mockDispatch).toHaveBeenCalledWith(setCampsList(expected))
  })
  
})