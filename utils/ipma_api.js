export const fetchWeather = async globalIdLocal => {
  const response = await fetch(
    `http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`,
  );
  const { dataUpdate, data } = await response.json();
    
  return {
    dataUpdate: dataUpdate,
    todayData: data[0],
    tomorrowData: data[1],
    dayAfterData: data[2],
  };
};