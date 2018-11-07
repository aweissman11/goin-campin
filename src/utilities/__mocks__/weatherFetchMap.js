export const weatherFetchMap = jest.fn().mockImplementation(() => Promise.resolve(mockWeatherCamps))

const mockWeatherCamps = [{
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
    "message": 0.0043,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 49.19,
        "temp_min": 45.31,
        "temp_max": 49.19,
        "pressure": 813.51,
        "sea_level": 1025.45,
        "grnd_level": 813.51,
        "humidity": 33,
        "temp_kf": 2.15
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 9.98,
        "deg": 303.002
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 39.94,
        "temp_min": 37.04,
        "temp_max": 39.94,
        "pressure": 814.83,
        "sea_level": 1029.04,
        "grnd_level": 814.83,
        "humidity": 33,
        "temp_kf": 1.62
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.74,
        "deg": 324.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 26.58,
        "temp_min": 24.64,
        "temp_max": 26.58,
        "pressure": 816.74,
        "sea_level": 1035.02,
        "grnd_level": 816.74,
        "humidity": 48,
        "temp_kf": 1.08
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.74,
        "deg": 303.004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 17.92,
        "temp_min": 16.96,
        "temp_max": 17.92,
        "pressure": 816.84,
        "sea_level": 1037.66,
        "grnd_level": 816.84,
        "humidity": 64,
        "temp_kf": 0.54
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.59,
        "deg": 178.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 13.92,
        "temp_min": 13.92,
        "temp_max": 13.92,
        "pressure": 816.73,
        "sea_level": 1039.38,
        "grnd_level": 816.73,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.36,
        "deg": 141.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 12.25,
        "temp_min": 12.25,
        "temp_max": 12.25,
        "pressure": 817.52,
        "sea_level": 1041.98,
        "grnd_level": 817.52,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.14,
        "deg": 355
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 16.57,
        "temp_min": 16.57,
        "temp_max": 16.57,
        "pressure": 818.36,
        "sea_level": 1042.58,
        "grnd_level": 818.36,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.92,
        "deg": 6.5112
      },
      "snow": {
        "3h": 0.107
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 31.71,
        "temp_min": 31.71,
        "temp_max": 31.71,
        "pressure": 817.5,
        "sea_level": 1036.76,
        "grnd_level": 817.5,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.27,
        "deg": 33.5005
      },
      "snow": {
        "3h": 0.045
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 37.44,
        "temp_min": 37.44,
        "temp_max": 37.44,
        "pressure": 815.44,
        "sea_level": 1032.07,
        "grnd_level": 815.44,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 46.0007
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 30.61,
        "temp_min": 30.61,
        "temp_max": 30.61,
        "pressure": 815.83,
        "sea_level": 1034.2,
        "grnd_level": 815.83,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.4,
        "deg": 46.5049
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 817.42,
        "sea_level": 1039.36,
        "grnd_level": 817.42,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 66.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 13.65,
        "temp_min": 13.65,
        "temp_max": 13.65,
        "pressure": 817.75,
        "sea_level": 1041.31,
        "grnd_level": 817.75,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.05,
        "deg": 342.502
      },
      "snow": {
        "3h": 0.0005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 12.46,
        "temp_min": 12.46,
        "temp_max": 12.46,
        "pressure": 817.67,
        "sea_level": 1042.25,
        "grnd_level": 817.67,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.81,
        "deg": 340.503
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.28,
        "temp_min": 13.28,
        "temp_max": 13.28,
        "pressure": 818.79,
        "sea_level": 1044.29,
        "grnd_level": 818.79,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13n"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 1.81,
        "deg": 338.5
      },
      "snow": {
        "3h": 0.0675
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.42,
        "temp_min": 19.42,
        "temp_max": 19.42,
        "pressure": 820.62,
        "sea_level": 1045.82,
        "grnd_level": 820.62,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.16,
        "deg": 275
      },
      "snow": {
        "3h": 0.0575
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 37.23,
        "temp_min": 37.23,
        "temp_max": 37.23,
        "pressure": 820.72,
        "sea_level": 1040.78,
        "grnd_level": 820.72,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 321.003
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 39.7,
        "temp_min": 39.7,
        "temp_max": 39.7,
        "pressure": 819.35,
        "sea_level": 1037.06,
        "grnd_level": 819.35,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.05,
        "deg": 312.003
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 32.02,
        "temp_min": 32.02,
        "temp_max": 32.02,
        "pressure": 819.89,
        "sea_level": 1039.55,
        "grnd_level": 819.89,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.64,
        "deg": 313.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 19.33,
        "temp_min": 19.33,
        "temp_max": 19.33,
        "pressure": 821.01,
        "sea_level": 1044.49,
        "grnd_level": 821.01,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 270.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 11.96,
        "temp_min": 11.96,
        "temp_max": 11.96,
        "pressure": 820.89,
        "sea_level": 1046.28,
        "grnd_level": 820.89,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.01,
        "deg": 224.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 10.41,
        "temp_min": 10.41,
        "temp_max": 10.41,
        "pressure": 820.86,
        "sea_level": 1047.31,
        "grnd_level": 820.86,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.69,
        "deg": 187.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 9.12,
        "temp_min": 9.12,
        "temp_max": 9.12,
        "pressure": 821.09,
        "sea_level": 1048.55,
        "grnd_level": 821.09,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 238.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 15.9,
        "temp_min": 15.9,
        "temp_max": 15.9,
        "pressure": 821.51,
        "sea_level": 1048.34,
        "grnd_level": 821.51,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 224.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 39.33,
        "temp_min": 39.33,
        "temp_max": 39.33,
        "pressure": 820.09,
        "sea_level": 1039.99,
        "grnd_level": 820.09,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.94,
        "deg": 161.006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 45.28,
        "temp_min": 45.28,
        "temp_max": 45.28,
        "pressure": 816.83,
        "sea_level": 1033.14,
        "grnd_level": 816.83,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.42,
        "deg": 172.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 35.14,
        "temp_min": 35.14,
        "temp_max": 35.14,
        "pressure": 815,
        "sea_level": 1032.86,
        "grnd_level": 815,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3,
        "deg": 163.51
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 21.54,
        "temp_min": 21.54,
        "temp_max": 21.54,
        "pressure": 814.15,
        "sea_level": 1034.26,
        "grnd_level": 814.15,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.56,
        "deg": 211.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 16.33,
        "temp_min": 16.33,
        "temp_max": 16.33,
        "pressure": 812.63,
        "sea_level": 1033.01,
        "grnd_level": 812.63,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.14,
        "deg": 214.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 14.64,
        "temp_min": 14.64,
        "temp_max": 14.64,
        "pressure": 811.25,
        "sea_level": 1031.35,
        "grnd_level": 811.25,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.85,
        "deg": 210.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 16.17,
        "temp_min": 16.17,
        "temp_max": 16.17,
        "pressure": 810.47,
        "sea_level": 1030.16,
        "grnd_level": 810.47,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.76,
        "deg": 224.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 22.98,
        "temp_min": 22.98,
        "temp_max": 22.98,
        "pressure": 811.07,
        "sea_level": 1029.5,
        "grnd_level": 811.07,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 233.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 51.26,
        "temp_min": 51.26,
        "temp_max": 51.26,
        "pressure": 811.2,
        "sea_level": 1024.3,
        "grnd_level": 811.2,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.37,
        "deg": 27.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 51.53,
        "temp_min": 51.53,
        "temp_max": 51.53,
        "pressure": 810.57,
        "sea_level": 1021.68,
        "grnd_level": 810.57,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.18,
        "deg": 43.5037
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 41.7,
        "temp_min": 41.7,
        "temp_max": 41.7,
        "pressure": 811.81,
        "sea_level": 1025.73,
        "grnd_level": 811.81,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 3.27,
        "deg": 56.0016
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 33.64,
        "temp_min": 33.64,
        "temp_max": 33.64,
        "pressure": 812.84,
        "sea_level": 1031.21,
        "grnd_level": 812.84,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 4,
        "deg": 79.0003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 29.58,
        "temp_min": 29.58,
        "temp_max": 29.58,
        "pressure": 812.68,
        "sea_level": 1033.18,
        "grnd_level": 812.68,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 4.38,
        "deg": 135.509
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.72,
        "sea_level": 1033.18,
        "grnd_level": 811.72,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.38,
        "deg": 212.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 18.4,
        "temp_min": 18.4,
        "temp_max": 18.4,
        "pressure": 811.37,
        "sea_level": 1033.22,
        "grnd_level": 811.37,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 239.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.76,
        "sea_level": 1032.37,
        "grnd_level": 811.76,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.83,
        "deg": 199.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 45.02,
        "temp_min": 45.02,
        "temp_max": 45.02,
        "pressure": 811.38,
        "sea_level": 1025.85,
        "grnd_level": 811.38,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.35,
        "deg": 4.00006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
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
}, {
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
  },
  "forecast": {
    "cod": "200",
    "message": 0.0046,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 49.19,
        "temp_min": 45.31,
        "temp_max": 49.19,
        "pressure": 813.51,
        "sea_level": 1025.45,
        "grnd_level": 813.51,
        "humidity": 33,
        "temp_kf": 2.15
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 9.98,
        "deg": 303.002
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 39.94,
        "temp_min": 37.04,
        "temp_max": 39.94,
        "pressure": 814.83,
        "sea_level": 1029.04,
        "grnd_level": 814.83,
        "humidity": 33,
        "temp_kf": 1.62
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.74,
        "deg": 324.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 26.58,
        "temp_min": 24.64,
        "temp_max": 26.58,
        "pressure": 816.74,
        "sea_level": 1035.02,
        "grnd_level": 816.74,
        "humidity": 48,
        "temp_kf": 1.08
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.74,
        "deg": 303.004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 17.92,
        "temp_min": 16.96,
        "temp_max": 17.92,
        "pressure": 816.84,
        "sea_level": 1037.66,
        "grnd_level": 816.84,
        "humidity": 64,
        "temp_kf": 0.54
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.59,
        "deg": 178.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 13.92,
        "temp_min": 13.92,
        "temp_max": 13.92,
        "pressure": 816.73,
        "sea_level": 1039.38,
        "grnd_level": 816.73,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.36,
        "deg": 141.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 12.25,
        "temp_min": 12.25,
        "temp_max": 12.25,
        "pressure": 817.52,
        "sea_level": 1041.98,
        "grnd_level": 817.52,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.14,
        "deg": 355
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 16.57,
        "temp_min": 16.57,
        "temp_max": 16.57,
        "pressure": 818.36,
        "sea_level": 1042.58,
        "grnd_level": 818.36,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.92,
        "deg": 6.5112
      },
      "snow": {
        "3h": 0.107
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 31.71,
        "temp_min": 31.71,
        "temp_max": 31.71,
        "pressure": 817.5,
        "sea_level": 1036.76,
        "grnd_level": 817.5,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.27,
        "deg": 33.5005
      },
      "snow": {
        "3h": 0.045
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 37.44,
        "temp_min": 37.44,
        "temp_max": 37.44,
        "pressure": 815.44,
        "sea_level": 1032.07,
        "grnd_level": 815.44,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 46.0007
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 30.61,
        "temp_min": 30.61,
        "temp_max": 30.61,
        "pressure": 815.83,
        "sea_level": 1034.2,
        "grnd_level": 815.83,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.4,
        "deg": 46.5049
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 817.42,
        "sea_level": 1039.36,
        "grnd_level": 817.42,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 66.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 13.65,
        "temp_min": 13.65,
        "temp_max": 13.65,
        "pressure": 817.75,
        "sea_level": 1041.31,
        "grnd_level": 817.75,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.05,
        "deg": 342.502
      },
      "snow": {
        "3h": 0.0005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 12.46,
        "temp_min": 12.46,
        "temp_max": 12.46,
        "pressure": 817.67,
        "sea_level": 1042.25,
        "grnd_level": 817.67,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.81,
        "deg": 340.503
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.28,
        "temp_min": 13.28,
        "temp_max": 13.28,
        "pressure": 818.79,
        "sea_level": 1044.29,
        "grnd_level": 818.79,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13n"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 1.81,
        "deg": 338.5
      },
      "snow": {
        "3h": 0.0675
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.42,
        "temp_min": 19.42,
        "temp_max": 19.42,
        "pressure": 820.62,
        "sea_level": 1045.82,
        "grnd_level": 820.62,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.16,
        "deg": 275
      },
      "snow": {
        "3h": 0.0575
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 37.23,
        "temp_min": 37.23,
        "temp_max": 37.23,
        "pressure": 820.72,
        "sea_level": 1040.78,
        "grnd_level": 820.72,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 321.003
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 39.7,
        "temp_min": 39.7,
        "temp_max": 39.7,
        "pressure": 819.35,
        "sea_level": 1037.06,
        "grnd_level": 819.35,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.05,
        "deg": 312.003
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 32.02,
        "temp_min": 32.02,
        "temp_max": 32.02,
        "pressure": 819.89,
        "sea_level": 1039.55,
        "grnd_level": 819.89,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.64,
        "deg": 313.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 19.33,
        "temp_min": 19.33,
        "temp_max": 19.33,
        "pressure": 821.01,
        "sea_level": 1044.49,
        "grnd_level": 821.01,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 270.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 11.96,
        "temp_min": 11.96,
        "temp_max": 11.96,
        "pressure": 820.89,
        "sea_level": 1046.28,
        "grnd_level": 820.89,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.01,
        "deg": 224.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 10.41,
        "temp_min": 10.41,
        "temp_max": 10.41,
        "pressure": 820.86,
        "sea_level": 1047.31,
        "grnd_level": 820.86,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.69,
        "deg": 187.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 9.12,
        "temp_min": 9.12,
        "temp_max": 9.12,
        "pressure": 821.09,
        "sea_level": 1048.55,
        "grnd_level": 821.09,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 238.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 15.9,
        "temp_min": 15.9,
        "temp_max": 15.9,
        "pressure": 821.51,
        "sea_level": 1048.34,
        "grnd_level": 821.51,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 224.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 39.33,
        "temp_min": 39.33,
        "temp_max": 39.33,
        "pressure": 820.09,
        "sea_level": 1039.99,
        "grnd_level": 820.09,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.94,
        "deg": 161.006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 45.28,
        "temp_min": 45.28,
        "temp_max": 45.28,
        "pressure": 816.83,
        "sea_level": 1033.14,
        "grnd_level": 816.83,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.42,
        "deg": 172.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 35.14,
        "temp_min": 35.14,
        "temp_max": 35.14,
        "pressure": 815,
        "sea_level": 1032.86,
        "grnd_level": 815,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3,
        "deg": 163.51
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 21.54,
        "temp_min": 21.54,
        "temp_max": 21.54,
        "pressure": 814.15,
        "sea_level": 1034.26,
        "grnd_level": 814.15,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.56,
        "deg": 211.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 16.33,
        "temp_min": 16.33,
        "temp_max": 16.33,
        "pressure": 812.63,
        "sea_level": 1033.01,
        "grnd_level": 812.63,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.14,
        "deg": 214.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 14.64,
        "temp_min": 14.64,
        "temp_max": 14.64,
        "pressure": 811.25,
        "sea_level": 1031.35,
        "grnd_level": 811.25,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.85,
        "deg": 210.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 16.17,
        "temp_min": 16.17,
        "temp_max": 16.17,
        "pressure": 810.47,
        "sea_level": 1030.16,
        "grnd_level": 810.47,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.76,
        "deg": 224.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 22.98,
        "temp_min": 22.98,
        "temp_max": 22.98,
        "pressure": 811.07,
        "sea_level": 1029.5,
        "grnd_level": 811.07,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 233.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 51.26,
        "temp_min": 51.26,
        "temp_max": 51.26,
        "pressure": 811.2,
        "sea_level": 1024.3,
        "grnd_level": 811.2,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.37,
        "deg": 27.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 51.53,
        "temp_min": 51.53,
        "temp_max": 51.53,
        "pressure": 810.57,
        "sea_level": 1021.68,
        "grnd_level": 810.57,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.18,
        "deg": 43.5037
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 41.7,
        "temp_min": 41.7,
        "temp_max": 41.7,
        "pressure": 811.81,
        "sea_level": 1025.73,
        "grnd_level": 811.81,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 3.27,
        "deg": 56.0016
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 33.64,
        "temp_min": 33.64,
        "temp_max": 33.64,
        "pressure": 812.84,
        "sea_level": 1031.21,
        "grnd_level": 812.84,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 4,
        "deg": 79.0003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 29.58,
        "temp_min": 29.58,
        "temp_max": 29.58,
        "pressure": 812.68,
        "sea_level": 1033.18,
        "grnd_level": 812.68,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 4.38,
        "deg": 135.509
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.72,
        "sea_level": 1033.18,
        "grnd_level": 811.72,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.38,
        "deg": 212.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 18.4,
        "temp_min": 18.4,
        "temp_max": 18.4,
        "pressure": 811.37,
        "sea_level": 1033.22,
        "grnd_level": 811.37,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 239.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.76,
        "sea_level": 1032.37,
        "grnd_level": 811.76,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.83,
        "deg": 199.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 45.02,
        "temp_min": 45.02,
        "temp_max": 45.02,
        "pressure": 811.38,
        "sea_level": 1025.85,
        "grnd_level": 811.38,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.35,
        "deg": 4.00006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 5438542,
      "name": "Sheridan",
      "coord": {
        "lat": 39.6469,
        "lon": -105.0253
      },
      "country": "US",
      "population": 5664
    }
  }
}, {
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
  },
  "forecast": {
    "cod": "200",
    "message": 0.0043,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 49.82,
        "temp_min": 45.31,
        "temp_max": 49.82,
        "pressure": 813.51,
        "sea_level": 1025.45,
        "grnd_level": 813.51,
        "humidity": 33,
        "temp_kf": 2.51
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 9.98,
        "deg": 303.002
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 40.42,
        "temp_min": 37.04,
        "temp_max": 40.42,
        "pressure": 814.83,
        "sea_level": 1029.04,
        "grnd_level": 814.83,
        "humidity": 33,
        "temp_kf": 1.88
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.74,
        "deg": 324.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 26.89,
        "temp_min": 24.64,
        "temp_max": 26.89,
        "pressure": 816.74,
        "sea_level": 1035.02,
        "grnd_level": 816.74,
        "humidity": 48,
        "temp_kf": 1.25
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.74,
        "deg": 303.004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 18.09,
        "temp_min": 16.96,
        "temp_max": 18.09,
        "pressure": 816.84,
        "sea_level": 1037.66,
        "grnd_level": 816.84,
        "humidity": 64,
        "temp_kf": 0.63
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.59,
        "deg": 178.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 13.92,
        "temp_min": 13.92,
        "temp_max": 13.92,
        "pressure": 816.73,
        "sea_level": 1039.38,
        "grnd_level": 816.73,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.36,
        "deg": 141.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 12.25,
        "temp_min": 12.25,
        "temp_max": 12.25,
        "pressure": 817.52,
        "sea_level": 1041.98,
        "grnd_level": 817.52,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.14,
        "deg": 355
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 16.57,
        "temp_min": 16.57,
        "temp_max": 16.57,
        "pressure": 818.36,
        "sea_level": 1042.58,
        "grnd_level": 818.36,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.92,
        "deg": 6.5112
      },
      "snow": {
        "3h": 0.107
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 31.71,
        "temp_min": 31.71,
        "temp_max": 31.71,
        "pressure": 817.5,
        "sea_level": 1036.76,
        "grnd_level": 817.5,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.27,
        "deg": 33.5005
      },
      "snow": {
        "3h": 0.045
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 37.44,
        "temp_min": 37.44,
        "temp_max": 37.44,
        "pressure": 815.44,
        "sea_level": 1032.07,
        "grnd_level": 815.44,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 46.0007
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 30.61,
        "temp_min": 30.61,
        "temp_max": 30.61,
        "pressure": 815.83,
        "sea_level": 1034.2,
        "grnd_level": 815.83,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.4,
        "deg": 46.5049
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 817.42,
        "sea_level": 1039.36,
        "grnd_level": 817.42,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 66.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 13.65,
        "temp_min": 13.65,
        "temp_max": 13.65,
        "pressure": 817.75,
        "sea_level": 1041.31,
        "grnd_level": 817.75,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.05,
        "deg": 342.502
      },
      "snow": {
        "3h": 0.0005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 12.46,
        "temp_min": 12.46,
        "temp_max": 12.46,
        "pressure": 817.67,
        "sea_level": 1042.25,
        "grnd_level": 817.67,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.81,
        "deg": 340.503
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.28,
        "temp_min": 13.28,
        "temp_max": 13.28,
        "pressure": 818.79,
        "sea_level": 1044.29,
        "grnd_level": 818.79,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13n"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 1.81,
        "deg": 338.5
      },
      "snow": {
        "3h": 0.0675
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.42,
        "temp_min": 19.42,
        "temp_max": 19.42,
        "pressure": 820.62,
        "sea_level": 1045.82,
        "grnd_level": 820.62,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.16,
        "deg": 275
      },
      "snow": {
        "3h": 0.0575
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 37.23,
        "temp_min": 37.23,
        "temp_max": 37.23,
        "pressure": 820.72,
        "sea_level": 1040.78,
        "grnd_level": 820.72,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 321.003
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 39.7,
        "temp_min": 39.7,
        "temp_max": 39.7,
        "pressure": 819.35,
        "sea_level": 1037.06,
        "grnd_level": 819.35,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.05,
        "deg": 312.003
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 32.02,
        "temp_min": 32.02,
        "temp_max": 32.02,
        "pressure": 819.89,
        "sea_level": 1039.55,
        "grnd_level": 819.89,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.64,
        "deg": 313.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 19.33,
        "temp_min": 19.33,
        "temp_max": 19.33,
        "pressure": 821.01,
        "sea_level": 1044.49,
        "grnd_level": 821.01,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 270.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 11.96,
        "temp_min": 11.96,
        "temp_max": 11.96,
        "pressure": 820.89,
        "sea_level": 1046.28,
        "grnd_level": 820.89,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.01,
        "deg": 224.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 10.41,
        "temp_min": 10.41,
        "temp_max": 10.41,
        "pressure": 820.86,
        "sea_level": 1047.31,
        "grnd_level": 820.86,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.69,
        "deg": 187.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 9.12,
        "temp_min": 9.12,
        "temp_max": 9.12,
        "pressure": 821.09,
        "sea_level": 1048.55,
        "grnd_level": 821.09,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 238.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 15.9,
        "temp_min": 15.9,
        "temp_max": 15.9,
        "pressure": 821.51,
        "sea_level": 1048.34,
        "grnd_level": 821.51,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 224.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 39.33,
        "temp_min": 39.33,
        "temp_max": 39.33,
        "pressure": 820.09,
        "sea_level": 1039.99,
        "grnd_level": 820.09,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.94,
        "deg": 161.006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 45.28,
        "temp_min": 45.28,
        "temp_max": 45.28,
        "pressure": 816.83,
        "sea_level": 1033.14,
        "grnd_level": 816.83,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.42,
        "deg": 172.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 35.14,
        "temp_min": 35.14,
        "temp_max": 35.14,
        "pressure": 815,
        "sea_level": 1032.86,
        "grnd_level": 815,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3,
        "deg": 163.51
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 21.54,
        "temp_min": 21.54,
        "temp_max": 21.54,
        "pressure": 814.15,
        "sea_level": 1034.26,
        "grnd_level": 814.15,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.56,
        "deg": 211.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 16.33,
        "temp_min": 16.33,
        "temp_max": 16.33,
        "pressure": 812.63,
        "sea_level": 1033.01,
        "grnd_level": 812.63,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.14,
        "deg": 214.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 14.64,
        "temp_min": 14.64,
        "temp_max": 14.64,
        "pressure": 811.25,
        "sea_level": 1031.35,
        "grnd_level": 811.25,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.85,
        "deg": 210.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 16.17,
        "temp_min": 16.17,
        "temp_max": 16.17,
        "pressure": 810.47,
        "sea_level": 1030.16,
        "grnd_level": 810.47,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.76,
        "deg": 224.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 22.98,
        "temp_min": 22.98,
        "temp_max": 22.98,
        "pressure": 811.07,
        "sea_level": 1029.5,
        "grnd_level": 811.07,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 233.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 51.26,
        "temp_min": 51.26,
        "temp_max": 51.26,
        "pressure": 811.2,
        "sea_level": 1024.3,
        "grnd_level": 811.2,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.37,
        "deg": 27.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 51.53,
        "temp_min": 51.53,
        "temp_max": 51.53,
        "pressure": 810.57,
        "sea_level": 1021.68,
        "grnd_level": 810.57,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.18,
        "deg": 43.5037
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 41.7,
        "temp_min": 41.7,
        "temp_max": 41.7,
        "pressure": 811.81,
        "sea_level": 1025.73,
        "grnd_level": 811.81,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 3.27,
        "deg": 56.0016
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 33.64,
        "temp_min": 33.64,
        "temp_max": 33.64,
        "pressure": 812.84,
        "sea_level": 1031.21,
        "grnd_level": 812.84,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 4,
        "deg": 79.0003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 29.58,
        "temp_min": 29.58,
        "temp_max": 29.58,
        "pressure": 812.68,
        "sea_level": 1033.18,
        "grnd_level": 812.68,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 4.38,
        "deg": 135.509
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.72,
        "sea_level": 1033.18,
        "grnd_level": 811.72,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.38,
        "deg": 212.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 18.4,
        "temp_min": 18.4,
        "temp_max": 18.4,
        "pressure": 811.37,
        "sea_level": 1033.22,
        "grnd_level": 811.37,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 239.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.76,
        "sea_level": 1032.37,
        "grnd_level": 811.76,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.83,
        "deg": 199.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 45.02,
        "temp_min": 45.02,
        "temp_max": 45.02,
        "pressure": 811.38,
        "sea_level": 1025.85,
        "grnd_level": 811.38,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.35,
        "deg": 4.00006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 7262510,
      "name": "West Pleasant View",
      "coord": {
        "lat": 39.7326,
        "lon": -105.1786
      },
      "country": "US",
      "population": 3840
    }
  }
}, {
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
  },
  "forecast": {
    "cod": "200",
    "message": 0.0043,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 49.82,
        "temp_min": 45.31,
        "temp_max": 49.82,
        "pressure": 813.51,
        "sea_level": 1025.45,
        "grnd_level": 813.51,
        "humidity": 33,
        "temp_kf": 2.51
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 9.98,
        "deg": 303.002
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 40.42,
        "temp_min": 37.04,
        "temp_max": 40.42,
        "pressure": 814.83,
        "sea_level": 1029.04,
        "grnd_level": 814.83,
        "humidity": 33,
        "temp_kf": 1.88
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.74,
        "deg": 324.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 26.89,
        "temp_min": 24.64,
        "temp_max": 26.89,
        "pressure": 816.74,
        "sea_level": 1035.02,
        "grnd_level": 816.74,
        "humidity": 48,
        "temp_kf": 1.25
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.74,
        "deg": 303.004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 18.09,
        "temp_min": 16.96,
        "temp_max": 18.09,
        "pressure": 816.84,
        "sea_level": 1037.66,
        "grnd_level": 816.84,
        "humidity": 64,
        "temp_kf": 0.63
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.59,
        "deg": 178.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 13.92,
        "temp_min": 13.92,
        "temp_max": 13.92,
        "pressure": 816.73,
        "sea_level": 1039.38,
        "grnd_level": 816.73,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.36,
        "deg": 141.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 12.25,
        "temp_min": 12.25,
        "temp_max": 12.25,
        "pressure": 817.52,
        "sea_level": 1041.98,
        "grnd_level": 817.52,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.14,
        "deg": 355
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 16.57,
        "temp_min": 16.57,
        "temp_max": 16.57,
        "pressure": 818.36,
        "sea_level": 1042.58,
        "grnd_level": 818.36,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.92,
        "deg": 6.5112
      },
      "snow": {
        "3h": 0.107
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 31.71,
        "temp_min": 31.71,
        "temp_max": 31.71,
        "pressure": 817.5,
        "sea_level": 1036.76,
        "grnd_level": 817.5,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.27,
        "deg": 33.5005
      },
      "snow": {
        "3h": 0.045
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 37.44,
        "temp_min": 37.44,
        "temp_max": 37.44,
        "pressure": 815.44,
        "sea_level": 1032.07,
        "grnd_level": 815.44,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 46.0007
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 30.61,
        "temp_min": 30.61,
        "temp_max": 30.61,
        "pressure": 815.83,
        "sea_level": 1034.2,
        "grnd_level": 815.83,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.4,
        "deg": 46.5049
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 817.42,
        "sea_level": 1039.36,
        "grnd_level": 817.42,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 66.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 13.65,
        "temp_min": 13.65,
        "temp_max": 13.65,
        "pressure": 817.75,
        "sea_level": 1041.31,
        "grnd_level": 817.75,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.05,
        "deg": 342.502
      },
      "snow": {
        "3h": 0.0005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 12.46,
        "temp_min": 12.46,
        "temp_max": 12.46,
        "pressure": 817.67,
        "sea_level": 1042.25,
        "grnd_level": 817.67,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.81,
        "deg": 340.503
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.28,
        "temp_min": 13.28,
        "temp_max": 13.28,
        "pressure": 818.79,
        "sea_level": 1044.29,
        "grnd_level": 818.79,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13n"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 1.81,
        "deg": 338.5
      },
      "snow": {
        "3h": 0.0675
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.42,
        "temp_min": 19.42,
        "temp_max": 19.42,
        "pressure": 820.62,
        "sea_level": 1045.82,
        "grnd_level": 820.62,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.16,
        "deg": 275
      },
      "snow": {
        "3h": 0.0575
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 37.23,
        "temp_min": 37.23,
        "temp_max": 37.23,
        "pressure": 820.72,
        "sea_level": 1040.78,
        "grnd_level": 820.72,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 321.003
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 39.7,
        "temp_min": 39.7,
        "temp_max": 39.7,
        "pressure": 819.35,
        "sea_level": 1037.06,
        "grnd_level": 819.35,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.05,
        "deg": 312.003
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 32.02,
        "temp_min": 32.02,
        "temp_max": 32.02,
        "pressure": 819.89,
        "sea_level": 1039.55,
        "grnd_level": 819.89,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.64,
        "deg": 313.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 19.33,
        "temp_min": 19.33,
        "temp_max": 19.33,
        "pressure": 821.01,
        "sea_level": 1044.49,
        "grnd_level": 821.01,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 270.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 11.96,
        "temp_min": 11.96,
        "temp_max": 11.96,
        "pressure": 820.89,
        "sea_level": 1046.28,
        "grnd_level": 820.89,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.01,
        "deg": 224.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 10.41,
        "temp_min": 10.41,
        "temp_max": 10.41,
        "pressure": 820.86,
        "sea_level": 1047.31,
        "grnd_level": 820.86,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.69,
        "deg": 187.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 9.12,
        "temp_min": 9.12,
        "temp_max": 9.12,
        "pressure": 821.09,
        "sea_level": 1048.55,
        "grnd_level": 821.09,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 238.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 15.9,
        "temp_min": 15.9,
        "temp_max": 15.9,
        "pressure": 821.51,
        "sea_level": 1048.34,
        "grnd_level": 821.51,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 224.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 39.33,
        "temp_min": 39.33,
        "temp_max": 39.33,
        "pressure": 820.09,
        "sea_level": 1039.99,
        "grnd_level": 820.09,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.94,
        "deg": 161.006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 45.28,
        "temp_min": 45.28,
        "temp_max": 45.28,
        "pressure": 816.83,
        "sea_level": 1033.14,
        "grnd_level": 816.83,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.42,
        "deg": 172.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 35.14,
        "temp_min": 35.14,
        "temp_max": 35.14,
        "pressure": 815,
        "sea_level": 1032.86,
        "grnd_level": 815,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3,
        "deg": 163.51
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 21.54,
        "temp_min": 21.54,
        "temp_max": 21.54,
        "pressure": 814.15,
        "sea_level": 1034.26,
        "grnd_level": 814.15,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.56,
        "deg": 211.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 16.33,
        "temp_min": 16.33,
        "temp_max": 16.33,
        "pressure": 812.63,
        "sea_level": 1033.01,
        "grnd_level": 812.63,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.14,
        "deg": 214.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 14.64,
        "temp_min": 14.64,
        "temp_max": 14.64,
        "pressure": 811.25,
        "sea_level": 1031.35,
        "grnd_level": 811.25,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.85,
        "deg": 210.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 16.17,
        "temp_min": 16.17,
        "temp_max": 16.17,
        "pressure": 810.47,
        "sea_level": 1030.16,
        "grnd_level": 810.47,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.76,
        "deg": 224.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 22.98,
        "temp_min": 22.98,
        "temp_max": 22.98,
        "pressure": 811.07,
        "sea_level": 1029.5,
        "grnd_level": 811.07,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 233.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 51.26,
        "temp_min": 51.26,
        "temp_max": 51.26,
        "pressure": 811.2,
        "sea_level": 1024.3,
        "grnd_level": 811.2,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.37,
        "deg": 27.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 51.53,
        "temp_min": 51.53,
        "temp_max": 51.53,
        "pressure": 810.57,
        "sea_level": 1021.68,
        "grnd_level": 810.57,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.18,
        "deg": 43.5037
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 41.7,
        "temp_min": 41.7,
        "temp_max": 41.7,
        "pressure": 811.81,
        "sea_level": 1025.73,
        "grnd_level": 811.81,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 3.27,
        "deg": 56.0016
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 33.64,
        "temp_min": 33.64,
        "temp_max": 33.64,
        "pressure": 812.84,
        "sea_level": 1031.21,
        "grnd_level": 812.84,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 4,
        "deg": 79.0003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 29.58,
        "temp_min": 29.58,
        "temp_max": 29.58,
        "pressure": 812.68,
        "sea_level": 1033.18,
        "grnd_level": 812.68,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 4.38,
        "deg": 135.509
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.72,
        "sea_level": 1033.18,
        "grnd_level": 811.72,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.38,
        "deg": 212.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 18.4,
        "temp_min": 18.4,
        "temp_max": 18.4,
        "pressure": 811.37,
        "sea_level": 1033.22,
        "grnd_level": 811.37,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 239.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.76,
        "sea_level": 1032.37,
        "grnd_level": 811.76,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.83,
        "deg": 199.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 45.02,
        "temp_min": 45.02,
        "temp_max": 45.02,
        "pressure": 811.38,
        "sea_level": 1025.85,
        "grnd_level": 811.38,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.35,
        "deg": 4.00006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 7262510,
      "name": "West Pleasant View",
      "coord": {
        "lat": 39.7326,
        "lon": -105.1786
      },
      "country": "US",
      "population": 3840
    }
  }
}, {
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
  },
  "forecast": {
    "cod": "200",
    "message": 0.0044,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 49.19,
        "temp_min": 45.31,
        "temp_max": 49.19,
        "pressure": 813.51,
        "sea_level": 1025.45,
        "grnd_level": 813.51,
        "humidity": 33,
        "temp_kf": 2.16
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 9.98,
        "deg": 303.002
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 39.96,
        "temp_min": 37.04,
        "temp_max": 39.96,
        "pressure": 814.83,
        "sea_level": 1029.04,
        "grnd_level": 814.83,
        "humidity": 33,
        "temp_kf": 1.62
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.74,
        "deg": 324.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 26.58,
        "temp_min": 24.64,
        "temp_max": 26.58,
        "pressure": 816.74,
        "sea_level": 1035.02,
        "grnd_level": 816.74,
        "humidity": 48,
        "temp_kf": 1.08
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.74,
        "deg": 303.004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 17.92,
        "temp_min": 16.96,
        "temp_max": 17.92,
        "pressure": 816.84,
        "sea_level": 1037.66,
        "grnd_level": 816.84,
        "humidity": 64,
        "temp_kf": 0.54
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.59,
        "deg": 178.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 13.92,
        "temp_min": 13.92,
        "temp_max": 13.92,
        "pressure": 816.73,
        "sea_level": 1039.38,
        "grnd_level": 816.73,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.36,
        "deg": 141.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 12.25,
        "temp_min": 12.25,
        "temp_max": 12.25,
        "pressure": 817.52,
        "sea_level": 1041.98,
        "grnd_level": 817.52,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.14,
        "deg": 355
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 16.57,
        "temp_min": 16.57,
        "temp_max": 16.57,
        "pressure": 818.36,
        "sea_level": 1042.58,
        "grnd_level": 818.36,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.92,
        "deg": 6.5112
      },
      "snow": {
        "3h": 0.107
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 31.71,
        "temp_min": 31.71,
        "temp_max": 31.71,
        "pressure": 817.5,
        "sea_level": 1036.76,
        "grnd_level": 817.5,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.27,
        "deg": 33.5005
      },
      "snow": {
        "3h": 0.045
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 37.44,
        "temp_min": 37.44,
        "temp_max": 37.44,
        "pressure": 815.44,
        "sea_level": 1032.07,
        "grnd_level": 815.44,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 46.0007
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 30.61,
        "temp_min": 30.61,
        "temp_max": 30.61,
        "pressure": 815.83,
        "sea_level": 1034.2,
        "grnd_level": 815.83,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.4,
        "deg": 46.5049
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 817.42,
        "sea_level": 1039.36,
        "grnd_level": 817.42,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 66.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 13.65,
        "temp_min": 13.65,
        "temp_max": 13.65,
        "pressure": 817.75,
        "sea_level": 1041.31,
        "grnd_level": 817.75,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.05,
        "deg": 342.502
      },
      "snow": {
        "3h": 0.0005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 12.46,
        "temp_min": 12.46,
        "temp_max": 12.46,
        "pressure": 817.67,
        "sea_level": 1042.25,
        "grnd_level": 817.67,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.81,
        "deg": 340.503
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.28,
        "temp_min": 13.28,
        "temp_max": 13.28,
        "pressure": 818.79,
        "sea_level": 1044.29,
        "grnd_level": 818.79,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13n"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 1.81,
        "deg": 338.5
      },
      "snow": {
        "3h": 0.0675
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.42,
        "temp_min": 19.42,
        "temp_max": 19.42,
        "pressure": 820.62,
        "sea_level": 1045.82,
        "grnd_level": 820.62,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.16,
        "deg": 275
      },
      "snow": {
        "3h": 0.0575
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 37.23,
        "temp_min": 37.23,
        "temp_max": 37.23,
        "pressure": 820.72,
        "sea_level": 1040.78,
        "grnd_level": 820.72,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 321.003
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 39.7,
        "temp_min": 39.7,
        "temp_max": 39.7,
        "pressure": 819.35,
        "sea_level": 1037.06,
        "grnd_level": 819.35,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.05,
        "deg": 312.003
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 32.02,
        "temp_min": 32.02,
        "temp_max": 32.02,
        "pressure": 819.89,
        "sea_level": 1039.55,
        "grnd_level": 819.89,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.64,
        "deg": 313.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 19.33,
        "temp_min": 19.33,
        "temp_max": 19.33,
        "pressure": 821.01,
        "sea_level": 1044.49,
        "grnd_level": 821.01,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 270.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 11.96,
        "temp_min": 11.96,
        "temp_max": 11.96,
        "pressure": 820.89,
        "sea_level": 1046.28,
        "grnd_level": 820.89,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.01,
        "deg": 224.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 10.41,
        "temp_min": 10.41,
        "temp_max": 10.41,
        "pressure": 820.86,
        "sea_level": 1047.31,
        "grnd_level": 820.86,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.69,
        "deg": 187.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 9.12,
        "temp_min": 9.12,
        "temp_max": 9.12,
        "pressure": 821.09,
        "sea_level": 1048.55,
        "grnd_level": 821.09,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 238.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 15.9,
        "temp_min": 15.9,
        "temp_max": 15.9,
        "pressure": 821.51,
        "sea_level": 1048.34,
        "grnd_level": 821.51,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 224.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 39.33,
        "temp_min": 39.33,
        "temp_max": 39.33,
        "pressure": 820.09,
        "sea_level": 1039.99,
        "grnd_level": 820.09,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.94,
        "deg": 161.006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 45.28,
        "temp_min": 45.28,
        "temp_max": 45.28,
        "pressure": 816.83,
        "sea_level": 1033.14,
        "grnd_level": 816.83,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.42,
        "deg": 172.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 35.14,
        "temp_min": 35.14,
        "temp_max": 35.14,
        "pressure": 815,
        "sea_level": 1032.86,
        "grnd_level": 815,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3,
        "deg": 163.51
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 21.54,
        "temp_min": 21.54,
        "temp_max": 21.54,
        "pressure": 814.15,
        "sea_level": 1034.26,
        "grnd_level": 814.15,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.56,
        "deg": 211.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 16.33,
        "temp_min": 16.33,
        "temp_max": 16.33,
        "pressure": 812.63,
        "sea_level": 1033.01,
        "grnd_level": 812.63,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.14,
        "deg": 214.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 14.64,
        "temp_min": 14.64,
        "temp_max": 14.64,
        "pressure": 811.25,
        "sea_level": 1031.35,
        "grnd_level": 811.25,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.85,
        "deg": 210.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 16.17,
        "temp_min": 16.17,
        "temp_max": 16.17,
        "pressure": 810.47,
        "sea_level": 1030.16,
        "grnd_level": 810.47,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.76,
        "deg": 224.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 22.98,
        "temp_min": 22.98,
        "temp_max": 22.98,
        "pressure": 811.07,
        "sea_level": 1029.5,
        "grnd_level": 811.07,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 233.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 51.26,
        "temp_min": 51.26,
        "temp_max": 51.26,
        "pressure": 811.2,
        "sea_level": 1024.3,
        "grnd_level": 811.2,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.37,
        "deg": 27.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 51.53,
        "temp_min": 51.53,
        "temp_max": 51.53,
        "pressure": 810.57,
        "sea_level": 1021.68,
        "grnd_level": 810.57,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.18,
        "deg": 43.5037
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 41.7,
        "temp_min": 41.7,
        "temp_max": 41.7,
        "pressure": 811.81,
        "sea_level": 1025.73,
        "grnd_level": 811.81,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 3.27,
        "deg": 56.0016
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 33.64,
        "temp_min": 33.64,
        "temp_max": 33.64,
        "pressure": 812.84,
        "sea_level": 1031.21,
        "grnd_level": 812.84,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 4,
        "deg": 79.0003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 29.58,
        "temp_min": 29.58,
        "temp_max": 29.58,
        "pressure": 812.68,
        "sea_level": 1033.18,
        "grnd_level": 812.68,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 4.38,
        "deg": 135.509
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.72,
        "sea_level": 1033.18,
        "grnd_level": 811.72,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.38,
        "deg": 212.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 18.4,
        "temp_min": 18.4,
        "temp_max": 18.4,
        "pressure": 811.37,
        "sea_level": 1033.22,
        "grnd_level": 811.37,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 239.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.76,
        "sea_level": 1032.37,
        "grnd_level": 811.76,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.83,
        "deg": 199.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 45.02,
        "temp_min": 45.02,
        "temp_max": 45.02,
        "pressure": 811.38,
        "sea_level": 1025.85,
        "grnd_level": 811.38,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.35,
        "deg": 4.00006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 7729501,
      "name": "Dove Valley",
      "coord": {
        "lat": 39.5777,
        "lon": -104.8294
      },
      "country": "US",
      "population": 5243
    }
  }
}, {
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
    "cod": "200",
    "message": 0.0052,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 47.71,
        "temp_min": 45.31,
        "temp_max": 47.71,
        "pressure": 813.51,
        "sea_level": 1025.45,
        "grnd_level": 813.51,
        "humidity": 33,
        "temp_kf": 1.34
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 9.98,
        "deg": 303.002
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 38.84,
        "temp_min": 37.04,
        "temp_max": 38.84,
        "pressure": 814.83,
        "sea_level": 1029.04,
        "grnd_level": 814.83,
        "humidity": 33,
        "temp_kf": 1
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.74,
        "deg": 324.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 25.84,
        "temp_min": 24.64,
        "temp_max": 25.84,
        "pressure": 816.74,
        "sea_level": 1035.02,
        "grnd_level": 816.74,
        "humidity": 48,
        "temp_kf": 0.67
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.74,
        "deg": 303.004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 17.56,
        "temp_min": 16.96,
        "temp_max": 17.56,
        "pressure": 816.84,
        "sea_level": 1037.66,
        "grnd_level": 816.84,
        "humidity": 64,
        "temp_kf": 0.33
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.59,
        "deg": 178.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 13.92,
        "temp_min": 13.92,
        "temp_max": 13.92,
        "pressure": 816.73,
        "sea_level": 1039.38,
        "grnd_level": 816.73,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.36,
        "deg": 141.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 12.25,
        "temp_min": 12.25,
        "temp_max": 12.25,
        "pressure": 817.52,
        "sea_level": 1041.98,
        "grnd_level": 817.52,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.14,
        "deg": 355
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 16.57,
        "temp_min": 16.57,
        "temp_max": 16.57,
        "pressure": 818.36,
        "sea_level": 1042.58,
        "grnd_level": 818.36,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.92,
        "deg": 6.5112
      },
      "snow": {
        "3h": 0.107
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 31.71,
        "temp_min": 31.71,
        "temp_max": 31.71,
        "pressure": 817.5,
        "sea_level": 1036.76,
        "grnd_level": 817.5,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.27,
        "deg": 33.5005
      },
      "snow": {
        "3h": 0.045
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 37.44,
        "temp_min": 37.44,
        "temp_max": 37.44,
        "pressure": 815.44,
        "sea_level": 1032.07,
        "grnd_level": 815.44,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 46.0007
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 30.61,
        "temp_min": 30.61,
        "temp_max": 30.61,
        "pressure": 815.83,
        "sea_level": 1034.2,
        "grnd_level": 815.83,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.4,
        "deg": 46.5049
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 817.42,
        "sea_level": 1039.36,
        "grnd_level": 817.42,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 66.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 13.65,
        "temp_min": 13.65,
        "temp_max": 13.65,
        "pressure": 817.75,
        "sea_level": 1041.31,
        "grnd_level": 817.75,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.05,
        "deg": 342.502
      },
      "snow": {
        "3h": 0.0005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 12.46,
        "temp_min": 12.46,
        "temp_max": 12.46,
        "pressure": 817.67,
        "sea_level": 1042.25,
        "grnd_level": 817.67,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 1.81,
        "deg": 340.503
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.28,
        "temp_min": 13.28,
        "temp_max": 13.28,
        "pressure": 818.79,
        "sea_level": 1044.29,
        "grnd_level": 818.79,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13n"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 1.81,
        "deg": 338.5
      },
      "snow": {
        "3h": 0.0675
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.42,
        "temp_min": 19.42,
        "temp_max": 19.42,
        "pressure": 820.62,
        "sea_level": 1045.82,
        "grnd_level": 820.62,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.16,
        "deg": 275
      },
      "snow": {
        "3h": 0.0575
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 37.23,
        "temp_min": 37.23,
        "temp_max": 37.23,
        "pressure": 820.72,
        "sea_level": 1040.78,
        "grnd_level": 820.72,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 321.003
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 39.7,
        "temp_min": 39.7,
        "temp_max": 39.7,
        "pressure": 819.35,
        "sea_level": 1037.06,
        "grnd_level": 819.35,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.05,
        "deg": 312.003
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 32.02,
        "temp_min": 32.02,
        "temp_max": 32.02,
        "pressure": 819.89,
        "sea_level": 1039.55,
        "grnd_level": 819.89,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.64,
        "deg": 313.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 19.33,
        "temp_min": 19.33,
        "temp_max": 19.33,
        "pressure": 821.01,
        "sea_level": 1044.49,
        "grnd_level": 821.01,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 270.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 11.96,
        "temp_min": 11.96,
        "temp_max": 11.96,
        "pressure": 820.89,
        "sea_level": 1046.28,
        "grnd_level": 820.89,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.01,
        "deg": 224.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 10.41,
        "temp_min": 10.41,
        "temp_max": 10.41,
        "pressure": 820.86,
        "sea_level": 1047.31,
        "grnd_level": 820.86,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.69,
        "deg": 187.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 9.12,
        "temp_min": 9.12,
        "temp_max": 9.12,
        "pressure": 821.09,
        "sea_level": 1048.55,
        "grnd_level": 821.09,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 238.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 15.9,
        "temp_min": 15.9,
        "temp_max": 15.9,
        "pressure": 821.51,
        "sea_level": 1048.34,
        "grnd_level": 821.51,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 224.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 39.33,
        "temp_min": 39.33,
        "temp_max": 39.33,
        "pressure": 820.09,
        "sea_level": 1039.99,
        "grnd_level": 820.09,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.94,
        "deg": 161.006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 45.28,
        "temp_min": 45.28,
        "temp_max": 45.28,
        "pressure": 816.83,
        "sea_level": 1033.14,
        "grnd_level": 816.83,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.42,
        "deg": 172.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 35.14,
        "temp_min": 35.14,
        "temp_max": 35.14,
        "pressure": 815,
        "sea_level": 1032.86,
        "grnd_level": 815,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3,
        "deg": 163.51
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 21.54,
        "temp_min": 21.54,
        "temp_max": 21.54,
        "pressure": 814.15,
        "sea_level": 1034.26,
        "grnd_level": 814.15,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.56,
        "deg": 211.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 16.33,
        "temp_min": 16.33,
        "temp_max": 16.33,
        "pressure": 812.63,
        "sea_level": 1033.01,
        "grnd_level": 812.63,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.14,
        "deg": 214.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 14.64,
        "temp_min": 14.64,
        "temp_max": 14.64,
        "pressure": 811.25,
        "sea_level": 1031.35,
        "grnd_level": 811.25,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.85,
        "deg": 210.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 16.17,
        "temp_min": 16.17,
        "temp_max": 16.17,
        "pressure": 810.47,
        "sea_level": 1030.16,
        "grnd_level": 810.47,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.76,
        "deg": 224.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 22.98,
        "temp_min": 22.98,
        "temp_max": 22.98,
        "pressure": 811.07,
        "sea_level": 1029.5,
        "grnd_level": 811.07,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 233.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 51.26,
        "temp_min": 51.26,
        "temp_max": 51.26,
        "pressure": 811.2,
        "sea_level": 1024.3,
        "grnd_level": 811.2,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.37,
        "deg": 27.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 51.53,
        "temp_min": 51.53,
        "temp_max": 51.53,
        "pressure": 810.57,
        "sea_level": 1021.68,
        "grnd_level": 810.57,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.18,
        "deg": 43.5037
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 41.7,
        "temp_min": 41.7,
        "temp_max": 41.7,
        "pressure": 811.81,
        "sea_level": 1025.73,
        "grnd_level": 811.81,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 3.27,
        "deg": 56.0016
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 33.64,
        "temp_min": 33.64,
        "temp_max": 33.64,
        "pressure": 812.84,
        "sea_level": 1031.21,
        "grnd_level": 812.84,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 88
      },
      "wind": {
        "speed": 4,
        "deg": 79.0003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 29.58,
        "temp_min": 29.58,
        "temp_max": 29.58,
        "pressure": 812.68,
        "sea_level": 1033.18,
        "grnd_level": 812.68,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 4.38,
        "deg": 135.509
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.72,
        "sea_level": 1033.18,
        "grnd_level": 811.72,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.38,
        "deg": 212.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 18.4,
        "temp_min": 18.4,
        "temp_max": 18.4,
        "pressure": 811.37,
        "sea_level": 1033.22,
        "grnd_level": 811.37,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.85,
        "deg": 239.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 22.18,
        "temp_min": 22.18,
        "temp_max": 22.18,
        "pressure": 811.76,
        "sea_level": 1032.37,
        "grnd_level": 811.76,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.83,
        "deg": 199.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 45.02,
        "temp_min": 45.02,
        "temp_max": 45.02,
        "pressure": 811.38,
        "sea_level": 1025.85,
        "grnd_level": 811.38,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.35,
        "deg": 4.00006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 5427207,
      "name": "Ken Caryl",
      "coord": {
        "lat": 39.5773,
        "lon": -105.1169
      },
      "country": "US",
      "population": 32438
    }
  }
}, {
  "type": "element",
  "name": "result",
  "attributes": {
    "agencyIcon": "",
    "agencyName": "",
    "availabilityStatus": "N",
    "contractID": "CO",
    "contractType": "STATE",
    "facilityID": "50025",
    "facilityName": "Golden Gate Canyon State Park",
    "faciltyPhoto": "/webphotos/CO/pid50025/0/80x53.jpg",
    "favorite": "N",
    "latitude": "39.8313",
    "listingOnly": "N",
    "longitude": "-105.4104667",
    "regionName": "",
    "reservationChannel": "",
    "shortName": "GOGA",
    "sitesWithAmps": "Y",
    "sitesWithPetsAllowed": "Y",
    "sitesWithSewerHookup": "N",
    "sitesWithWaterHookup": "N",
    "sitesWithWaterfront": "",
    "state": "CO"
  },
  "forecast": {
    "cod": "200",
    "message": 0.0049,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 45.05,
        "temp_min": 28.79,
        "temp_max": 45.05,
        "pressure": 717.46,
        "sea_level": 1025.13,
        "grnd_level": 717.46,
        "humidity": 43,
        "temp_kf": 9.03
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.4,
        "deg": 281.502
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 35.46,
        "temp_min": 23.27,
        "temp_max": 35.46,
        "pressure": 718.61,
        "sea_level": 1028.87,
        "grnd_level": 718.61,
        "humidity": 46,
        "temp_kf": 6.78
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.84,
        "deg": 281.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 24.89,
        "temp_min": 16.76,
        "temp_max": 24.89,
        "pressure": 719.87,
        "sea_level": 1034.82,
        "grnd_level": 719.87,
        "humidity": 54,
        "temp_kf": 4.52
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.63,
        "deg": 266.004
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 16.3,
        "temp_min": 12.23,
        "temp_max": 16.3,
        "pressure": 719.57,
        "sea_level": 1037.17,
        "grnd_level": 719.57,
        "humidity": 61,
        "temp_kf": 2.26
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.94,
        "deg": 252.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 12.7,
        "temp_min": 12.7,
        "temp_max": 12.7,
        "pressure": 719.46,
        "sea_level": 1039.14,
        "grnd_level": 719.46,
        "humidity": 60,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 260.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 13.02,
        "temp_min": 13.02,
        "temp_max": 13.02,
        "pressure": 719.36,
        "sea_level": 1041.41,
        "grnd_level": 719.36,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.7,
        "deg": 262.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 16.44,
        "temp_min": 16.44,
        "temp_max": 16.44,
        "pressure": 719.71,
        "sea_level": 1041.81,
        "grnd_level": 719.71,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 271.011
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 29.51,
        "temp_min": 29.51,
        "temp_max": 29.51,
        "pressure": 719.25,
        "sea_level": 1035.22,
        "grnd_level": 719.25,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 275
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 30.42,
        "temp_min": 30.42,
        "temp_max": 30.42,
        "pressure": 717.93,
        "sea_level": 1030.65,
        "grnd_level": 717.93,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.51,
        "deg": 274.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 23.45,
        "temp_min": 23.45,
        "temp_max": 23.45,
        "pressure": 718.56,
        "sea_level": 1033.35,
        "grnd_level": 718.56,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.95,
        "deg": 274.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 16.06,
        "temp_min": 16.06,
        "temp_max": 16.06,
        "pressure": 719.66,
        "sea_level": 1038.79,
        "grnd_level": 719.66,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 283.001
      },
      "snow": {
        "3h": 0.0005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 11.85,
        "temp_min": 11.85,
        "temp_max": 11.85,
        "pressure": 719.67,
        "sea_level": 1040.9,
        "grnd_level": 719.67,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.52,
        "deg": 290.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 10.07,
        "temp_min": 10.07,
        "temp_max": 10.07,
        "pressure": 719.59,
        "sea_level": 1042.33,
        "grnd_level": 719.59,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.38,
        "deg": 296.003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 8.96,
        "temp_min": 8.96,
        "temp_max": 8.96,
        "pressure": 720.39,
        "sea_level": 1044.65,
        "grnd_level": 720.39,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.27,
        "deg": 297.5
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 11.45,
        "temp_min": 11.45,
        "temp_max": 11.45,
        "pressure": 721.65,
        "sea_level": 1046.38,
        "grnd_level": 721.65,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 297.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 21.93,
        "temp_min": 21.93,
        "temp_max": 21.93,
        "pressure": 722.32,
        "sea_level": 1040.58,
        "grnd_level": 722.32,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.73,
        "deg": 303.003
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 24.53,
        "temp_min": 24.53,
        "temp_max": 24.53,
        "pressure": 721.84,
        "sea_level": 1036.94,
        "grnd_level": 721.84,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.26,
        "deg": 298.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 19.24,
        "temp_min": 19.24,
        "temp_max": 19.24,
        "pressure": 722.54,
        "sea_level": 1039.84,
        "grnd_level": 722.54,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.64,
        "deg": 293.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 9.7,
        "temp_min": 9.7,
        "temp_max": 9.7,
        "pressure": 723.25,
        "sea_level": 1045.02,
        "grnd_level": 723.25,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 271.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 0.57,
        "temp_min": 0.57,
        "temp_max": 0.57,
        "pressure": 723.29,
        "sea_level": 1047.3,
        "grnd_level": 723.29,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.68,
        "deg": 267.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": -2.91,
        "temp_min": -2.91,
        "temp_max": -2.91,
        "pressure": 723.11,
        "sea_level": 1048.44,
        "grnd_level": 723.11,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.91,
        "deg": 268.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": -4.93,
        "temp_min": -4.93,
        "temp_max": -4.93,
        "pressure": 722.93,
        "sea_level": 1049.56,
        "grnd_level": 722.93,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.27,
        "deg": 274.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 0.65,
        "temp_min": 0.65,
        "temp_max": 0.65,
        "pressure": 723.35,
        "sea_level": 1049.35,
        "grnd_level": 723.35,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.28,
        "deg": 271.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 29.39,
        "temp_min": 29.39,
        "temp_max": 29.39,
        "pressure": 722.73,
        "sea_level": 1040.15,
        "grnd_level": 722.73,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.92,
        "deg": 256.006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 35.38,
        "temp_min": 35.38,
        "temp_max": 35.38,
        "pressure": 720.86,
        "sea_level": 1033.06,
        "grnd_level": 720.86,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 260.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 26.32,
        "temp_min": 26.32,
        "temp_max": 26.32,
        "pressure": 720,
        "sea_level": 1033.34,
        "grnd_level": 720,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.01,
        "deg": 271.01
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 17.54,
        "temp_min": 17.54,
        "temp_max": 17.54,
        "pressure": 719.15,
        "sea_level": 1034.99,
        "grnd_level": 719.15,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.12,
        "deg": 260
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 18.08,
        "temp_min": 18.08,
        "temp_max": 18.08,
        "pressure": 717.79,
        "sea_level": 1033.9,
        "grnd_level": 717.79,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.88,
        "deg": 260.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 22.61,
        "temp_min": 22.61,
        "temp_max": 22.61,
        "pressure": 716.33,
        "sea_level": 1032.2,
        "grnd_level": 716.33,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.31,
        "deg": 261.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 24.85,
        "temp_min": 24.85,
        "temp_max": 24.85,
        "pressure": 715.3,
        "sea_level": 1030.89,
        "grnd_level": 715.3,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.86,
        "deg": 267.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 27.57,
        "temp_min": 27.57,
        "temp_max": 27.57,
        "pressure": 715.58,
        "sea_level": 1029.99,
        "grnd_level": 715.58,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.32,
        "deg": 270.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 36.14,
        "temp_min": 36.14,
        "temp_max": 36.14,
        "pressure": 716.12,
        "sea_level": 1024.3,
        "grnd_level": 716.12,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.63,
        "deg": 275.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 36.91,
        "temp_min": 36.91,
        "temp_max": 36.91,
        "pressure": 715.89,
        "sea_level": 1021.6,
        "grnd_level": 715.89,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.98,
        "deg": 270.004
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 29.73,
        "temp_min": 29.73,
        "temp_max": 29.73,
        "pressure": 716.8,
        "sea_level": 1025.81,
        "grnd_level": 716.8,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 5.84,
        "deg": 264.502
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 25.14,
        "temp_min": 25.14,
        "temp_max": 25.14,
        "pressure": 717.03,
        "sea_level": 1031.3,
        "grnd_level": 717.03,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 4.79,
        "deg": 255
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 21.88,
        "temp_min": 21.88,
        "temp_max": 21.88,
        "pressure": 716.62,
        "sea_level": 1033.3,
        "grnd_level": 716.62,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 255.509
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 19.84,
        "temp_min": 19.84,
        "temp_max": 19.84,
        "pressure": 715.74,
        "sea_level": 1033.59,
        "grnd_level": 715.74,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.13,
        "deg": 253.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 20.47,
        "temp_min": 20.47,
        "temp_max": 20.47,
        "pressure": 715.24,
        "sea_level": 1033.63,
        "grnd_level": 715.24,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.76,
        "deg": 259.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 22.9,
        "temp_min": 22.9,
        "temp_max": 22.9,
        "pressure": 715.21,
        "sea_level": 1032.73,
        "grnd_level": 715.21,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.2,
        "deg": 262.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 31.88,
        "temp_min": 31.88,
        "temp_max": 31.88,
        "pressure": 715.33,
        "sea_level": 1025.65,
        "grnd_level": 715.33,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.71,
        "deg": 269.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 5417342,
      "name": "Coal Creek",
      "coord": {
        "lat": 39.9064,
        "lon": -105.3775
      },
      "country": "US",
      "population": 2400
    }
  }
}, {
  "type": "element",
  "name": "result",
  "attributes": {
    "agencyIcon": "",
    "agencyName": "",
    "availabilityStatus": "N",
    "contractID": "CO",
    "contractType": "STATE",
    "facilityID": "56101",
    "facilityName": "Staunton State Park",
    "faciltyPhoto": "/webphotos/CO/pid56101/0/80x53.jpg",
    "favorite": "N",
    "latitude": "39.4969",
    "listingOnly": "N",
    "longitude": "-105.382",
    "regionName": "",
    "reservationChannel": "",
    "shortName": "A101",
    "sitesWithAmps": "N",
    "sitesWithPetsAllowed": "Y",
    "sitesWithSewerHookup": "N",
    "sitesWithWaterHookup": "N",
    "sitesWithWaterfront": "",
    "state": "CO"
  },
  "forecast": {
    "cod": "200",
    "message": 0.0042,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 37.09,
        "temp_min": 28.79,
        "temp_max": 37.09,
        "pressure": 717.46,
        "sea_level": 1025.13,
        "grnd_level": 717.46,
        "humidity": 43,
        "temp_kf": 4.62
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.4,
        "deg": 281.502
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 29.5,
        "temp_min": 23.27,
        "temp_max": 29.5,
        "pressure": 718.61,
        "sea_level": 1028.87,
        "grnd_level": 718.61,
        "humidity": 46,
        "temp_kf": 3.46
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.84,
        "deg": 281.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 20.91,
        "temp_min": 16.76,
        "temp_max": 20.91,
        "pressure": 719.87,
        "sea_level": 1034.82,
        "grnd_level": 719.87,
        "humidity": 54,
        "temp_kf": 2.31
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.63,
        "deg": 266.004
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 14.31,
        "temp_min": 12.23,
        "temp_max": 14.31,
        "pressure": 719.57,
        "sea_level": 1037.17,
        "grnd_level": 719.57,
        "humidity": 61,
        "temp_kf": 1.15
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.94,
        "deg": 252.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 12.7,
        "temp_min": 12.7,
        "temp_max": 12.7,
        "pressure": 719.46,
        "sea_level": 1039.14,
        "grnd_level": 719.46,
        "humidity": 60,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 260.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 13.02,
        "temp_min": 13.02,
        "temp_max": 13.02,
        "pressure": 719.36,
        "sea_level": 1041.41,
        "grnd_level": 719.36,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.7,
        "deg": 262.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 16.44,
        "temp_min": 16.44,
        "temp_max": 16.44,
        "pressure": 719.71,
        "sea_level": 1041.81,
        "grnd_level": 719.71,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 271.011
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 29.51,
        "temp_min": 29.51,
        "temp_max": 29.51,
        "pressure": 719.25,
        "sea_level": 1035.22,
        "grnd_level": 719.25,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 275
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 30.42,
        "temp_min": 30.42,
        "temp_max": 30.42,
        "pressure": 717.93,
        "sea_level": 1030.65,
        "grnd_level": 717.93,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.51,
        "deg": 274.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 23.45,
        "temp_min": 23.45,
        "temp_max": 23.45,
        "pressure": 718.56,
        "sea_level": 1033.35,
        "grnd_level": 718.56,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.95,
        "deg": 274.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 16.06,
        "temp_min": 16.06,
        "temp_max": 16.06,
        "pressure": 719.66,
        "sea_level": 1038.79,
        "grnd_level": 719.66,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 283.001
      },
      "snow": {
        "3h": 0.0005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 11.85,
        "temp_min": 11.85,
        "temp_max": 11.85,
        "pressure": 719.67,
        "sea_level": 1040.9,
        "grnd_level": 719.67,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.52,
        "deg": 290.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 10.07,
        "temp_min": 10.07,
        "temp_max": 10.07,
        "pressure": 719.59,
        "sea_level": 1042.33,
        "grnd_level": 719.59,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.38,
        "deg": 296.003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 8.96,
        "temp_min": 8.96,
        "temp_max": 8.96,
        "pressure": 720.39,
        "sea_level": 1044.65,
        "grnd_level": 720.39,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.27,
        "deg": 297.5
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 11.45,
        "temp_min": 11.45,
        "temp_max": 11.45,
        "pressure": 721.65,
        "sea_level": 1046.38,
        "grnd_level": 721.65,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 297.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 21.93,
        "temp_min": 21.93,
        "temp_max": 21.93,
        "pressure": 722.32,
        "sea_level": 1040.58,
        "grnd_level": 722.32,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.73,
        "deg": 303.003
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 24.53,
        "temp_min": 24.53,
        "temp_max": 24.53,
        "pressure": 721.84,
        "sea_level": 1036.94,
        "grnd_level": 721.84,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.26,
        "deg": 298.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 19.24,
        "temp_min": 19.24,
        "temp_max": 19.24,
        "pressure": 722.54,
        "sea_level": 1039.84,
        "grnd_level": 722.54,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.64,
        "deg": 293.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 9.7,
        "temp_min": 9.7,
        "temp_max": 9.7,
        "pressure": 723.25,
        "sea_level": 1045.02,
        "grnd_level": 723.25,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 271.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 0.57,
        "temp_min": 0.57,
        "temp_max": 0.57,
        "pressure": 723.29,
        "sea_level": 1047.3,
        "grnd_level": 723.29,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.68,
        "deg": 267.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": -2.91,
        "temp_min": -2.91,
        "temp_max": -2.91,
        "pressure": 723.11,
        "sea_level": 1048.44,
        "grnd_level": 723.11,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.91,
        "deg": 268.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": -4.93,
        "temp_min": -4.93,
        "temp_max": -4.93,
        "pressure": 722.93,
        "sea_level": 1049.56,
        "grnd_level": 722.93,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.27,
        "deg": 274.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 0.65,
        "temp_min": 0.65,
        "temp_max": 0.65,
        "pressure": 723.35,
        "sea_level": 1049.35,
        "grnd_level": 723.35,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.28,
        "deg": 271.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 29.39,
        "temp_min": 29.39,
        "temp_max": 29.39,
        "pressure": 722.73,
        "sea_level": 1040.15,
        "grnd_level": 722.73,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.92,
        "deg": 256.006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 35.38,
        "temp_min": 35.38,
        "temp_max": 35.38,
        "pressure": 720.86,
        "sea_level": 1033.06,
        "grnd_level": 720.86,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 260.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 26.32,
        "temp_min": 26.32,
        "temp_max": 26.32,
        "pressure": 720,
        "sea_level": 1033.34,
        "grnd_level": 720,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.01,
        "deg": 271.01
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 17.54,
        "temp_min": 17.54,
        "temp_max": 17.54,
        "pressure": 719.15,
        "sea_level": 1034.99,
        "grnd_level": 719.15,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.12,
        "deg": 260
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 18.08,
        "temp_min": 18.08,
        "temp_max": 18.08,
        "pressure": 717.79,
        "sea_level": 1033.9,
        "grnd_level": 717.79,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.88,
        "deg": 260.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 22.61,
        "temp_min": 22.61,
        "temp_max": 22.61,
        "pressure": 716.33,
        "sea_level": 1032.2,
        "grnd_level": 716.33,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.31,
        "deg": 261.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 24.85,
        "temp_min": 24.85,
        "temp_max": 24.85,
        "pressure": 715.3,
        "sea_level": 1030.89,
        "grnd_level": 715.3,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.86,
        "deg": 267.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 27.57,
        "temp_min": 27.57,
        "temp_max": 27.57,
        "pressure": 715.58,
        "sea_level": 1029.99,
        "grnd_level": 715.58,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.32,
        "deg": 270.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 36.14,
        "temp_min": 36.14,
        "temp_max": 36.14,
        "pressure": 716.12,
        "sea_level": 1024.3,
        "grnd_level": 716.12,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.63,
        "deg": 275.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 36.91,
        "temp_min": 36.91,
        "temp_max": 36.91,
        "pressure": 715.89,
        "sea_level": 1021.6,
        "grnd_level": 715.89,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.98,
        "deg": 270.004
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 29.73,
        "temp_min": 29.73,
        "temp_max": 29.73,
        "pressure": 716.8,
        "sea_level": 1025.81,
        "grnd_level": 716.8,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 5.84,
        "deg": 264.502
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 25.14,
        "temp_min": 25.14,
        "temp_max": 25.14,
        "pressure": 717.03,
        "sea_level": 1031.3,
        "grnd_level": 717.03,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 4.79,
        "deg": 255
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 21.88,
        "temp_min": 21.88,
        "temp_max": 21.88,
        "pressure": 716.62,
        "sea_level": 1033.3,
        "grnd_level": 716.62,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 255.509
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 19.84,
        "temp_min": 19.84,
        "temp_max": 19.84,
        "pressure": 715.74,
        "sea_level": 1033.59,
        "grnd_level": 715.74,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.13,
        "deg": 253.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 20.47,
        "temp_min": 20.47,
        "temp_max": 20.47,
        "pressure": 715.24,
        "sea_level": 1033.63,
        "grnd_level": 715.24,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.76,
        "deg": 259.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 22.9,
        "temp_min": 22.9,
        "temp_max": 22.9,
        "pressure": 715.21,
        "sea_level": 1032.73,
        "grnd_level": 715.21,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.2,
        "deg": 262.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 31.88,
        "temp_min": 31.88,
        "temp_max": 31.88,
        "pressure": 715.33,
        "sea_level": 1025.65,
        "grnd_level": 715.33,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.71,
        "deg": 269.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 5424440,
      "name": "Harris Park",
      "coord": {
        "lat": 39.5117,
        "lon": -105.4912
      },
      "country": "US"
    }
  }
}, {
  "type": "element",
  "name": "result",
  "attributes": {
    "agencyIcon": "",
    "agencyName": "",
    "availabilityStatus": "Y",
    "contractID": "KOAI",
    "contractType": "PRIVATE",
    "facilityID": "730238",
    "facilityName": "Denver West / Central City KOA",
    "faciltyPhoto": "/webphotos/KOAI/pid730238/0/80x53.jpg",
    "favorite": "N",
    "latitude": "39.7916056",
    "listingOnly": "Y",
    "longitude": "-105.5107583",
    "regionName": "",
    "reservationChannel": "Web Reservable",
    "shortName": "K0138",
    "sitesWithAmps": "N",
    "sitesWithPetsAllowed": "N",
    "sitesWithSewerHookup": "N",
    "sitesWithWaterHookup": "N",
    "sitesWithWaterfront": "",
    "state": "CO"
  },
  "forecast": {
    "cod": "200",
    "message": 0.005,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 38.97,
        "temp_min": 28.79,
        "temp_max": 38.97,
        "pressure": 717.46,
        "sea_level": 1025.13,
        "grnd_level": 717.46,
        "humidity": 43,
        "temp_kf": 5.66
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.4,
        "deg": 281.502
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 30.9,
        "temp_min": 23.27,
        "temp_max": 30.9,
        "pressure": 718.61,
        "sea_level": 1028.87,
        "grnd_level": 718.61,
        "humidity": 46,
        "temp_kf": 4.24
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.84,
        "deg": 281.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 21.85,
        "temp_min": 16.76,
        "temp_max": 21.85,
        "pressure": 719.87,
        "sea_level": 1034.82,
        "grnd_level": 719.87,
        "humidity": 54,
        "temp_kf": 2.83
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.63,
        "deg": 266.004
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 14.77,
        "temp_min": 12.23,
        "temp_max": 14.77,
        "pressure": 719.57,
        "sea_level": 1037.17,
        "grnd_level": 719.57,
        "humidity": 61,
        "temp_kf": 1.41
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.94,
        "deg": 252.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 12.7,
        "temp_min": 12.7,
        "temp_max": 12.7,
        "pressure": 719.46,
        "sea_level": 1039.14,
        "grnd_level": 719.46,
        "humidity": 60,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 260.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 13.02,
        "temp_min": 13.02,
        "temp_max": 13.02,
        "pressure": 719.36,
        "sea_level": 1041.41,
        "grnd_level": 719.36,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.7,
        "deg": 262.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 16.44,
        "temp_min": 16.44,
        "temp_max": 16.44,
        "pressure": 719.71,
        "sea_level": 1041.81,
        "grnd_level": 719.71,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 271.011
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 29.51,
        "temp_min": 29.51,
        "temp_max": 29.51,
        "pressure": 719.25,
        "sea_level": 1035.22,
        "grnd_level": 719.25,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 275
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 30.42,
        "temp_min": 30.42,
        "temp_max": 30.42,
        "pressure": 717.93,
        "sea_level": 1030.65,
        "grnd_level": 717.93,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.51,
        "deg": 274.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 23.45,
        "temp_min": 23.45,
        "temp_max": 23.45,
        "pressure": 718.56,
        "sea_level": 1033.35,
        "grnd_level": 718.56,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.95,
        "deg": 274.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 16.06,
        "temp_min": 16.06,
        "temp_max": 16.06,
        "pressure": 719.66,
        "sea_level": 1038.79,
        "grnd_level": 719.66,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 283.001
      },
      "snow": {
        "3h": 0.0005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 11.85,
        "temp_min": 11.85,
        "temp_max": 11.85,
        "pressure": 719.67,
        "sea_level": 1040.9,
        "grnd_level": 719.67,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.52,
        "deg": 290.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 10.07,
        "temp_min": 10.07,
        "temp_max": 10.07,
        "pressure": 719.59,
        "sea_level": 1042.33,
        "grnd_level": 719.59,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.38,
        "deg": 296.003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 8.96,
        "temp_min": 8.96,
        "temp_max": 8.96,
        "pressure": 720.39,
        "sea_level": 1044.65,
        "grnd_level": 720.39,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.27,
        "deg": 297.5
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 11.45,
        "temp_min": 11.45,
        "temp_max": 11.45,
        "pressure": 721.65,
        "sea_level": 1046.38,
        "grnd_level": 721.65,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 297.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 21.93,
        "temp_min": 21.93,
        "temp_max": 21.93,
        "pressure": 722.32,
        "sea_level": 1040.58,
        "grnd_level": 722.32,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.73,
        "deg": 303.003
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 24.53,
        "temp_min": 24.53,
        "temp_max": 24.53,
        "pressure": 721.84,
        "sea_level": 1036.94,
        "grnd_level": 721.84,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.26,
        "deg": 298.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 19.24,
        "temp_min": 19.24,
        "temp_max": 19.24,
        "pressure": 722.54,
        "sea_level": 1039.84,
        "grnd_level": 722.54,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.64,
        "deg": 293.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 9.7,
        "temp_min": 9.7,
        "temp_max": 9.7,
        "pressure": 723.25,
        "sea_level": 1045.02,
        "grnd_level": 723.25,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 271.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 0.57,
        "temp_min": 0.57,
        "temp_max": 0.57,
        "pressure": 723.29,
        "sea_level": 1047.3,
        "grnd_level": 723.29,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.68,
        "deg": 267.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": -2.91,
        "temp_min": -2.91,
        "temp_max": -2.91,
        "pressure": 723.11,
        "sea_level": 1048.44,
        "grnd_level": 723.11,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.91,
        "deg": 268.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": -4.93,
        "temp_min": -4.93,
        "temp_max": -4.93,
        "pressure": 722.93,
        "sea_level": 1049.56,
        "grnd_level": 722.93,
        "humidity": 48,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.27,
        "deg": 274.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 0.65,
        "temp_min": 0.65,
        "temp_max": 0.65,
        "pressure": 723.35,
        "sea_level": 1049.35,
        "grnd_level": 723.35,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.28,
        "deg": 271.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 29.39,
        "temp_min": 29.39,
        "temp_max": 29.39,
        "pressure": 722.73,
        "sea_level": 1040.15,
        "grnd_level": 722.73,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.92,
        "deg": 256.006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 35.38,
        "temp_min": 35.38,
        "temp_max": 35.38,
        "pressure": 720.86,
        "sea_level": 1033.06,
        "grnd_level": 720.86,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 260.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 26.32,
        "temp_min": 26.32,
        "temp_max": 26.32,
        "pressure": 720,
        "sea_level": 1033.34,
        "grnd_level": 720,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.01,
        "deg": 271.01
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 17.54,
        "temp_min": 17.54,
        "temp_max": 17.54,
        "pressure": 719.15,
        "sea_level": 1034.99,
        "grnd_level": 719.15,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.12,
        "deg": 260
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 18.08,
        "temp_min": 18.08,
        "temp_max": 18.08,
        "pressure": 717.79,
        "sea_level": 1033.9,
        "grnd_level": 717.79,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.88,
        "deg": 260.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 22.61,
        "temp_min": 22.61,
        "temp_max": 22.61,
        "pressure": 716.33,
        "sea_level": 1032.2,
        "grnd_level": 716.33,
        "humidity": 30,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.31,
        "deg": 261.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 24.85,
        "temp_min": 24.85,
        "temp_max": 24.85,
        "pressure": 715.3,
        "sea_level": 1030.89,
        "grnd_level": 715.3,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.86,
        "deg": 267.005
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 27.57,
        "temp_min": 27.57,
        "temp_max": 27.57,
        "pressure": 715.58,
        "sea_level": 1029.99,
        "grnd_level": 715.58,
        "humidity": 27,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.32,
        "deg": 270.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 36.14,
        "temp_min": 36.14,
        "temp_max": 36.14,
        "pressure": 716.12,
        "sea_level": 1024.3,
        "grnd_level": 716.12,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.63,
        "deg": 275.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 36.91,
        "temp_min": 36.91,
        "temp_max": 36.91,
        "pressure": 715.89,
        "sea_level": 1021.6,
        "grnd_level": 715.89,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.98,
        "deg": 270.004
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 29.73,
        "temp_min": 29.73,
        "temp_max": 29.73,
        "pressure": 716.8,
        "sea_level": 1025.81,
        "grnd_level": 716.8,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 5.84,
        "deg": 264.502
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 25.14,
        "temp_min": 25.14,
        "temp_max": 25.14,
        "pressure": 717.03,
        "sea_level": 1031.3,
        "grnd_level": 717.03,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 4.79,
        "deg": 255
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 21.88,
        "temp_min": 21.88,
        "temp_max": 21.88,
        "pressure": 716.62,
        "sea_level": 1033.3,
        "grnd_level": 716.62,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 255.509
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 19.84,
        "temp_min": 19.84,
        "temp_max": 19.84,
        "pressure": 715.74,
        "sea_level": 1033.59,
        "grnd_level": 715.74,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.13,
        "deg": 253.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 20.47,
        "temp_min": 20.47,
        "temp_max": 20.47,
        "pressure": 715.24,
        "sea_level": 1033.63,
        "grnd_level": 715.24,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.76,
        "deg": 259.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 22.9,
        "temp_min": 22.9,
        "temp_max": 22.9,
        "pressure": 715.21,
        "sea_level": 1032.73,
        "grnd_level": 715.21,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.2,
        "deg": 262.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 31.88,
        "temp_min": 31.88,
        "temp_max": 31.88,
        "pressure": 715.33,
        "sea_level": 1025.65,
        "grnd_level": 715.33,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.71,
        "deg": 269.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 5416606,
      "name": "Central City",
      "coord": {
        "lat": 39.8019,
        "lon": -105.5142
      },
      "country": "US",
      "population": 1000
    }
  }
}, {
  "type": "element",
  "name": "result",
  "attributes": {
    "agencyIcon": "",
    "agencyName": "",
    "availabilityStatus": "N",
    "contractID": "CO",
    "contractType": "STATE",
    "facilityID": "50020",
    "facilityName": "St Vrain State Park",
    "faciltyPhoto": "/webphotos/CO/pid50020/0/80x53.jpg",
    "favorite": "N",
    "latitude": "40.1697222",
    "listingOnly": "N",
    "longitude": "-104.9877778",
    "regionName": "",
    "reservationChannel": "",
    "shortName": "STVR",
    "sitesWithAmps": "Y",
    "sitesWithPetsAllowed": "Y",
    "sitesWithSewerHookup": "Y",
    "sitesWithWaterHookup": "Y",
    "sitesWithWaterfront": "Lakefront",
    "state": "CO"
  },
  "forecast": {
    "cod": "200",
    "message": 0.0043,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 49.93,
        "temp_min": 46.88,
        "temp_max": 49.93,
        "pressure": 844.07,
        "sea_level": 1026.87,
        "grnd_level": 844.07,
        "humidity": 38,
        "temp_kf": 1.69
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 13,
        "deg": 294.502
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 40.41,
        "temp_min": 38.12,
        "temp_max": 40.41,
        "pressure": 845.63,
        "sea_level": 1030.58,
        "grnd_level": 845.63,
        "humidity": 36,
        "temp_kf": 1.27
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.41,
        "deg": 296.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 28.42,
        "temp_min": 26.89,
        "temp_max": 28.42,
        "pressure": 846.97,
        "sea_level": 1035.59,
        "grnd_level": 846.97,
        "humidity": 45,
        "temp_kf": 0.85
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.75,
        "deg": 291.004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 21.33,
        "temp_min": 20.56,
        "temp_max": 21.33,
        "pressure": 847.24,
        "sea_level": 1038.11,
        "grnd_level": 847.24,
        "humidity": 61,
        "temp_kf": 0.42
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.04,
        "deg": 140.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 16.35,
        "temp_min": 16.35,
        "temp_max": 16.35,
        "pressure": 848.26,
        "sea_level": 1040.72,
        "grnd_level": 848.26,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 23.0006
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 12.97,
        "temp_min": 12.97,
        "temp_max": 12.97,
        "pressure": 849.54,
        "sea_level": 1043.27,
        "grnd_level": 849.54,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.91,
        "deg": 15.0004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 19,
        "temp_min": 19,
        "temp_max": 19,
        "pressure": 850.21,
        "sea_level": 1043.6,
        "grnd_level": 850.21,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 2.82,
        "deg": 49.0112
      },
      "snow": {
        "3h": 0.12
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 26.4,
        "temp_min": 26.4,
        "temp_max": 26.4,
        "pressure": 849.6,
        "sea_level": 1038.34,
        "grnd_level": 849.6,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.38,
        "deg": 71.5005
      },
      "snow": {
        "3h": 0.112
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 34.25,
        "temp_min": 34.25,
        "temp_max": 34.25,
        "pressure": 847.14,
        "sea_level": 1033.77,
        "grnd_level": 847.14,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.3,
        "deg": 90.5007
      },
      "snow": {
        "3h": 0.003
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 30.56,
        "temp_min": 30.56,
        "temp_max": 30.56,
        "pressure": 847.61,
        "sea_level": 1035.95,
        "grnd_level": 847.61,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 6.51,
        "deg": 63.0049
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 24.39,
        "temp_min": 24.39,
        "temp_max": 24.39,
        "pressure": 849.2,
        "sea_level": 1040.54,
        "grnd_level": 849.2,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 7.74,
        "deg": 57.001
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 17.97,
        "temp_min": 17.97,
        "temp_max": 17.97,
        "pressure": 849.28,
        "sea_level": 1042.04,
        "grnd_level": 849.28,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.17,
        "deg": 6.00226
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 15.43,
        "temp_min": 15.43,
        "temp_max": 15.43,
        "pressure": 849.2,
        "sea_level": 1042.82,
        "grnd_level": 849.2,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 0.502563
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.68,
        "temp_min": 13.68,
        "temp_max": 13.68,
        "pressure": 850.08,
        "sea_level": 1044.57,
        "grnd_level": 850.08,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.48,
        "deg": 334.5
      },
      "snow": {
        "3h": 0.005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.42,
        "temp_min": 19.42,
        "temp_max": 19.42,
        "pressure": 851.35,
        "sea_level": 1045.65,
        "grnd_level": 851.35,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 230
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 39.93,
        "temp_min": 39.93,
        "temp_max": 39.93,
        "pressure": 851.2,
        "sea_level": 1040.94,
        "grnd_level": 851.2,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.6,
        "deg": 272.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 42.53,
        "temp_min": 42.53,
        "temp_max": 42.53,
        "pressure": 849.83,
        "sea_level": 1037.47,
        "grnd_level": 849.83,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 8.95,
        "deg": 315.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 33.37,
        "temp_min": 33.37,
        "temp_max": 33.37,
        "pressure": 850.29,
        "sea_level": 1039.68,
        "grnd_level": 850.29,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.24,
        "deg": 307.003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 20.86,
        "temp_min": 20.86,
        "temp_max": 20.86,
        "pressure": 851.49,
        "sea_level": 1044.37,
        "grnd_level": 851.49,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 291.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 14.34,
        "temp_min": 14.34,
        "temp_max": 14.34,
        "pressure": 851.53,
        "sea_level": 1045.88,
        "grnd_level": 851.53,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.13,
        "deg": 233.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 11.72,
        "temp_min": 11.72,
        "temp_max": 11.72,
        "pressure": 851.67,
        "sea_level": 1047.22,
        "grnd_level": 851.67,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.68,
        "deg": 257.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 10.92,
        "temp_min": 10.92,
        "temp_max": 10.92,
        "pressure": 851.98,
        "sea_level": 1048.67,
        "grnd_level": 851.98,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 250.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 17.52,
        "temp_min": 17.52,
        "temp_max": 17.52,
        "pressure": 852.31,
        "sea_level": 1048.42,
        "grnd_level": 852.31,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.73,
        "deg": 249.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 40.77,
        "temp_min": 40.77,
        "temp_max": 40.77,
        "pressure": 851.05,
        "sea_level": 1040.72,
        "grnd_level": 851.05,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 137.506
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 44.43,
        "temp_min": 44.43,
        "temp_max": 44.43,
        "pressure": 847.48,
        "sea_level": 1033.75,
        "grnd_level": 847.48,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.65,
        "deg": 144.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 34.01,
        "temp_min": 34.01,
        "temp_max": 34.01,
        "pressure": 845.4,
        "sea_level": 1032.98,
        "grnd_level": 845.4,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.88,
        "deg": 146.01
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 20.55,
        "temp_min": 20.55,
        "temp_max": 20.55,
        "pressure": 843.9,
        "sea_level": 1033.66,
        "grnd_level": 843.9,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.04,
        "deg": 241.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 16.55,
        "temp_min": 16.55,
        "temp_max": 16.55,
        "pressure": 842.13,
        "sea_level": 1032.2,
        "grnd_level": 842.13,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.74,
        "deg": 273.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 16.58,
        "temp_min": 16.58,
        "temp_max": 16.58,
        "pressure": 840.83,
        "sea_level": 1030.54,
        "grnd_level": 840.83,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 1.32,
        "deg": 291.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 15.27,
        "temp_min": 15.27,
        "temp_max": 15.27,
        "pressure": 839.97,
        "sea_level": 1029.43,
        "grnd_level": 839.97,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 0.74,
        "deg": 240.505
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 21.63,
        "temp_min": 21.63,
        "temp_max": 21.63,
        "pressure": 840.74,
        "sea_level": 1029.14,
        "grnd_level": 840.74,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 269.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 50,
        "temp_min": 50,
        "temp_max": 50,
        "pressure": 841.03,
        "sea_level": 1024.71,
        "grnd_level": 841.03,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 279.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 52.57,
        "temp_min": 52.57,
        "temp_max": 52.57,
        "pressure": 840.48,
        "sea_level": 1022.53,
        "grnd_level": 840.48,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 3.62,
        "deg": 257.004
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 42.11,
        "temp_min": 42.11,
        "temp_max": 42.11,
        "pressure": 841.72,
        "sea_level": 1026.38,
        "grnd_level": 841.72,
        "humidity": 37,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 3.04,
        "deg": 189.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 34.54,
        "temp_min": 34.54,
        "temp_max": 34.54,
        "pressure": 842.83,
        "sea_level": 1031.46,
        "grnd_level": 842.83,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 7.43,
        "deg": 148.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 29.31,
        "temp_min": 29.31,
        "temp_max": 29.31,
        "pressure": 843,
        "sea_level": 1033.5,
        "grnd_level": 843,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.63,
        "deg": 123.509
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 19.93,
        "temp_min": 19.93,
        "temp_max": 19.93,
        "pressure": 842.52,
        "sea_level": 1033.83,
        "grnd_level": 842.52,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.25,
        "deg": 87.0027
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 15.65,
        "temp_min": 15.65,
        "temp_max": 15.65,
        "pressure": 842.01,
        "sea_level": 1033.38,
        "grnd_level": 842.01,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.4,
        "deg": 329.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 842.23,
        "sea_level": 1032.53,
        "grnd_level": 842.23,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.62,
        "deg": 301
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 40.79,
        "temp_min": 40.79,
        "temp_max": 40.79,
        "pressure": 842.27,
        "sea_level": 1026.95,
        "grnd_level": 842.27,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.91,
        "deg": 74.5001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 5579737,
      "name": "Mead",
      "coord": {
        "lat": 40.2333,
        "lon": -104.9986
      },
      "country": "US",
      "population": 3405
    }
  }
}, {
  "type": "element",
  "name": "result",
  "attributes": {
    "agencyIcon": "",
    "agencyName": "",
    "availabilityStatus": "N",
    "contractID": "PRCG",
    "contractType": "PRIVATE",
    "facilityID": "1063250",
    "facilityName": "Lavern M Johnson Park",
    "faciltyPhoto": "/webphotos/PRCG/pid1063250/0/80x53.jpg",
    "favorite": "N",
    "latitude": "40.2233333",
    "listingOnly": "N",
    "longitude": "-105.2736111",
    "regionName": "",
    "reservationChannel": "",
    "shortName": "D250",
    "sitesWithAmps": "Y",
    "sitesWithPetsAllowed": "Y",
    "sitesWithSewerHookup": "Y",
    "sitesWithWaterHookup": "Y",
    "sitesWithWaterfront": "",
    "state": "CO"
  },
  "forecast": {
    "cod": "200",
    "message": 0.0049,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 49.37,
        "temp_min": 46.88,
        "temp_max": 49.37,
        "pressure": 844.07,
        "sea_level": 1026.87,
        "grnd_level": 844.07,
        "humidity": 38,
        "temp_kf": 1.38
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 13,
        "deg": 294.502
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 39.99,
        "temp_min": 38.12,
        "temp_max": 39.99,
        "pressure": 845.63,
        "sea_level": 1030.58,
        "grnd_level": 845.63,
        "humidity": 36,
        "temp_kf": 1.04
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.41,
        "deg": 296.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 28.13,
        "temp_min": 26.89,
        "temp_max": 28.13,
        "pressure": 846.97,
        "sea_level": 1035.59,
        "grnd_level": 846.97,
        "humidity": 45,
        "temp_kf": 0.69
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.75,
        "deg": 291.004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 21.18,
        "temp_min": 20.56,
        "temp_max": 21.18,
        "pressure": 847.24,
        "sea_level": 1038.11,
        "grnd_level": 847.24,
        "humidity": 61,
        "temp_kf": 0.35
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.04,
        "deg": 140.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 16.35,
        "temp_min": 16.35,
        "temp_max": 16.35,
        "pressure": 848.26,
        "sea_level": 1040.72,
        "grnd_level": 848.26,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 23.0006
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 12.97,
        "temp_min": 12.97,
        "temp_max": 12.97,
        "pressure": 849.54,
        "sea_level": 1043.27,
        "grnd_level": 849.54,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.91,
        "deg": 15.0004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 19,
        "temp_min": 19,
        "temp_max": 19,
        "pressure": 850.21,
        "sea_level": 1043.6,
        "grnd_level": 850.21,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 2.82,
        "deg": 49.0112
      },
      "snow": {
        "3h": 0.12
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 26.4,
        "temp_min": 26.4,
        "temp_max": 26.4,
        "pressure": 849.6,
        "sea_level": 1038.34,
        "grnd_level": 849.6,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.38,
        "deg": 71.5005
      },
      "snow": {
        "3h": 0.112
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 34.25,
        "temp_min": 34.25,
        "temp_max": 34.25,
        "pressure": 847.14,
        "sea_level": 1033.77,
        "grnd_level": 847.14,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.3,
        "deg": 90.5007
      },
      "snow": {
        "3h": 0.003
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 30.56,
        "temp_min": 30.56,
        "temp_max": 30.56,
        "pressure": 847.61,
        "sea_level": 1035.95,
        "grnd_level": 847.61,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 6.51,
        "deg": 63.0049
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 24.39,
        "temp_min": 24.39,
        "temp_max": 24.39,
        "pressure": 849.2,
        "sea_level": 1040.54,
        "grnd_level": 849.2,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 7.74,
        "deg": 57.001
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 17.97,
        "temp_min": 17.97,
        "temp_max": 17.97,
        "pressure": 849.28,
        "sea_level": 1042.04,
        "grnd_level": 849.28,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.17,
        "deg": 6.00226
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 15.43,
        "temp_min": 15.43,
        "temp_max": 15.43,
        "pressure": 849.2,
        "sea_level": 1042.82,
        "grnd_level": 849.2,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 0.502563
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.68,
        "temp_min": 13.68,
        "temp_max": 13.68,
        "pressure": 850.08,
        "sea_level": 1044.57,
        "grnd_level": 850.08,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.48,
        "deg": 334.5
      },
      "snow": {
        "3h": 0.005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.42,
        "temp_min": 19.42,
        "temp_max": 19.42,
        "pressure": 851.35,
        "sea_level": 1045.65,
        "grnd_level": 851.35,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 230
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 39.93,
        "temp_min": 39.93,
        "temp_max": 39.93,
        "pressure": 851.2,
        "sea_level": 1040.94,
        "grnd_level": 851.2,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.6,
        "deg": 272.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 42.53,
        "temp_min": 42.53,
        "temp_max": 42.53,
        "pressure": 849.83,
        "sea_level": 1037.47,
        "grnd_level": 849.83,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 8.95,
        "deg": 315.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 33.37,
        "temp_min": 33.37,
        "temp_max": 33.37,
        "pressure": 850.29,
        "sea_level": 1039.68,
        "grnd_level": 850.29,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.24,
        "deg": 307.003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 20.86,
        "temp_min": 20.86,
        "temp_max": 20.86,
        "pressure": 851.49,
        "sea_level": 1044.37,
        "grnd_level": 851.49,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 291.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 14.34,
        "temp_min": 14.34,
        "temp_max": 14.34,
        "pressure": 851.53,
        "sea_level": 1045.88,
        "grnd_level": 851.53,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.13,
        "deg": 233.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 11.72,
        "temp_min": 11.72,
        "temp_max": 11.72,
        "pressure": 851.67,
        "sea_level": 1047.22,
        "grnd_level": 851.67,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.68,
        "deg": 257.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 10.92,
        "temp_min": 10.92,
        "temp_max": 10.92,
        "pressure": 851.98,
        "sea_level": 1048.67,
        "grnd_level": 851.98,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 250.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 17.52,
        "temp_min": 17.52,
        "temp_max": 17.52,
        "pressure": 852.31,
        "sea_level": 1048.42,
        "grnd_level": 852.31,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.73,
        "deg": 249.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 40.77,
        "temp_min": 40.77,
        "temp_max": 40.77,
        "pressure": 851.05,
        "sea_level": 1040.72,
        "grnd_level": 851.05,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 137.506
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 44.43,
        "temp_min": 44.43,
        "temp_max": 44.43,
        "pressure": 847.48,
        "sea_level": 1033.75,
        "grnd_level": 847.48,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.65,
        "deg": 144.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 34.01,
        "temp_min": 34.01,
        "temp_max": 34.01,
        "pressure": 845.4,
        "sea_level": 1032.98,
        "grnd_level": 845.4,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.88,
        "deg": 146.01
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 20.55,
        "temp_min": 20.55,
        "temp_max": 20.55,
        "pressure": 843.9,
        "sea_level": 1033.66,
        "grnd_level": 843.9,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.04,
        "deg": 241.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 16.55,
        "temp_min": 16.55,
        "temp_max": 16.55,
        "pressure": 842.13,
        "sea_level": 1032.2,
        "grnd_level": 842.13,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.74,
        "deg": 273.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 16.58,
        "temp_min": 16.58,
        "temp_max": 16.58,
        "pressure": 840.83,
        "sea_level": 1030.54,
        "grnd_level": 840.83,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 1.32,
        "deg": 291.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 15.27,
        "temp_min": 15.27,
        "temp_max": 15.27,
        "pressure": 839.97,
        "sea_level": 1029.43,
        "grnd_level": 839.97,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 0.74,
        "deg": 240.505
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 21.63,
        "temp_min": 21.63,
        "temp_max": 21.63,
        "pressure": 840.74,
        "sea_level": 1029.14,
        "grnd_level": 840.74,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 269.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 50,
        "temp_min": 50,
        "temp_max": 50,
        "pressure": 841.03,
        "sea_level": 1024.71,
        "grnd_level": 841.03,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 279.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 52.57,
        "temp_min": 52.57,
        "temp_max": 52.57,
        "pressure": 840.48,
        "sea_level": 1022.53,
        "grnd_level": 840.48,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 3.62,
        "deg": 257.004
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 42.11,
        "temp_min": 42.11,
        "temp_max": 42.11,
        "pressure": 841.72,
        "sea_level": 1026.38,
        "grnd_level": 841.72,
        "humidity": 37,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 3.04,
        "deg": 189.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 34.54,
        "temp_min": 34.54,
        "temp_max": 34.54,
        "pressure": 842.83,
        "sea_level": 1031.46,
        "grnd_level": 842.83,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 7.43,
        "deg": 148.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 29.31,
        "temp_min": 29.31,
        "temp_max": 29.31,
        "pressure": 843,
        "sea_level": 1033.5,
        "grnd_level": 843,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.63,
        "deg": 123.509
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 19.93,
        "temp_min": 19.93,
        "temp_max": 19.93,
        "pressure": 842.52,
        "sea_level": 1033.83,
        "grnd_level": 842.52,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.25,
        "deg": 87.0027
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 15.65,
        "temp_min": 15.65,
        "temp_max": 15.65,
        "pressure": 842.01,
        "sea_level": 1033.38,
        "grnd_level": 842.01,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.4,
        "deg": 329.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 842.23,
        "sea_level": 1032.53,
        "grnd_level": 842.23,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.62,
        "deg": 301
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 40.79,
        "temp_min": 40.79,
        "temp_max": 40.79,
        "pressure": 842.27,
        "sea_level": 1026.95,
        "grnd_level": 842.27,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.91,
        "deg": 74.5001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 5579453,
      "name": "Lyons",
      "coord": {
        "lat": 40.2247,
        "lon": -105.2714
      },
      "country": "US",
      "population": 2033
    }
  }
}, {
  "type": "element",
  "name": "result",
  "attributes": {
    "agencyIcon": "",
    "agencyName": "",
    "availabilityStatus": "Y",
    "contractID": "KOAI",
    "contractType": "PRIVATE",
    "facilityID": "730237",
    "facilityName": "Denver East / Strasburg KOA",
    "faciltyPhoto": "/webphotos/KOAI/pid730237/0/80x53.jpg",
    "favorite": "N",
    "latitude": "39.7353583",
    "listingOnly": "Y",
    "longitude": "-104.3214",
    "regionName": "",
    "reservationChannel": "Web Reservable",
    "shortName": "K0137",
    "sitesWithAmps": "N",
    "sitesWithPetsAllowed": "N",
    "sitesWithSewerHookup": "N",
    "sitesWithWaterHookup": "N",
    "sitesWithWaterfront": "",
    "state": "CO"
  },
  "forecast": {
    "cod": "200",
    "message": 0.0042,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 51.33,
        "temp_min": 47.87,
        "temp_max": 51.33,
        "pressure": 833.21,
        "sea_level": 1025.9,
        "grnd_level": 833.21,
        "humidity": 36,
        "temp_kf": 1.93
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02d"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 12.21,
        "deg": 313.502
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 42.84,
        "temp_min": 40.23,
        "temp_max": 42.84,
        "pressure": 834.61,
        "sea_level": 1029.28,
        "grnd_level": 834.61,
        "humidity": 30,
        "temp_kf": 1.44
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 12.66,
        "deg": 324
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 29.97,
        "temp_min": 28.24,
        "temp_max": 29.97,
        "pressure": 836.6,
        "sea_level": 1035.15,
        "grnd_level": 836.6,
        "humidity": 42,
        "temp_kf": 0.96
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.76,
        "deg": 333.504
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 19.63,
        "temp_min": 18.76,
        "temp_max": 19.63,
        "pressure": 836.87,
        "sea_level": 1038.15,
        "grnd_level": 836.87,
        "humidity": 65,
        "temp_kf": 0.48
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.59,
        "deg": 75.0012
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 17.43,
        "temp_min": 17.43,
        "temp_max": 17.43,
        "pressure": 836.84,
        "sea_level": 1039.79,
        "grnd_level": 836.84,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.96,
        "deg": 102.001
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 13.02,
        "temp_min": 13.02,
        "temp_max": 13.02,
        "pressure": 837.62,
        "sea_level": 1042.14,
        "grnd_level": 837.62,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.02,
        "deg": 68.0004
      },
      "snow": {
        "3h": 0.003
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 15.58,
        "temp_min": 15.58,
        "temp_max": 15.58,
        "pressure": 839.03,
        "sea_level": 1043.11,
        "grnd_level": 839.03,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 4.83,
        "deg": 316.511
      },
      "snow": {
        "3h": 0.04
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 28.7,
        "temp_min": 28.7,
        "temp_max": 28.7,
        "pressure": 838.33,
        "sea_level": 1037.89,
        "grnd_level": 838.33,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.16,
        "deg": 28.0005
      },
      "snow": {
        "3h": 0.024
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 39.2,
        "temp_min": 39.2,
        "temp_max": 39.2,
        "pressure": 835.63,
        "sea_level": 1033.12,
        "grnd_level": 835.63,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 10.76,
        "deg": 76.5007
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 33.94,
        "temp_min": 33.94,
        "temp_max": 33.94,
        "pressure": 835.86,
        "sea_level": 1035.1,
        "grnd_level": 835.86,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 12.55,
        "deg": 107.505
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 24.34,
        "temp_min": 24.34,
        "temp_max": 24.34,
        "pressure": 837.69,
        "sea_level": 1040.01,
        "grnd_level": 837.69,
        "humidity": 84,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 11.43,
        "deg": 151.501
      },
      "snow": {
        "3h": 0.0005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 18.42,
        "temp_min": 18.42,
        "temp_max": 18.42,
        "pressure": 838.1,
        "sea_level": 1041.75,
        "grnd_level": 838.1,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.76,
        "deg": 187.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 13.58,
        "temp_min": 13.58,
        "temp_max": 13.58,
        "pressure": 838.01,
        "sea_level": 1042.49,
        "grnd_level": 838.01,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.94,
        "deg": 219.003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.77,
        "temp_min": 13.77,
        "temp_max": 13.77,
        "pressure": 839.06,
        "sea_level": 1044.25,
        "grnd_level": 839.06,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13n"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 5.17,
        "deg": 260
      },
      "snow": {
        "3h": 0.065
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.19,
        "temp_min": 19.19,
        "temp_max": 19.19,
        "pressure": 840.73,
        "sea_level": 1045.65,
        "grnd_level": 840.73,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 7.07,
        "deg": 250
      },
      "snow": {
        "3h": 0.075
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 36.91,
        "temp_min": 36.91,
        "temp_max": 36.91,
        "pressure": 841.15,
        "sea_level": 1041.47,
        "grnd_level": 841.15,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.51,
        "deg": 272.503
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 41.32,
        "temp_min": 41.32,
        "temp_max": 41.32,
        "pressure": 839.46,
        "sea_level": 1037.75,
        "grnd_level": 839.46,
        "humidity": 38,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.66,
        "deg": 328.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 34.13,
        "temp_min": 34.13,
        "temp_max": 34.13,
        "pressure": 839.75,
        "sea_level": 1039.96,
        "grnd_level": 839.75,
        "humidity": 36,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.92,
        "deg": 329.003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 20.46,
        "temp_min": 20.46,
        "temp_max": 20.46,
        "pressure": 840.87,
        "sea_level": 1044.49,
        "grnd_level": 840.87,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 335.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 13.49,
        "temp_min": 13.49,
        "temp_max": 13.49,
        "pressure": 841.16,
        "sea_level": 1046.32,
        "grnd_level": 841.16,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.13,
        "deg": 13.5019
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 12.26,
        "temp_min": 12.26,
        "temp_max": 12.26,
        "pressure": 841.13,
        "sea_level": 1047.26,
        "grnd_level": 841.13,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.59,
        "deg": 182.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 12.67,
        "temp_min": 12.67,
        "temp_max": 12.67,
        "pressure": 841.36,
        "sea_level": 1048.55,
        "grnd_level": 841.36,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.4,
        "deg": 179.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 20.72,
        "temp_min": 20.72,
        "temp_max": 20.72,
        "pressure": 841.94,
        "sea_level": 1048.3,
        "grnd_level": 841.94,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.38,
        "deg": 178.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 42.93,
        "temp_min": 42.93,
        "temp_max": 42.93,
        "pressure": 840.51,
        "sea_level": 1040.72,
        "grnd_level": 840.51,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 9.98,
        "deg": 171.006
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 46.32,
        "temp_min": 46.32,
        "temp_max": 46.32,
        "pressure": 837.1,
        "sea_level": 1034.23,
        "grnd_level": 837.1,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 18.28,
        "deg": 180.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 38.83,
        "temp_min": 38.83,
        "temp_max": 38.83,
        "pressure": 835.27,
        "sea_level": 1033.87,
        "grnd_level": 835.27,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 15.86,
        "deg": 178.51
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 32.34,
        "temp_min": 32.34,
        "temp_max": 32.34,
        "pressure": 833.84,
        "sea_level": 1034.71,
        "grnd_level": 833.84,
        "humidity": 41,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 15.64,
        "deg": 189
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 28.88,
        "temp_min": 28.88,
        "temp_max": 28.88,
        "pressure": 832.16,
        "sea_level": 1033.13,
        "grnd_level": 832.16,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 12.93,
        "deg": 201.501
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 21.53,
        "temp_min": 21.53,
        "temp_max": 21.53,
        "pressure": 830.7,
        "sea_level": 1031.43,
        "grnd_level": 830.7,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 4.63,
        "deg": 191.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 19.72,
        "temp_min": 19.72,
        "temp_max": 19.72,
        "pressure": 830,
        "sea_level": 1030.36,
        "grnd_level": 830,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 3.65,
        "deg": 204.505
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 28.56,
        "temp_min": 28.56,
        "temp_max": 28.56,
        "pressure": 830.44,
        "sea_level": 1029.62,
        "grnd_level": 830.44,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.08,
        "deg": 219.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 54.05,
        "temp_min": 54.05,
        "temp_max": 54.05,
        "pressure": 830.74,
        "sea_level": 1024.67,
        "grnd_level": 830.74,
        "humidity": 24,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.93,
        "deg": 330.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 52.25,
        "temp_min": 52.25,
        "temp_max": 52.25,
        "pressure": 830.19,
        "sea_level": 1022.25,
        "grnd_level": 830.19,
        "humidity": 25,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 9.78,
        "deg": 68.5037
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 42.33,
        "temp_min": 42.33,
        "temp_max": 42.33,
        "pressure": 831.83,
        "sea_level": 1026.58,
        "grnd_level": 831.83,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 12.21,
        "deg": 84.5016
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 36.52,
        "temp_min": 36.52,
        "temp_max": 36.52,
        "pressure": 833.1,
        "sea_level": 1032.07,
        "grnd_level": 833.1,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 15.3,
        "deg": 102
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 31.92,
        "temp_min": 31.92,
        "temp_max": 31.92,
        "pressure": 832.94,
        "sea_level": 1033.83,
        "grnd_level": 832.94,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 13.67,
        "deg": 125.009
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 28.88,
        "temp_min": 28.88,
        "temp_max": 28.88,
        "pressure": 831.98,
        "sea_level": 1033.79,
        "grnd_level": 831.98,
        "humidity": 52,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 15.57,
        "deg": 171.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 27.35,
        "temp_min": 27.35,
        "temp_max": 27.35,
        "pressure": 831.4,
        "sea_level": 1033.42,
        "grnd_level": 831.4,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 13.13,
        "deg": 190.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 29.78,
        "temp_min": 29.78,
        "temp_max": 29.78,
        "pressure": 831.61,
        "sea_level": 1032.37,
        "grnd_level": 831.61,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 9.22,
        "deg": 199.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 46.64,
        "temp_min": 46.64,
        "temp_max": 46.64,
        "pressure": 831.24,
        "sea_level": 1026.22,
        "grnd_level": 831.24,
        "humidity": 38,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.12,
        "deg": 126.5
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 5440516,
      "name": "Strasburg",
      "coord": {
        "lat": 39.7383,
        "lon": -104.3233
      },
      "country": "US",
      "population": 2447
    }
  }
}, {
  "type": "element",
  "name": "result",
  "attributes": {
    "agencyIcon": "",
    "agencyName": "",
    "availabilityStatus": "N",
    "contractID": "LARC",
    "contractType": "COUNTY",
    "facilityID": "710102",
    "facilityName": "Carter Lake",
    "faciltyPhoto": "/webphotos/LARC/pid710102/0/80x53.jpg",
    "favorite": "N",
    "latitude": "40.3358333",
    "listingOnly": "N",
    "longitude": "-105.2166667",
    "regionName": "",
    "reservationChannel": "",
    "shortName": "LRM1",
    "sitesWithAmps": "Y",
    "sitesWithPetsAllowed": "Y",
    "sitesWithSewerHookup": "N",
    "sitesWithWaterHookup": "N",
    "sitesWithWaterfront": "Lakefront",
    "state": "CO"
  },
  "forecast": {
    "cod": "200",
    "message": 0.0046,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 51.37,
        "temp_min": 46.88,
        "temp_max": 51.37,
        "pressure": 844.07,
        "sea_level": 1026.87,
        "grnd_level": 844.07,
        "humidity": 38,
        "temp_kf": 2.49
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 13,
        "deg": 294.502
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 41.49,
        "temp_min": 38.12,
        "temp_max": 41.49,
        "pressure": 845.63,
        "sea_level": 1030.58,
        "grnd_level": 845.63,
        "humidity": 36,
        "temp_kf": 1.87
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.41,
        "deg": 296.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 29.14,
        "temp_min": 26.89,
        "temp_max": 29.14,
        "pressure": 846.97,
        "sea_level": 1035.59,
        "grnd_level": 846.97,
        "humidity": 45,
        "temp_kf": 1.25
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.75,
        "deg": 291.004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 21.69,
        "temp_min": 20.56,
        "temp_max": 21.69,
        "pressure": 847.24,
        "sea_level": 1038.11,
        "grnd_level": 847.24,
        "humidity": 61,
        "temp_kf": 0.62
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.04,
        "deg": 140.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 16.35,
        "temp_min": 16.35,
        "temp_max": 16.35,
        "pressure": 848.26,
        "sea_level": 1040.72,
        "grnd_level": 848.26,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 23.0006
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 12.97,
        "temp_min": 12.97,
        "temp_max": 12.97,
        "pressure": 849.54,
        "sea_level": 1043.27,
        "grnd_level": 849.54,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.91,
        "deg": 15.0004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 19,
        "temp_min": 19,
        "temp_max": 19,
        "pressure": 850.21,
        "sea_level": 1043.6,
        "grnd_level": 850.21,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 2.82,
        "deg": 49.0112
      },
      "snow": {
        "3h": 0.12
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 26.4,
        "temp_min": 26.4,
        "temp_max": 26.4,
        "pressure": 849.6,
        "sea_level": 1038.34,
        "grnd_level": 849.6,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.38,
        "deg": 71.5005
      },
      "snow": {
        "3h": 0.112
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 34.25,
        "temp_min": 34.25,
        "temp_max": 34.25,
        "pressure": 847.14,
        "sea_level": 1033.77,
        "grnd_level": 847.14,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.3,
        "deg": 90.5007
      },
      "snow": {
        "3h": 0.003
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 30.56,
        "temp_min": 30.56,
        "temp_max": 30.56,
        "pressure": 847.61,
        "sea_level": 1035.95,
        "grnd_level": 847.61,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 6.51,
        "deg": 63.0049
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 24.39,
        "temp_min": 24.39,
        "temp_max": 24.39,
        "pressure": 849.2,
        "sea_level": 1040.54,
        "grnd_level": 849.2,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 7.74,
        "deg": 57.001
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 17.97,
        "temp_min": 17.97,
        "temp_max": 17.97,
        "pressure": 849.28,
        "sea_level": 1042.04,
        "grnd_level": 849.28,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.17,
        "deg": 6.00226
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 15.43,
        "temp_min": 15.43,
        "temp_max": 15.43,
        "pressure": 849.2,
        "sea_level": 1042.82,
        "grnd_level": 849.2,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 0.502563
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.68,
        "temp_min": 13.68,
        "temp_max": 13.68,
        "pressure": 850.08,
        "sea_level": 1044.57,
        "grnd_level": 850.08,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.48,
        "deg": 334.5
      },
      "snow": {
        "3h": 0.005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.42,
        "temp_min": 19.42,
        "temp_max": 19.42,
        "pressure": 851.35,
        "sea_level": 1045.65,
        "grnd_level": 851.35,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 230
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 39.93,
        "temp_min": 39.93,
        "temp_max": 39.93,
        "pressure": 851.2,
        "sea_level": 1040.94,
        "grnd_level": 851.2,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.6,
        "deg": 272.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 42.53,
        "temp_min": 42.53,
        "temp_max": 42.53,
        "pressure": 849.83,
        "sea_level": 1037.47,
        "grnd_level": 849.83,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 8.95,
        "deg": 315.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 33.37,
        "temp_min": 33.37,
        "temp_max": 33.37,
        "pressure": 850.29,
        "sea_level": 1039.68,
        "grnd_level": 850.29,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.24,
        "deg": 307.003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 20.86,
        "temp_min": 20.86,
        "temp_max": 20.86,
        "pressure": 851.49,
        "sea_level": 1044.37,
        "grnd_level": 851.49,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 291.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 14.34,
        "temp_min": 14.34,
        "temp_max": 14.34,
        "pressure": 851.53,
        "sea_level": 1045.88,
        "grnd_level": 851.53,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.13,
        "deg": 233.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 11.72,
        "temp_min": 11.72,
        "temp_max": 11.72,
        "pressure": 851.67,
        "sea_level": 1047.22,
        "grnd_level": 851.67,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.68,
        "deg": 257.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 10.92,
        "temp_min": 10.92,
        "temp_max": 10.92,
        "pressure": 851.98,
        "sea_level": 1048.67,
        "grnd_level": 851.98,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 250.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 17.52,
        "temp_min": 17.52,
        "temp_max": 17.52,
        "pressure": 852.31,
        "sea_level": 1048.42,
        "grnd_level": 852.31,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.73,
        "deg": 249.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 40.77,
        "temp_min": 40.77,
        "temp_max": 40.77,
        "pressure": 851.05,
        "sea_level": 1040.72,
        "grnd_level": 851.05,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 137.506
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 44.43,
        "temp_min": 44.43,
        "temp_max": 44.43,
        "pressure": 847.48,
        "sea_level": 1033.75,
        "grnd_level": 847.48,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.65,
        "deg": 144.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 34.01,
        "temp_min": 34.01,
        "temp_max": 34.01,
        "pressure": 845.4,
        "sea_level": 1032.98,
        "grnd_level": 845.4,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.88,
        "deg": 146.01
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 20.55,
        "temp_min": 20.55,
        "temp_max": 20.55,
        "pressure": 843.9,
        "sea_level": 1033.66,
        "grnd_level": 843.9,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.04,
        "deg": 241.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 16.55,
        "temp_min": 16.55,
        "temp_max": 16.55,
        "pressure": 842.13,
        "sea_level": 1032.2,
        "grnd_level": 842.13,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.74,
        "deg": 273.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 16.58,
        "temp_min": 16.58,
        "temp_max": 16.58,
        "pressure": 840.83,
        "sea_level": 1030.54,
        "grnd_level": 840.83,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 1.32,
        "deg": 291.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 15.27,
        "temp_min": 15.27,
        "temp_max": 15.27,
        "pressure": 839.97,
        "sea_level": 1029.43,
        "grnd_level": 839.97,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 0.74,
        "deg": 240.505
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 21.63,
        "temp_min": 21.63,
        "temp_max": 21.63,
        "pressure": 840.74,
        "sea_level": 1029.14,
        "grnd_level": 840.74,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 269.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 50,
        "temp_min": 50,
        "temp_max": 50,
        "pressure": 841.03,
        "sea_level": 1024.71,
        "grnd_level": 841.03,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 279.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 52.57,
        "temp_min": 52.57,
        "temp_max": 52.57,
        "pressure": 840.48,
        "sea_level": 1022.53,
        "grnd_level": 840.48,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 3.62,
        "deg": 257.004
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 42.11,
        "temp_min": 42.11,
        "temp_max": 42.11,
        "pressure": 841.72,
        "sea_level": 1026.38,
        "grnd_level": 841.72,
        "humidity": 37,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 3.04,
        "deg": 189.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 34.54,
        "temp_min": 34.54,
        "temp_max": 34.54,
        "pressure": 842.83,
        "sea_level": 1031.46,
        "grnd_level": 842.83,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 7.43,
        "deg": 148.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 29.31,
        "temp_min": 29.31,
        "temp_max": 29.31,
        "pressure": 843,
        "sea_level": 1033.5,
        "grnd_level": 843,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.63,
        "deg": 123.509
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 19.93,
        "temp_min": 19.93,
        "temp_max": 19.93,
        "pressure": 842.52,
        "sea_level": 1033.83,
        "grnd_level": 842.52,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.25,
        "deg": 87.0027
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 15.65,
        "temp_min": 15.65,
        "temp_max": 15.65,
        "pressure": 842.01,
        "sea_level": 1033.38,
        "grnd_level": 842.01,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.4,
        "deg": 329.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 842.23,
        "sea_level": 1032.53,
        "grnd_level": 842.23,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.62,
        "deg": 301
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 40.79,
        "temp_min": 40.79,
        "temp_max": 40.79,
        "pressure": 842.27,
        "sea_level": 1026.95,
        "grnd_level": 842.27,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.91,
        "deg": 74.5001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 5575478,
      "name": "Campion",
      "coord": {
        "lat": 40.3494,
        "lon": -105.0778
      },
      "country": "US",
      "population": 1839
    }
  }
}, {
  "type": "element",
  "name": "result",
  "attributes": {
    "agencyIcon": "",
    "agencyName": "",
    "availabilityStatus": "N",
    "contractID": "LARC",
    "contractType": "COUNTY",
    "facilityID": "710103",
    "facilityName": "Flatiron Reservoir",
    "faciltyPhoto": "/webphotos/LARC/pid710103/0/80x53.jpg",
    "favorite": "N",
    "latitude": "40.3697222",
    "listingOnly": "N",
    "longitude": "-105.2355556",
    "regionName": "",
    "reservationChannel": "",
    "shortName": "LRM2",
    "sitesWithAmps": "Y",
    "sitesWithPetsAllowed": "Y",
    "sitesWithSewerHookup": "N",
    "sitesWithWaterHookup": "N",
    "sitesWithWaterfront": "Lakefront",
    "state": "CO"
  },
  "forecast": {
    "cod": "200",
    "message": 0.0041,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 51.37,
        "temp_min": 46.88,
        "temp_max": 51.37,
        "pressure": 844.07,
        "sea_level": 1026.87,
        "grnd_level": 844.07,
        "humidity": 38,
        "temp_kf": 2.49
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 13,
        "deg": 294.502
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 41.49,
        "temp_min": 38.12,
        "temp_max": 41.49,
        "pressure": 845.63,
        "sea_level": 1030.58,
        "grnd_level": 845.63,
        "humidity": 36,
        "temp_kf": 1.87
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.41,
        "deg": 296.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 29.14,
        "temp_min": 26.89,
        "temp_max": 29.14,
        "pressure": 846.97,
        "sea_level": 1035.59,
        "grnd_level": 846.97,
        "humidity": 45,
        "temp_kf": 1.25
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.75,
        "deg": 291.004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 21.69,
        "temp_min": 20.56,
        "temp_max": 21.69,
        "pressure": 847.24,
        "sea_level": 1038.11,
        "grnd_level": 847.24,
        "humidity": 61,
        "temp_kf": 0.62
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.04,
        "deg": 140.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 16.35,
        "temp_min": 16.35,
        "temp_max": 16.35,
        "pressure": 848.26,
        "sea_level": 1040.72,
        "grnd_level": 848.26,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 23.0006
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 12.97,
        "temp_min": 12.97,
        "temp_max": 12.97,
        "pressure": 849.54,
        "sea_level": 1043.27,
        "grnd_level": 849.54,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.91,
        "deg": 15.0004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 19,
        "temp_min": 19,
        "temp_max": 19,
        "pressure": 850.21,
        "sea_level": 1043.6,
        "grnd_level": 850.21,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 2.82,
        "deg": 49.0112
      },
      "snow": {
        "3h": 0.12
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 26.4,
        "temp_min": 26.4,
        "temp_max": 26.4,
        "pressure": 849.6,
        "sea_level": 1038.34,
        "grnd_level": 849.6,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.38,
        "deg": 71.5005
      },
      "snow": {
        "3h": 0.112
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 34.25,
        "temp_min": 34.25,
        "temp_max": 34.25,
        "pressure": 847.14,
        "sea_level": 1033.77,
        "grnd_level": 847.14,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.3,
        "deg": 90.5007
      },
      "snow": {
        "3h": 0.003
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 30.56,
        "temp_min": 30.56,
        "temp_max": 30.56,
        "pressure": 847.61,
        "sea_level": 1035.95,
        "grnd_level": 847.61,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 6.51,
        "deg": 63.0049
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 24.39,
        "temp_min": 24.39,
        "temp_max": 24.39,
        "pressure": 849.2,
        "sea_level": 1040.54,
        "grnd_level": 849.2,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 7.74,
        "deg": 57.001
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 17.97,
        "temp_min": 17.97,
        "temp_max": 17.97,
        "pressure": 849.28,
        "sea_level": 1042.04,
        "grnd_level": 849.28,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.17,
        "deg": 6.00226
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 15.43,
        "temp_min": 15.43,
        "temp_max": 15.43,
        "pressure": 849.2,
        "sea_level": 1042.82,
        "grnd_level": 849.2,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 0.502563
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.68,
        "temp_min": 13.68,
        "temp_max": 13.68,
        "pressure": 850.08,
        "sea_level": 1044.57,
        "grnd_level": 850.08,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.48,
        "deg": 334.5
      },
      "snow": {
        "3h": 0.005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.42,
        "temp_min": 19.42,
        "temp_max": 19.42,
        "pressure": 851.35,
        "sea_level": 1045.65,
        "grnd_level": 851.35,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 230
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 39.93,
        "temp_min": 39.93,
        "temp_max": 39.93,
        "pressure": 851.2,
        "sea_level": 1040.94,
        "grnd_level": 851.2,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.6,
        "deg": 272.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 42.53,
        "temp_min": 42.53,
        "temp_max": 42.53,
        "pressure": 849.83,
        "sea_level": 1037.47,
        "grnd_level": 849.83,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 8.95,
        "deg": 315.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 33.37,
        "temp_min": 33.37,
        "temp_max": 33.37,
        "pressure": 850.29,
        "sea_level": 1039.68,
        "grnd_level": 850.29,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.24,
        "deg": 307.003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 20.86,
        "temp_min": 20.86,
        "temp_max": 20.86,
        "pressure": 851.49,
        "sea_level": 1044.37,
        "grnd_level": 851.49,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 291.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 14.34,
        "temp_min": 14.34,
        "temp_max": 14.34,
        "pressure": 851.53,
        "sea_level": 1045.88,
        "grnd_level": 851.53,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.13,
        "deg": 233.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 11.72,
        "temp_min": 11.72,
        "temp_max": 11.72,
        "pressure": 851.67,
        "sea_level": 1047.22,
        "grnd_level": 851.67,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.68,
        "deg": 257.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 10.92,
        "temp_min": 10.92,
        "temp_max": 10.92,
        "pressure": 851.98,
        "sea_level": 1048.67,
        "grnd_level": 851.98,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 250.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 17.52,
        "temp_min": 17.52,
        "temp_max": 17.52,
        "pressure": 852.31,
        "sea_level": 1048.42,
        "grnd_level": 852.31,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.73,
        "deg": 249.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 40.77,
        "temp_min": 40.77,
        "temp_max": 40.77,
        "pressure": 851.05,
        "sea_level": 1040.72,
        "grnd_level": 851.05,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 137.506
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 44.43,
        "temp_min": 44.43,
        "temp_max": 44.43,
        "pressure": 847.48,
        "sea_level": 1033.75,
        "grnd_level": 847.48,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.65,
        "deg": 144.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 34.01,
        "temp_min": 34.01,
        "temp_max": 34.01,
        "pressure": 845.4,
        "sea_level": 1032.98,
        "grnd_level": 845.4,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.88,
        "deg": 146.01
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 20.55,
        "temp_min": 20.55,
        "temp_max": 20.55,
        "pressure": 843.9,
        "sea_level": 1033.66,
        "grnd_level": 843.9,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.04,
        "deg": 241.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 16.55,
        "temp_min": 16.55,
        "temp_max": 16.55,
        "pressure": 842.13,
        "sea_level": 1032.2,
        "grnd_level": 842.13,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.74,
        "deg": 273.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 16.58,
        "temp_min": 16.58,
        "temp_max": 16.58,
        "pressure": 840.83,
        "sea_level": 1030.54,
        "grnd_level": 840.83,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 1.32,
        "deg": 291.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 15.27,
        "temp_min": 15.27,
        "temp_max": 15.27,
        "pressure": 839.97,
        "sea_level": 1029.43,
        "grnd_level": 839.97,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 0.74,
        "deg": 240.505
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 21.63,
        "temp_min": 21.63,
        "temp_max": 21.63,
        "pressure": 840.74,
        "sea_level": 1029.14,
        "grnd_level": 840.74,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 269.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 50,
        "temp_min": 50,
        "temp_max": 50,
        "pressure": 841.03,
        "sea_level": 1024.71,
        "grnd_level": 841.03,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 279.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 52.57,
        "temp_min": 52.57,
        "temp_max": 52.57,
        "pressure": 840.48,
        "sea_level": 1022.53,
        "grnd_level": 840.48,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 3.62,
        "deg": 257.004
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 42.11,
        "temp_min": 42.11,
        "temp_max": 42.11,
        "pressure": 841.72,
        "sea_level": 1026.38,
        "grnd_level": 841.72,
        "humidity": 37,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 3.04,
        "deg": 189.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 34.54,
        "temp_min": 34.54,
        "temp_max": 34.54,
        "pressure": 842.83,
        "sea_level": 1031.46,
        "grnd_level": 842.83,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 7.43,
        "deg": 148.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 29.31,
        "temp_min": 29.31,
        "temp_max": 29.31,
        "pressure": 843,
        "sea_level": 1033.5,
        "grnd_level": 843,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.63,
        "deg": 123.509
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 19.93,
        "temp_min": 19.93,
        "temp_max": 19.93,
        "pressure": 842.52,
        "sea_level": 1033.83,
        "grnd_level": 842.52,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.25,
        "deg": 87.0027
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 15.65,
        "temp_min": 15.65,
        "temp_max": 15.65,
        "pressure": 842.01,
        "sea_level": 1033.38,
        "grnd_level": 842.01,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.4,
        "deg": 329.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 842.23,
        "sea_level": 1032.53,
        "grnd_level": 842.23,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.62,
        "deg": 301
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 40.79,
        "temp_min": 40.79,
        "temp_max": 40.79,
        "pressure": 842.27,
        "sea_level": 1026.95,
        "grnd_level": 842.27,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.91,
        "deg": 74.5001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 5579611,
      "name": "Masonville",
      "coord": {
        "lat": 40.4875,
        "lon": -105.2109
      },
      "country": "US"
    }
  }
}, {
  "type": "element",
  "name": "result",
  "attributes": {
    "agencyIcon": "",
    "agencyName": "",
    "availabilityStatus": "N",
    "contractID": "LARC",
    "contractType": "COUNTY",
    "facilityID": "710106",
    "facilityName": "Pinewood Reservoir",
    "faciltyPhoto": "/webphotos/LARC/pid710106/0/80x53.jpg",
    "favorite": "N",
    "latitude": "40.3611111",
    "listingOnly": "N",
    "longitude": "-105.2852778",
    "regionName": "",
    "reservationChannel": "",
    "shortName": "LRM5",
    "sitesWithAmps": "Y",
    "sitesWithPetsAllowed": "Y",
    "sitesWithSewerHookup": "N",
    "sitesWithWaterHookup": "N",
    "sitesWithWaterfront": "Lakefront",
    "state": "CO"
  },
  "forecast": {
    "cod": "200",
    "message": 0.0042,
    "cnt": 40,
    "list": [{
      "dt": 1541538000,
      "main": {
        "temp": 51.37,
        "temp_min": 46.88,
        "temp_max": 51.37,
        "pressure": 844.07,
        "sea_level": 1026.87,
        "grnd_level": 844.07,
        "humidity": 38,
        "temp_kf": 2.49
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 13,
        "deg": 294.502
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-06 21:00:00"
    }, {
      "dt": 1541548800,
      "main": {
        "temp": 41.49,
        "temp_min": 38.12,
        "temp_max": 41.49,
        "pressure": 845.63,
        "sea_level": 1030.58,
        "grnd_level": 845.63,
        "humidity": 36,
        "temp_kf": 1.87
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.41,
        "deg": 296.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 00:00:00"
    }, {
      "dt": 1541559600,
      "main": {
        "temp": 29.14,
        "temp_min": 26.89,
        "temp_max": 29.14,
        "pressure": 846.97,
        "sea_level": 1035.59,
        "grnd_level": 846.97,
        "humidity": 45,
        "temp_kf": 1.25
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.75,
        "deg": 291.004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 03:00:00"
    }, {
      "dt": 1541570400,
      "main": {
        "temp": 21.69,
        "temp_min": 20.56,
        "temp_max": 21.69,
        "pressure": 847.24,
        "sea_level": 1038.11,
        "grnd_level": 847.24,
        "humidity": 61,
        "temp_kf": 0.62
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.04,
        "deg": 140.501
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 06:00:00"
    }, {
      "dt": 1541581200,
      "main": {
        "temp": 16.35,
        "temp_min": 16.35,
        "temp_max": 16.35,
        "pressure": 848.26,
        "sea_level": 1040.72,
        "grnd_level": 848.26,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 23.0006
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 09:00:00"
    }, {
      "dt": 1541592000,
      "main": {
        "temp": 12.97,
        "temp_min": 12.97,
        "temp_max": 12.97,
        "pressure": 849.54,
        "sea_level": 1043.27,
        "grnd_level": 849.54,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.91,
        "deg": 15.0004
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-07 12:00:00"
    }, {
      "dt": 1541602800,
      "main": {
        "temp": 19,
        "temp_min": 19,
        "temp_max": 19,
        "pressure": 850.21,
        "sea_level": 1043.6,
        "grnd_level": 850.21,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 56
      },
      "wind": {
        "speed": 2.82,
        "deg": 49.0112
      },
      "snow": {
        "3h": 0.12
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 15:00:00"
    }, {
      "dt": 1541613600,
      "main": {
        "temp": 26.4,
        "temp_min": 26.4,
        "temp_max": 26.4,
        "pressure": 849.6,
        "sea_level": 1038.34,
        "grnd_level": 849.6,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 600,
        "main": "Snow",
        "description": "light snow",
        "icon": "13d"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 4.38,
        "deg": 71.5005
      },
      "snow": {
        "3h": 0.112
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 18:00:00"
    }, {
      "dt": 1541624400,
      "main": {
        "temp": 34.25,
        "temp_min": 34.25,
        "temp_max": 34.25,
        "pressure": 847.14,
        "sea_level": 1033.77,
        "grnd_level": 847.14,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.3,
        "deg": 90.5007
      },
      "snow": {
        "3h": 0.003
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-07 21:00:00"
    }, {
      "dt": 1541635200,
      "main": {
        "temp": 30.56,
        "temp_min": 30.56,
        "temp_max": 30.56,
        "pressure": 847.61,
        "sea_level": 1035.95,
        "grnd_level": 847.61,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 6.51,
        "deg": 63.0049
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 00:00:00"
    }, {
      "dt": 1541646000,
      "main": {
        "temp": 24.39,
        "temp_min": 24.39,
        "temp_max": 24.39,
        "pressure": 849.2,
        "sea_level": 1040.54,
        "grnd_level": 849.2,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 7.74,
        "deg": 57.001
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 03:00:00"
    }, {
      "dt": 1541656800,
      "main": {
        "temp": 17.97,
        "temp_min": 17.97,
        "temp_max": 17.97,
        "pressure": 849.28,
        "sea_level": 1042.04,
        "grnd_level": 849.28,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.17,
        "deg": 6.00226
      },
      "snow": {
        "3h": 0.0025
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 06:00:00"
    }, {
      "dt": 1541667600,
      "main": {
        "temp": 15.43,
        "temp_min": 15.43,
        "temp_max": 15.43,
        "pressure": 849.2,
        "sea_level": 1042.82,
        "grnd_level": 849.2,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.38,
        "deg": 0.502563
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 09:00:00"
    }, {
      "dt": 1541678400,
      "main": {
        "temp": 13.68,
        "temp_min": 13.68,
        "temp_max": 13.68,
        "pressure": 850.08,
        "sea_level": 1044.57,
        "grnd_level": 850.08,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.48,
        "deg": 334.5
      },
      "snow": {
        "3h": 0.005
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-08 12:00:00"
    }, {
      "dt": 1541689200,
      "main": {
        "temp": 19.42,
        "temp_min": 19.42,
        "temp_max": 19.42,
        "pressure": 851.35,
        "sea_level": 1045.65,
        "grnd_level": 851.35,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.61,
        "deg": 230
      },
      "snow": {
        "3h": 0.0125
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 15:00:00"
    }, {
      "dt": 1541700000,
      "main": {
        "temp": 39.93,
        "temp_min": 39.93,
        "temp_max": 39.93,
        "pressure": 851.2,
        "sea_level": 1040.94,
        "grnd_level": 851.2,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.6,
        "deg": 272.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 18:00:00"
    }, {
      "dt": 1541710800,
      "main": {
        "temp": 42.53,
        "temp_min": 42.53,
        "temp_max": 42.53,
        "pressure": 849.83,
        "sea_level": 1037.47,
        "grnd_level": 849.83,
        "humidity": 43,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }],
      "clouds": {
        "all": 20
      },
      "wind": {
        "speed": 8.95,
        "deg": 315.503
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-08 21:00:00"
    }, {
      "dt": 1541721600,
      "main": {
        "temp": 33.37,
        "temp_min": 33.37,
        "temp_max": 33.37,
        "pressure": 850.29,
        "sea_level": 1039.68,
        "grnd_level": 850.29,
        "humidity": 40,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 6.24,
        "deg": 307.003
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 00:00:00"
    }, {
      "dt": 1541732400,
      "main": {
        "temp": 20.86,
        "temp_min": 20.86,
        "temp_max": 20.86,
        "pressure": 851.49,
        "sea_level": 1044.37,
        "grnd_level": 851.49,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 291.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 03:00:00"
    }, {
      "dt": 1541743200,
      "main": {
        "temp": 14.34,
        "temp_min": 14.34,
        "temp_max": 14.34,
        "pressure": 851.53,
        "sea_level": 1045.88,
        "grnd_level": 851.53,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.13,
        "deg": 233.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 06:00:00"
    }, {
      "dt": 1541754000,
      "main": {
        "temp": 11.72,
        "temp_min": 11.72,
        "temp_max": 11.72,
        "pressure": 851.67,
        "sea_level": 1047.22,
        "grnd_level": 851.67,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.68,
        "deg": 257.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 09:00:00"
    }, {
      "dt": 1541764800,
      "main": {
        "temp": 10.92,
        "temp_min": 10.92,
        "temp_max": 10.92,
        "pressure": 851.98,
        "sea_level": 1048.67,
        "grnd_level": 851.98,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.71,
        "deg": 250.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-09 12:00:00"
    }, {
      "dt": 1541775600,
      "main": {
        "temp": 17.52,
        "temp_min": 17.52,
        "temp_max": 17.52,
        "pressure": 852.31,
        "sea_level": 1048.42,
        "grnd_level": 852.31,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.73,
        "deg": 249.507
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 15:00:00"
    }, {
      "dt": 1541786400,
      "main": {
        "temp": 40.77,
        "temp_min": 40.77,
        "temp_max": 40.77,
        "pressure": 851.05,
        "sea_level": 1040.72,
        "grnd_level": 851.05,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.72,
        "deg": 137.506
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 18:00:00"
    }, {
      "dt": 1541797200,
      "main": {
        "temp": 44.43,
        "temp_min": 44.43,
        "temp_max": 44.43,
        "pressure": 847.48,
        "sea_level": 1033.75,
        "grnd_level": 847.48,
        "humidity": 45,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.65,
        "deg": 144.501
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-09 21:00:00"
    }, {
      "dt": 1541808000,
      "main": {
        "temp": 34.01,
        "temp_min": 34.01,
        "temp_max": 34.01,
        "pressure": 845.4,
        "sea_level": 1032.98,
        "grnd_level": 845.4,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.88,
        "deg": 146.01
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 00:00:00"
    }, {
      "dt": 1541818800,
      "main": {
        "temp": 20.55,
        "temp_min": 20.55,
        "temp_max": 20.55,
        "pressure": 843.9,
        "sea_level": 1033.66,
        "grnd_level": 843.9,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.04,
        "deg": 241.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 03:00:00"
    }, {
      "dt": 1541829600,
      "main": {
        "temp": 16.55,
        "temp_min": 16.55,
        "temp_max": 16.55,
        "pressure": 842.13,
        "sea_level": 1032.2,
        "grnd_level": 842.13,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.74,
        "deg": 273.001
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 06:00:00"
    }, {
      "dt": 1541840400,
      "main": {
        "temp": 16.58,
        "temp_min": 16.58,
        "temp_max": 16.58,
        "pressure": 840.83,
        "sea_level": 1030.54,
        "grnd_level": 840.83,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03n"
      }],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 1.32,
        "deg": 291.503
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 09:00:00"
    }, {
      "dt": 1541851200,
      "main": {
        "temp": 15.27,
        "temp_min": 15.27,
        "temp_max": 15.27,
        "pressure": 839.97,
        "sea_level": 1029.43,
        "grnd_level": 839.97,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "02n"
      }],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 0.74,
        "deg": 240.505
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-10 12:00:00"
    }, {
      "dt": 1541862000,
      "main": {
        "temp": 21.63,
        "temp_min": 21.63,
        "temp_max": 21.63,
        "pressure": 840.74,
        "sea_level": 1029.14,
        "grnd_level": 840.74,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.84,
        "deg": 269.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 15:00:00"
    }, {
      "dt": 1541872800,
      "main": {
        "temp": 50,
        "temp_min": 50,
        "temp_max": 50,
        "pressure": 841.03,
        "sea_level": 1024.71,
        "grnd_level": 841.03,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 279.001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 18:00:00"
    }, {
      "dt": 1541883600,
      "main": {
        "temp": 52.57,
        "temp_min": 52.57,
        "temp_max": 52.57,
        "pressure": 840.48,
        "sea_level": 1022.53,
        "grnd_level": 840.48,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [{
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 3.62,
        "deg": 257.004
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-10 21:00:00"
    }, {
      "dt": 1541894400,
      "main": {
        "temp": 42.11,
        "temp_min": 42.11,
        "temp_max": 42.11,
        "pressure": 841.72,
        "sea_level": 1026.38,
        "grnd_level": 841.72,
        "humidity": 37,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 3.04,
        "deg": 189.002
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 00:00:00"
    }, {
      "dt": 1541905200,
      "main": {
        "temp": 34.54,
        "temp_min": 34.54,
        "temp_max": 34.54,
        "pressure": 842.83,
        "sea_level": 1031.46,
        "grnd_level": 842.83,
        "humidity": 50,
        "temp_kf": 0
      },
      "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }],
      "clouds": {
        "all": 80
      },
      "wind": {
        "speed": 7.43,
        "deg": 148.5
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 03:00:00"
    }, {
      "dt": 1541916000,
      "main": {
        "temp": 29.31,
        "temp_min": 29.31,
        "temp_max": 29.31,
        "pressure": 843,
        "sea_level": 1033.5,
        "grnd_level": 843,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.63,
        "deg": 123.509
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 06:00:00"
    }, {
      "dt": 1541926800,
      "main": {
        "temp": 19.93,
        "temp_min": 19.93,
        "temp_max": 19.93,
        "pressure": 842.52,
        "sea_level": 1033.83,
        "grnd_level": 842.52,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.25,
        "deg": 87.0027
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 09:00:00"
    }, {
      "dt": 1541937600,
      "main": {
        "temp": 15.65,
        "temp_min": 15.65,
        "temp_max": 15.65,
        "pressure": 842.01,
        "sea_level": 1033.38,
        "grnd_level": 842.01,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [{
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }],
      "clouds": {
        "all": 12
      },
      "wind": {
        "speed": 3.4,
        "deg": 329.502
      },
      "snow": {},
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2018-11-11 12:00:00"
    }, {
      "dt": 1541948400,
      "main": {
        "temp": 19.48,
        "temp_min": 19.48,
        "temp_max": 19.48,
        "pressure": 842.23,
        "sea_level": 1032.53,
        "grnd_level": 842.23,
        "humidity": 74,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.62,
        "deg": 301
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 15:00:00"
    }, {
      "dt": 1541959200,
      "main": {
        "temp": 40.79,
        "temp_min": 40.79,
        "temp_max": 40.79,
        "pressure": 842.27,
        "sea_level": 1026.95,
        "grnd_level": 842.27,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.91,
        "deg": 74.5001
      },
      "snow": {},
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2018-11-11 18:00:00"
    }],
    "city": {
      "id": 5579453,
      "name": "Lyons",
      "coord": {
        "lat": 40.2247,
        "lon": -105.2714
      },
      "country": "US",
      "population": 2033
    }
  }
}]