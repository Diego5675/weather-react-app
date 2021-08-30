import axios from "axios";
const API_URL = "https://api.weatherapi.com/v1/forecast.json";

export const getForecast = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: process.env.REACT_APP_WEATHER_API_KEY,
        query,
        days: 5,
      },
    });

    return response;
  } catch (error) {
    return "Something went wrong";
  }
};
