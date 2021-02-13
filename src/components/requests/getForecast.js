import axios from "axios";

const getForecast = (
  searchText,
  setForecasts,
  setLocation,
  setSelectedDate
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
  });
};

export default getForecast;
