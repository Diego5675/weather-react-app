import React, { useState } from "react";
import SearchWeather from "components/SearchWeather";
import LocationWeather from "components/LocationWeather";
import WeatherDetails from "components/WeatherDetails";
import { useGeolocation } from "hooks/useGeolocation";
import { useForecast } from "hooks/useForecast";
import styles from "./App.module.css";

function App() {
  const [isSearching, setIsSearching] = useState(false);
  const { latitude, longitude } = useGeolocation();
  useForecast(latitude && `${latitude},${longitude}`);

  const handleShowing = () => {
    setIsSearching(!isSearching);
  };

  return (
    <div className={styles.app}>
      {isSearching ? (
        <SearchWeather onShowing={handleShowing} />
      ) : (
        <LocationWeather onShowing={handleShowing} />
      )}
      <WeatherDetails />
    </div>
  );
}

export default App;
