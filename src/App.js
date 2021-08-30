import React from "react";
import SearchWeather from "components/SearchWeather";
import LocationWeather from "components/LocationWeather";
import WeatherDetails from "components/WeatherDetails";
import { useGeolocation } from "hooks/useGeolocation";
import { useForecast } from "hooks/useForecast";
import "./App.css";

function App() {
  const { latitude, longitude } = useGeolocation();
  useForecast(latitude && `${latitude},${longitude}`);

  return (
    <div className="App">
      <SearchWeather />
      <LocationWeather />
      <WeatherDetails />
    </div>
  );
}

export default App;
