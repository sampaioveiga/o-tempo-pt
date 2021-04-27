export const fetchForecast = async globalIdLocal => {
  const response = await fetch(
    `http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`,
  );
  const { dataUpdate, data } = await response.json();
  
  return {
    dataUpdate,
    data,
  };
};