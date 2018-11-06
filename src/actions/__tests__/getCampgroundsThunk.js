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
  
  it('should fetch campgrounds', async () => {
    const mockLocation = [34, 45];
    const mockUrl = mockLocation
    
    const mockXML = `<resultset count="2" resultType="campgrounds">
    <result agencyIcon="" agencyName="" availabilityStatus="Y" contractID="IND2" contractType="PRIVATE" facilityID="720142" facilityName="Rent an RV for Your Next Adventure" faciltyPhoto="/webphotos/IND2/pid720142/0/80x53.jpg" favorite="N" latitude="39.7302833" listingOnly="Y" longitude="-104.9525917" regionName="" reservationChannel="Web Reservable" shortName="M042" sitesWithAmps="Y" sitesWithPetsAllowed="Y" sitesWithSewerHookup="N" sitesWithWaterHookup="N" sitesWithWaterfront="Lakefront" state="CO"/>
    <result agencyIcon="" agencyName="" availabilityStatus="Y" contractID="INDP" contractType="PRIVATE" facilityID="721016" facilityName="South Park Mobile Home and RV Community" faciltyPhoto="/webphotos/INDP/pid721016/0/80x53.jpg" favorite="N" latitude="39.6493861" listingOnly="Y" longitude="-105.024525" regionName="" reservationChannel="Web Reservable" shortName="GS0916" sitesWithAmps="Y" sitesWithPetsAllowed="N" sitesWithSewerHookup="N" sitesWithWaterHookup="N" sitesWithWaterfront="" state="CO"/>
    </resultset>`

    const mockResults = [
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
        }
      },
      {
        "type": "element",
        "name": "result",
        "attributes": {
          "agencyIcon": "",
          "agencyName": "",
          "availabilityStatus": "Y",
          "contractID": "INDP",
          "contractType": "PRIVATE",
          "facilityID": "721016",
          "facilityName": "South Park Mobile Home and RV Community",
          "faciltyPhoto": "/webphotos/INDP/pid721016/0/80x53.jpg",
          "favorite": "N",
          "latitude": "39.6493861",
          "listingOnly": "Y",
          "longitude": "-105.024525",
          "regionName": "",
          "reservationChannel": "Web Reservable",
          "shortName": "GS0916",
          "sitesWithAmps": "Y",
          "sitesWithPetsAllowed": "N",
          "sitesWithSewerHookup": "N",
          "sitesWithWaterHookup": "N",
          "sitesWithWaterfront": "",
          "state": "CO"
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
          "facilityID": "50022",
          "facilityName": "Cherry Creek State Park",
          "faciltyPhoto": "/webphotos/CO/pid50022/0/80x53.jpg",
          "favorite": "N",
          "latitude": "39.6286111",
          "listingOnly": "N",
          "longitude": "-104.8305556",
          "regionName": "",
          "reservationChannel": "",
          "shortName": "CHCR",
          "sitesWithAmps": "Y",
          "sitesWithPetsAllowed": "Y",
          "sitesWithSewerHookup": "Y",
          "sitesWithWaterHookup": "Y",
          "sitesWithWaterfront": "",
          "state": "CO"
        }
      },
      {
        "type": "element",
        "name": "result",
        "attributes": {
          "agencyIcon": "",
          "agencyName": "",
          "availabilityStatus": "Y",
          "contractID": "ELSI",
          "contractType": "PRIVATE",
          "facilityID": "740650",
          "facilityName": "Golden Terrace South RV Resort",
          "faciltyPhoto": "/webphotos/ELSI/pid740650/0/80x53.jpg",
          "favorite": "N",
          "latitude": "39.7208611",
          "listingOnly": "Y",
          "longitude": "-105.2009167",
          "regionName": "",
          "reservationChannel": "Web Reservable",
          "shortName": "A650",
          "sitesWithAmps": "N",
          "sitesWithPetsAllowed": "N",
          "sitesWithSewerHookup": "N",
          "sitesWithWaterHookup": "N",
          "sitesWithWaterfront": "",
          "state": "CO"
        }
      },
      {
        "type": "element",
        "name": "result",
        "attributes": {
          "agencyIcon": "",
          "agencyName": "",
          "availabilityStatus": "Y",
          "contractID": "INDP",
          "contractType": "PRIVATE",
          "facilityID": "722069",
          "facilityName": "Dakota Ridge RV Resort",
          "faciltyPhoto": "/webphotos/INDP/pid722069/0/80x53.jpg",
          "favorite": "N",
          "latitude": "39.7195194",
          "listingOnly": "Y",
          "longitude": "-105.2012389",
          "regionName": "",
          "reservationChannel": "Web Reservable",
          "shortName": "GS1969",
          "sitesWithAmps": "Y",
          "sitesWithPetsAllowed": "Y",
          "sitesWithSewerHookup": "N",
          "sitesWithWaterHookup": "N",
          "sitesWithWaterfront": "",
          "state": "CO"
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
        }
      }
    ]
    
    window.fetch = jest.fn().mockImplementation(() => (
      Promise.resolve({ ok: true, text: () => Promise.resolve(mockXML) })
      ));
      
    const thunk = getCampsList(mockLocation);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith()

  })
  
  it('should catch an error', () => {
    
  })
  
  it('should dispatch getCampWeather with the results', () => {
  
  })
  
  it('should dispath loading as false', () => {
  
  })
  
})