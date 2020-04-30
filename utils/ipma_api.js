import * as disctricts_islands from './disctricts_islands.json';

export const fetchWeather = async globalIdLocal => {
  const response = await fetch(
    `http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`,
  );
  const { dataUpdate, data } = await response.json();
  const locationArray = disctricts_islands.data.filter(o => o.globalIdLocal === globalIdLocal);
  
  return {
    locationName: locationArray[0].local,
    dataUpdate: dataUpdate,
    todayData: data[0],
    tomorrowData: data[1],
    dayAfterData: data[2],
  };
};