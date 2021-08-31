import React, { useState, useCallback } from "react";
import CurrentWeather from "components/CurrentWeather";
import { useForecastContext } from "context/ForecastContext";
import { useForecast } from "hooks/useForecast";
import styles from "./LocationWeather.module.css";

const LocationWeather = ({ onShowing }) => {
  const { unitTemperature, forecast } = useForecastContext();
  const [query, setQuery] = useState(null);
  useForecast(query);

  const handleGeolocation = useCallback(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setQuery(`${position.coords.latitude},${position.coords.longitude}`);
      });
    } else {
      alert("Geolocation disable");
    }
  }, []);

  const handleShowing = () => {
    onShowing();
  };

  return (
    <div className={styles.locationWeather}>
      <div className={styles.locationButtons}>
        <button className={styles.searchPlacesButton} onClick={handleShowing}>
          Search for places
        </button>
        <button className={styles.locationButton} onClick={handleGeolocation}>
          <span class="material-icons">my_location</span>
        </button>
      </div>
      {forecast && (
        <CurrentWeather
          unit={unitTemperature}
          temperature={
            unitTemperature === "C"
              ? forecast?.currentWeather?.temperature_c
              : forecast?.currentWeather?.temperature_f
          }
          condition={forecast?.currentWeather?.condition}
          iconUrl={forecast?.currentWeather?.icon_url}
          date={forecast?.currentWeather?.date}
          location={forecast?.currentWeather?.location}
        />
      )}
    </div>
  );
};

export default LocationWeather;
