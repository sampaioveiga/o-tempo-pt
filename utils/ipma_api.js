export const fetchWeather = async globalIdLocal => {
  const response = await fetch(
    `http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`,
  );
  const { dataUpdate, data } = await response.json();
    
  return {
    dataUpdate: dataUpdate,
    todayForecast: data[0],
    tomorrowForecast: data[1],
    afterTomorrowForecast: data[2],
  };
};