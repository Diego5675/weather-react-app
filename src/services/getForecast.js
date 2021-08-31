import axios from "axios";
const API_URL = "https://api.weatherapi.com/v1/forecast.json";

export const getForecast = (query) => {
  return axios
    .get(API_URL, {
      params: {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        query,
        days: 5,
      },
    })
    .then((response) => {
      const { data } = response;
      return { data };
    })
    .catch((e) => {
      const { data } = e.response;
      const { error } = data;
      return { error };
    });
};
