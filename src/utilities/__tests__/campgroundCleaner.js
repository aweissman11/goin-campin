import { campgroundCleaner, cleanForecast } from '../campgroundCleaner';

describe('campgroundCleaner', () => {
  it('should return and object with the correct keys', () => {

    const mockCamp = {
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
        "cod": "200",
        "message": 0.0079,
        "cnt": 40,
        "list": [
          {
            "dt": 1541451600,
            "main": {
              "temp": 53.01,
              "temp_min": 46.22,
              "temp_max": 53.01,
              "pressure": 809.52,
              "sea_level": 1018.87,
              "grnd_level": 809.52,
              "humidity": 41,
              "temp_kf": 3.77
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 12.06,
              "deg": 297.501
            },
            "rain": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-05 21:00:00"
          },
          {
            "dt": 1541462400,
            "main": {
              "temp": 43.47,
              "temp_min": 38.37,
              "temp_max": 43.47,
              "pressure": 810.9,
              "sea_level": 1022.11,
              "grnd_level": 810.9,
              "humidity": 41,
              "temp_kf": 2.83
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 8.1,
              "deg": 292.5
            },
            "rain": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-06 00:00:00"
          },
          {
            "dt": 1541473200,
            "main": {
              "temp": 31.46,
              "temp_min": 28.06,
              "temp_max": 31.46,
              "pressure": 811.35,
              "sea_level": 1025.91,
              "grnd_level": 811.35,
              "humidity": 55,
              "temp_kf": 1.88
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 6.04,
              "deg": 241.016
            },
            "rain": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-06 03:00:00"
          },
          {
            "dt": 1541484000,
            "main": {
              "temp": 28.67,
              "temp_min": 26.97,
              "temp_max": 28.67,
              "pressure": 811.03,
              "sea_level": 1027.32,
              "grnd_level": 811.03,
              "humidity": 52,
              "temp_kf": 0.94
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 7.63,
              "deg": 243.509
            },
            "rain": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-06 06:00:00"
          },
          {
            "dt": 1541494800,
            "main": {
              "temp": 25.17,
              "temp_min": 25.17,
              "temp_max": 25.17,
              "pressure": 811.7,
              "sea_level": 1029.26,
              "grnd_level": 811.7,
              "humidity": 56,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 6.64,
              "deg": 276.502
            },
            "rain": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-06 09:00:00"
          },
          {
            "dt": 1541505600,
            "main": {
              "temp": 21.86,
              "temp_min": 21.86,
              "temp_max": 21.86,
              "pressure": 813.13,
              "sea_level": 1031.93,
              "grnd_level": 813.13,
              "humidity": 55,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 6.02,
              "deg": 294.001
            },
            "rain": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-06 12:00:00"
          },
          {
            "dt": 1541516400,
            "main": {
              "temp": 28.57,
              "temp_min": 28.57,
              "temp_max": 28.57,
              "pressure": 814.78,
              "sea_level": 1033.2,
              "grnd_level": 814.78,
              "humidity": 47,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 7.25,
              "deg": 290.002
            },
            "rain": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-06 15:00:00"
          },
          {
            "dt": 1541527200,
            "main": {
              "temp": 42.43,
              "temp_min": 42.43,
              "temp_max": 42.43,
              "pressure": 815.03,
              "sea_level": 1029.07,
              "grnd_level": 815.03,
              "humidity": 45,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 9.08,
              "deg": 306
            },
            "rain": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-06 18:00:00"
          },
          {
            "dt": 1541538000,
            "main": {
              "temp": 43.03,
              "temp_min": 43.03,
              "temp_max": 43.03,
              "pressure": 814.8,
              "sea_level": 1027.53,
              "grnd_level": 814.8,
              "humidity": 39,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
              }
            ],
            "clouds": {
              "all": 20
            },
            "wind": {
              "speed": 10,
              "deg": 308.003
            },
            "rain": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-06 21:00:00"
          },
          {
            "dt": 1541548800,
            "main": {
              "temp": 35.43,
              "temp_min": 35.43,
              "temp_max": 35.43,
              "pressure": 815.9,
              "sea_level": 1030.98,
              "grnd_level": 815.9,
              "humidity": 39,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 7.52,
              "deg": 324.501
            },
            "rain": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-07 00:00:00"
          },
          {
            "dt": 1541559600,
            "main": {
              "temp": 24.57,
              "temp_min": 24.57,
              "temp_max": 24.57,
              "pressure": 817.54,
              "sea_level": 1036.99,
              "grnd_level": 817.54,
              "humidity": 49,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 5.41,
              "deg": 303.505
            },
            "rain": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-07 03:00:00"
          },
          {
            "dt": 1541570400,
            "main": {
              "temp": 17.33,
              "temp_min": 17.33,
              "temp_max": 17.33,
              "pressure": 818.05,
              "sea_level": 1040.43,
              "grnd_level": 818.05,
              "humidity": 67,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.04,
              "deg": 124.007
            },
            "rain": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-07 06:00:00"
          },
          {
            "dt": 1541581200,
            "main": {
              "temp": 14.2,
              "temp_min": 14.2,
              "temp_max": 14.2,
              "pressure": 817.73,
              "sea_level": 1041.75,
              "grnd_level": 817.73,
              "humidity": 73,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.51,
              "deg": 99.5013
            },
            "rain": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-07 09:00:00"
          },
          {
            "dt": 1541592000,
            "main": {
              "temp": 11.66,
              "temp_min": 11.66,
              "temp_max": 11.66,
              "pressure": 817.28,
              "sea_level": 1042.13,
              "grnd_level": 817.28,
              "humidity": 76,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 0.94,
              "deg": 295.502
            },
            "rain": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-07 12:00:00"
          },
          {
            "dt": 1541602800,
            "main": {
              "temp": 18.11,
              "temp_min": 18.11,
              "temp_max": 18.11,
              "pressure": 817.48,
              "sea_level": 1041.38,
              "grnd_level": 817.48,
              "humidity": 76,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 600,
                "main": "Snow",
                "description": "light snow",
                "icon": "13d"
              }
            ],
            "clouds": {
              "all": 12
            },
            "wind": {
              "speed": 3.38,
              "deg": 292.003
            },
            "rain": {},
            "snow": {
              "3h": 0.035
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-07 15:00:00"
          },
          {
            "dt": 1541613600,
            "main": {
              "temp": 35.61,
              "temp_min": 35.61,
              "temp_max": 35.61,
              "pressure": 816.78,
              "sea_level": 1035.26,
              "grnd_level": 816.78,
              "humidity": 54,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.82,
              "deg": 10.5004
            },
            "rain": {},
            "snow": {
              "3h": 0.01
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-07 18:00:00"
          },
          {
            "dt": 1541624400,
            "main": {
              "temp": 38.61,
              "temp_min": 38.61,
              "temp_max": 38.61,
              "pressure": 815.56,
              "sea_level": 1031.44,
              "grnd_level": 815.56,
              "humidity": 49,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 5.59,
              "deg": 28.0025
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-07 21:00:00"
          },
          {
            "dt": 1541635200,
            "main": {
              "temp": 30.71,
              "temp_min": 30.71,
              "temp_max": 30.71,
              "pressure": 816.06,
              "sea_level": 1033.54,
              "grnd_level": 816.06,
              "humidity": 56,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 4.41,
              "deg": 12.0012
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-08 00:00:00"
          },
          {
            "dt": 1541646000,
            "main": {
              "temp": 20.91,
              "temp_min": 20.91,
              "temp_max": 20.91,
              "pressure": 817.64,
              "sea_level": 1038.81,
              "grnd_level": 817.64,
              "humidity": 75,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 32
            },
            "wind": {
              "speed": 5.37,
              "deg": 15.0026
            },
            "rain": {},
            "snow": {
              "3h": 0.005
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-08 03:00:00"
          },
          {
            "dt": 1541656800,
            "main": {
              "temp": 16.4,
              "temp_min": 16.4,
              "temp_max": 16.4,
              "pressure": 818.15,
              "sea_level": 1041.36,
              "grnd_level": 818.15,
              "humidity": 78,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 600,
                "main": "Snow",
                "description": "light snow",
                "icon": "13n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 0.58,
              "deg": 18.5023
            },
            "rain": {},
            "snow": {
              "3h": 0.09
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-08 06:00:00"
          },
          {
            "dt": 1541667600,
            "main": {
              "temp": 13.52,
              "temp_min": 13.52,
              "temp_max": 13.52,
              "pressure": 818.16,
              "sea_level": 1042.47,
              "grnd_level": 818.16,
              "humidity": 75,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 8
            },
            "wind": {
              "speed": 1.59,
              "deg": 186.503
            },
            "rain": {},
            "snow": {
              "3h": 0.005
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-08 09:00:00"
          },
          {
            "dt": 1541678400,
            "main": {
              "temp": 13.42,
              "temp_min": 13.42,
              "temp_max": 13.42,
              "pressure": 819,
              "sea_level": 1044.48,
              "grnd_level": 819,
              "humidity": 80,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.27,
              "deg": 268.002
            },
            "rain": {},
            "snow": {
              "3h": 0.0125
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-08 12:00:00"
          },
          {
            "dt": 1541689200,
            "main": {
              "temp": 20.01,
              "temp_min": 20.01,
              "temp_max": 20.01,
              "pressure": 821.23,
              "sea_level": 1046.7,
              "grnd_level": 821.23,
              "humidity": 71,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 4.38,
              "deg": 273.502
            },
            "rain": {},
            "snow": {
              "3h": 0.0025
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-08 15:00:00"
          },
          {
            "dt": 1541700000,
            "main": {
              "temp": 35.35,
              "temp_min": 35.35,
              "temp_max": 35.35,
              "pressure": 821.55,
              "sea_level": 1041.85,
              "grnd_level": 821.55,
              "humidity": 55,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.37,
              "deg": 41.0055
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-08 18:00:00"
          },
          {
            "dt": 1541710800,
            "main": {
              "temp": 39.8,
              "temp_min": 39.8,
              "temp_max": 39.8,
              "pressure": 819.65,
              "sea_level": 1037.24,
              "grnd_level": 819.65,
              "humidity": 44,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.72,
              "deg": 325.503
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-08 21:00:00"
          },
          {
            "dt": 1541721600,
            "main": {
              "temp": 32.13,
              "temp_min": 32.13,
              "temp_max": 32.13,
              "pressure": 819.95,
              "sea_level": 1039.09,
              "grnd_level": 819.95,
              "humidity": 47,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 4.61,
              "deg": 325.006
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-09 00:00:00"
          },
          {
            "dt": 1541732400,
            "main": {
              "temp": 18.71,
              "temp_min": 18.71,
              "temp_max": 18.71,
              "pressure": 821.08,
              "sea_level": 1044.03,
              "grnd_level": 821.08,
              "humidity": 67,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.15,
              "deg": 318.509
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-09 03:00:00"
          },
          {
            "dt": 1541743200,
            "main": {
              "temp": 13.24,
              "temp_min": 13.24,
              "temp_max": 13.24,
              "pressure": 821.56,
              "sea_level": 1046.58,
              "grnd_level": 821.56,
              "humidity": 67,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.04,
              "deg": 211.002
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-09 06:00:00"
          },
          {
            "dt": 1541754000,
            "main": {
              "temp": 11.61,
              "temp_min": 11.61,
              "temp_max": 11.61,
              "pressure": 821.16,
              "sea_level": 1047.48,
              "grnd_level": 821.16,
              "humidity": 61,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.76,
              "deg": 186.501
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-09 09:00:00"
          },
          {
            "dt": 1541764800,
            "main": {
              "temp": 10.96,
              "temp_min": 10.96,
              "temp_max": 10.96,
              "pressure": 820.64,
              "sea_level": 1048.19,
              "grnd_level": 820.64,
              "humidity": 63,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 4.41,
              "deg": 198.001
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-09 12:00:00"
          },
          {
            "dt": 1541775600,
            "main": {
              "temp": 17.43,
              "temp_min": 17.43,
              "temp_max": 17.43,
              "pressure": 820,
              "sea_level": 1046.63,
              "grnd_level": 820,
              "humidity": 55,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 4.74,
              "deg": 216
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-09 15:00:00"
          },
          {
            "dt": 1541786400,
            "main": {
              "temp": 39.05,
              "temp_min": 39.05,
              "temp_max": 39.05,
              "pressure": 818.58,
              "sea_level": 1038.2,
              "grnd_level": 818.58,
              "humidity": 42,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.73,
              "deg": 217.5
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-09 18:00:00"
          },
          {
            "dt": 1541797200,
            "main": {
              "temp": 44.63,
              "temp_min": 44.63,
              "temp_max": 44.63,
              "pressure": 815.8,
              "sea_level": 1031.9,
              "grnd_level": 815.8,
              "humidity": 36,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.86,
              "deg": 176.505
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-09 21:00:00"
          },
          {
            "dt": 1541808000,
            "main": {
              "temp": 33.77,
              "temp_min": 33.77,
              "temp_max": 33.77,
              "pressure": 814.99,
              "sea_level": 1032.67,
              "grnd_level": 814.99,
              "humidity": 50,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.79,
              "deg": 5.01373
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-10 00:00:00"
          },
          {
            "dt": 1541818800,
            "main": {
              "temp": 18.92,
              "temp_min": 18.92,
              "temp_max": 18.92,
              "pressure": 814.12,
              "sea_level": 1034.82,
              "grnd_level": 814.12,
              "humidity": 63,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.37,
              "deg": 177.5
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-10 03:00:00"
          },
          {
            "dt": 1541829600,
            "main": {
              "temp": 14.12,
              "temp_min": 14.12,
              "temp_max": 14.12,
              "pressure": 812.42,
              "sea_level": 1033.7,
              "grnd_level": 812.42,
              "humidity": 59,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.75,
              "deg": 197.5
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-10 06:00:00"
          },
          {
            "dt": 1541840400,
            "main": {
              "temp": 12.45,
              "temp_min": 12.45,
              "temp_max": 12.45,
              "pressure": 810.3,
              "sea_level": 1031.36,
              "grnd_level": 810.3,
              "humidity": 53,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.6,
              "deg": 200.001
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-10 09:00:00"
          },
          {
            "dt": 1541851200,
            "main": {
              "temp": 11.99,
              "temp_min": 11.99,
              "temp_max": 11.99,
              "pressure": 808.89,
              "sea_level": 1029.59,
              "grnd_level": 808.89,
              "humidity": 50,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.71,
              "deg": 210.506
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2018-11-10 12:00:00"
          },
          {
            "dt": 1541862000,
            "main": {
              "temp": 20.67,
              "temp_min": 20.67,
              "temp_max": 20.67,
              "pressure": 808.38,
              "sea_level": 1027.43,
              "grnd_level": 808.38,
              "humidity": 37,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 4.41,
              "deg": 213.5
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-10 15:00:00"
          },
          {
            "dt": 1541872800,
            "main": {
              "temp": 50.73,
              "temp_min": 50.73,
              "temp_max": 50.73,
              "pressure": 807.63,
              "sea_level": 1020.48,
              "grnd_level": 807.63,
              "humidity": 29,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.28,
              "deg": 279.5
            },
            "rain": {},
            "snow": {},
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2018-11-10 18:00:00"
          }
        ],
        "city": {
          "id": 5423075,
          "name": "Glendale",
          "coord": {
            "lat": 39.705,
            "lon": -104.9336
          },
          "country": "US",
          "population": 4184
        }
      }
    }

    const expected = ['name', 'photo', 'lat', 'long', 'wAmps', 'wPets', 'wSewer', 'wHose', 'wWater', 'forecast']
    const result = Object.keys(campgroundCleaner([mockCamp])[0]);
    
    expect(result).toEqual(expected);
  })
  
  it('should return the correct number of objects', () => {
    
  })
})

describe('cleanForecast', () => {
  it('should return and object with the correct keys', () => {
    const mockForecast = {
      "cod": "200",
      "message": 0.0079,
      "cnt": 40,
      "list": [
        {
          "dt": 1541451600,
          "main": {
            "temp": 53.01,
            "temp_min": 46.22,
            "temp_max": 53.01,
            "pressure": 809.52,
            "sea_level": 1018.87,
            "grnd_level": 809.52,
            "humidity": 41,
            "temp_kf": 3.77
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 12.06,
            "deg": 297.501
          },
          "rain": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-05 21:00:00"
        },
        {
          "dt": 1541462400,
          "main": {
            "temp": 43.47,
            "temp_min": 38.37,
            "temp_max": 43.47,
            "pressure": 810.9,
            "sea_level": 1022.11,
            "grnd_level": 810.9,
            "humidity": 41,
            "temp_kf": 2.83
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 8.1,
            "deg": 292.5
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-06 00:00:00"
        },
        {
          "dt": 1541473200,
          "main": {
            "temp": 31.46,
            "temp_min": 28.06,
            "temp_max": 31.46,
            "pressure": 811.35,
            "sea_level": 1025.91,
            "grnd_level": 811.35,
            "humidity": 55,
            "temp_kf": 1.88
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 6.04,
            "deg": 241.016
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-06 03:00:00"
        },
        {
          "dt": 1541484000,
          "main": {
            "temp": 28.67,
            "temp_min": 26.97,
            "temp_max": 28.67,
            "pressure": 811.03,
            "sea_level": 1027.32,
            "grnd_level": 811.03,
            "humidity": 52,
            "temp_kf": 0.94
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 7.63,
            "deg": 243.509
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-06 06:00:00"
        },
        {
          "dt": 1541494800,
          "main": {
            "temp": 25.17,
            "temp_min": 25.17,
            "temp_max": 25.17,
            "pressure": 811.7,
            "sea_level": 1029.26,
            "grnd_level": 811.7,
            "humidity": 56,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 6.64,
            "deg": 276.502
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-06 09:00:00"
        },
        {
          "dt": 1541505600,
          "main": {
            "temp": 21.86,
            "temp_min": 21.86,
            "temp_max": 21.86,
            "pressure": 813.13,
            "sea_level": 1031.93,
            "grnd_level": 813.13,
            "humidity": 55,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 6.02,
            "deg": 294.001
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-06 12:00:00"
        },
        {
          "dt": 1541516400,
          "main": {
            "temp": 28.57,
            "temp_min": 28.57,
            "temp_max": 28.57,
            "pressure": 814.78,
            "sea_level": 1033.2,
            "grnd_level": 814.78,
            "humidity": 47,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 7.25,
            "deg": 290.002
          },
          "rain": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-06 15:00:00"
        },
        {
          "dt": 1541527200,
          "main": {
            "temp": 42.43,
            "temp_min": 42.43,
            "temp_max": 42.43,
            "pressure": 815.03,
            "sea_level": 1029.07,
            "grnd_level": 815.03,
            "humidity": 45,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 9.08,
            "deg": 306
          },
          "rain": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-06 18:00:00"
        },
        {
          "dt": 1541538000,
          "main": {
            "temp": 43.03,
            "temp_min": 43.03,
            "temp_max": 43.03,
            "pressure": 814.8,
            "sea_level": 1027.53,
            "grnd_level": 814.8,
            "humidity": 39,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "clouds": {
            "all": 20
          },
          "wind": {
            "speed": 10,
            "deg": 308.003
          },
          "rain": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-06 21:00:00"
        },
        {
          "dt": 1541548800,
          "main": {
            "temp": 35.43,
            "temp_min": 35.43,
            "temp_max": 35.43,
            "pressure": 815.9,
            "sea_level": 1030.98,
            "grnd_level": 815.9,
            "humidity": 39,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 7.52,
            "deg": 324.501
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-07 00:00:00"
        },
        {
          "dt": 1541559600,
          "main": {
            "temp": 24.57,
            "temp_min": 24.57,
            "temp_max": 24.57,
            "pressure": 817.54,
            "sea_level": 1036.99,
            "grnd_level": 817.54,
            "humidity": 49,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 5.41,
            "deg": 303.505
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-07 03:00:00"
        },
        {
          "dt": 1541570400,
          "main": {
            "temp": 17.33,
            "temp_min": 17.33,
            "temp_max": 17.33,
            "pressure": 818.05,
            "sea_level": 1040.43,
            "grnd_level": 818.05,
            "humidity": 67,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.04,
            "deg": 124.007
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-07 06:00:00"
        },
        {
          "dt": 1541581200,
          "main": {
            "temp": 14.2,
            "temp_min": 14.2,
            "temp_max": 14.2,
            "pressure": 817.73,
            "sea_level": 1041.75,
            "grnd_level": 817.73,
            "humidity": 73,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.51,
            "deg": 99.5013
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-07 09:00:00"
        },
        {
          "dt": 1541592000,
          "main": {
            "temp": 11.66,
            "temp_min": 11.66,
            "temp_max": 11.66,
            "pressure": 817.28,
            "sea_level": 1042.13,
            "grnd_level": 817.28,
            "humidity": 76,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 0.94,
            "deg": 295.502
          },
          "rain": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-07 12:00:00"
        },
        {
          "dt": 1541602800,
          "main": {
            "temp": 18.11,
            "temp_min": 18.11,
            "temp_max": 18.11,
            "pressure": 817.48,
            "sea_level": 1041.38,
            "grnd_level": 817.48,
            "humidity": 76,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 600,
              "main": "Snow",
              "description": "light snow",
              "icon": "13d"
            }
          ],
          "clouds": {
            "all": 12
          },
          "wind": {
            "speed": 3.38,
            "deg": 292.003
          },
          "rain": {},
          "snow": {
            "3h": 0.035
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-07 15:00:00"
        },
        {
          "dt": 1541613600,
          "main": {
            "temp": 35.61,
            "temp_min": 35.61,
            "temp_max": 35.61,
            "pressure": 816.78,
            "sea_level": 1035.26,
            "grnd_level": 816.78,
            "humidity": 54,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.82,
            "deg": 10.5004
          },
          "rain": {},
          "snow": {
            "3h": 0.01
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-07 18:00:00"
        },
        {
          "dt": 1541624400,
          "main": {
            "temp": 38.61,
            "temp_min": 38.61,
            "temp_max": 38.61,
            "pressure": 815.56,
            "sea_level": 1031.44,
            "grnd_level": 815.56,
            "humidity": 49,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 5.59,
            "deg": 28.0025
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-07 21:00:00"
        },
        {
          "dt": 1541635200,
          "main": {
            "temp": 30.71,
            "temp_min": 30.71,
            "temp_max": 30.71,
            "pressure": 816.06,
            "sea_level": 1033.54,
            "grnd_level": 816.06,
            "humidity": 56,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.41,
            "deg": 12.0012
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-08 00:00:00"
        },
        {
          "dt": 1541646000,
          "main": {
            "temp": 20.91,
            "temp_min": 20.91,
            "temp_max": 20.91,
            "pressure": 817.64,
            "sea_level": 1038.81,
            "grnd_level": 817.64,
            "humidity": 75,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 32
          },
          "wind": {
            "speed": 5.37,
            "deg": 15.0026
          },
          "rain": {},
          "snow": {
            "3h": 0.005
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-08 03:00:00"
        },
        {
          "dt": 1541656800,
          "main": {
            "temp": 16.4,
            "temp_min": 16.4,
            "temp_max": 16.4,
            "pressure": 818.15,
            "sea_level": 1041.36,
            "grnd_level": 818.15,
            "humidity": 78,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 600,
              "main": "Snow",
              "description": "light snow",
              "icon": "13n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 0.58,
            "deg": 18.5023
          },
          "rain": {},
          "snow": {
            "3h": 0.09
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-08 06:00:00"
        },
        {
          "dt": 1541667600,
          "main": {
            "temp": 13.52,
            "temp_min": 13.52,
            "temp_max": 13.52,
            "pressure": 818.16,
            "sea_level": 1042.47,
            "grnd_level": 818.16,
            "humidity": 75,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 8
          },
          "wind": {
            "speed": 1.59,
            "deg": 186.503
          },
          "rain": {},
          "snow": {
            "3h": 0.005
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-08 09:00:00"
        },
        {
          "dt": 1541678400,
          "main": {
            "temp": 13.42,
            "temp_min": 13.42,
            "temp_max": 13.42,
            "pressure": 819,
            "sea_level": 1044.48,
            "grnd_level": 819,
            "humidity": 80,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.27,
            "deg": 268.002
          },
          "rain": {},
          "snow": {
            "3h": 0.0125
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-08 12:00:00"
        },
        {
          "dt": 1541689200,
          "main": {
            "temp": 20.01,
            "temp_min": 20.01,
            "temp_max": 20.01,
            "pressure": 821.23,
            "sea_level": 1046.7,
            "grnd_level": 821.23,
            "humidity": 71,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.38,
            "deg": 273.502
          },
          "rain": {},
          "snow": {
            "3h": 0.0025
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-08 15:00:00"
        },
        {
          "dt": 1541700000,
          "main": {
            "temp": 35.35,
            "temp_min": 35.35,
            "temp_max": 35.35,
            "pressure": 821.55,
            "sea_level": 1041.85,
            "grnd_level": 821.55,
            "humidity": 55,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.37,
            "deg": 41.0055
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-08 18:00:00"
        },
        {
          "dt": 1541710800,
          "main": {
            "temp": 39.8,
            "temp_min": 39.8,
            "temp_max": 39.8,
            "pressure": 819.65,
            "sea_level": 1037.24,
            "grnd_level": 819.65,
            "humidity": 44,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.72,
            "deg": 325.503
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-08 21:00:00"
        },
        {
          "dt": 1541721600,
          "main": {
            "temp": 32.13,
            "temp_min": 32.13,
            "temp_max": 32.13,
            "pressure": 819.95,
            "sea_level": 1039.09,
            "grnd_level": 819.95,
            "humidity": 47,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.61,
            "deg": 325.006
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-09 00:00:00"
        },
        {
          "dt": 1541732400,
          "main": {
            "temp": 18.71,
            "temp_min": 18.71,
            "temp_max": 18.71,
            "pressure": 821.08,
            "sea_level": 1044.03,
            "grnd_level": 821.08,
            "humidity": 67,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.15,
            "deg": 318.509
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-09 03:00:00"
        },
        {
          "dt": 1541743200,
          "main": {
            "temp": 13.24,
            "temp_min": 13.24,
            "temp_max": 13.24,
            "pressure": 821.56,
            "sea_level": 1046.58,
            "grnd_level": 821.56,
            "humidity": 67,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.04,
            "deg": 211.002
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-09 06:00:00"
        },
        {
          "dt": 1541754000,
          "main": {
            "temp": 11.61,
            "temp_min": 11.61,
            "temp_max": 11.61,
            "pressure": 821.16,
            "sea_level": 1047.48,
            "grnd_level": 821.16,
            "humidity": 61,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.76,
            "deg": 186.501
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-09 09:00:00"
        },
        {
          "dt": 1541764800,
          "main": {
            "temp": 10.96,
            "temp_min": 10.96,
            "temp_max": 10.96,
            "pressure": 820.64,
            "sea_level": 1048.19,
            "grnd_level": 820.64,
            "humidity": 63,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.41,
            "deg": 198.001
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-09 12:00:00"
        },
        {
          "dt": 1541775600,
          "main": {
            "temp": 17.43,
            "temp_min": 17.43,
            "temp_max": 17.43,
            "pressure": 820,
            "sea_level": 1046.63,
            "grnd_level": 820,
            "humidity": 55,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.74,
            "deg": 216
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-09 15:00:00"
        },
        {
          "dt": 1541786400,
          "main": {
            "temp": 39.05,
            "temp_min": 39.05,
            "temp_max": 39.05,
            "pressure": 818.58,
            "sea_level": 1038.2,
            "grnd_level": 818.58,
            "humidity": 42,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.73,
            "deg": 217.5
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-09 18:00:00"
        },
        {
          "dt": 1541797200,
          "main": {
            "temp": 44.63,
            "temp_min": 44.63,
            "temp_max": 44.63,
            "pressure": 815.8,
            "sea_level": 1031.9,
            "grnd_level": 815.8,
            "humidity": 36,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.86,
            "deg": 176.505
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-09 21:00:00"
        },
        {
          "dt": 1541808000,
          "main": {
            "temp": 33.77,
            "temp_min": 33.77,
            "temp_max": 33.77,
            "pressure": 814.99,
            "sea_level": 1032.67,
            "grnd_level": 814.99,
            "humidity": 50,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.79,
            "deg": 5.01373
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-10 00:00:00"
        },
        {
          "dt": 1541818800,
          "main": {
            "temp": 18.92,
            "temp_min": 18.92,
            "temp_max": 18.92,
            "pressure": 814.12,
            "sea_level": 1034.82,
            "grnd_level": 814.12,
            "humidity": 63,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.37,
            "deg": 177.5
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-10 03:00:00"
        },
        {
          "dt": 1541829600,
          "main": {
            "temp": 14.12,
            "temp_min": 14.12,
            "temp_max": 14.12,
            "pressure": 812.42,
            "sea_level": 1033.7,
            "grnd_level": 812.42,
            "humidity": 59,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.75,
            "deg": 197.5
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-10 06:00:00"
        },
        {
          "dt": 1541840400,
          "main": {
            "temp": 12.45,
            "temp_min": 12.45,
            "temp_max": 12.45,
            "pressure": 810.3,
            "sea_level": 1031.36,
            "grnd_level": 810.3,
            "humidity": 53,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.6,
            "deg": 200.001
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-10 09:00:00"
        },
        {
          "dt": 1541851200,
          "main": {
            "temp": 11.99,
            "temp_min": 11.99,
            "temp_max": 11.99,
            "pressure": 808.89,
            "sea_level": 1029.59,
            "grnd_level": 808.89,
            "humidity": 50,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 3.71,
            "deg": 210.506
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2018-11-10 12:00:00"
        },
        {
          "dt": 1541862000,
          "main": {
            "temp": 20.67,
            "temp_min": 20.67,
            "temp_max": 20.67,
            "pressure": 808.38,
            "sea_level": 1027.43,
            "grnd_level": 808.38,
            "humidity": 37,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 4.41,
            "deg": 213.5
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-10 15:00:00"
        },
        {
          "dt": 1541872800,
          "main": {
            "temp": 50.73,
            "temp_min": 50.73,
            "temp_max": 50.73,
            "pressure": 807.63,
            "sea_level": 1020.48,
            "grnd_level": 807.63,
            "humidity": 29,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 2.28,
            "deg": 279.5
          },
          "rain": {},
          "snow": {},
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2018-11-10 18:00:00"
        }
      ],
      "city": {
        "id": 5423075,
        "name": "Glendale",
        "coord": {
          "lat": 39.705,
          "lon": -104.9336
        },
        "country": "US",
        "population": 4184
      }
    }
    const expected = ['date', 'humidity', 'temp', 'max', 'min', 'descrip', 'summary', 'icon', 'windSpeed']
    const result = Object.keys(cleanForecast(mockForecast.list)[0]);

    expect(result).toEqual(expected)
    
  })
  
  it('should return the correct number of objects', () => {
    
  })
})