import React, { useState, useCallback } from "react";
import CurrentWeather from "components/CurrentWeather";
import { useForecastContext } from "context/ForecastContext";
import { useForecast } from "hooks/useForecast";

const LocationWeather = ({ onShowing }) => {
  const { forecast } = useForecastContext();
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
    <>
      <div>
        <button onClick={handleShowing}>Search for places</button>
        <button onClick={handleGeolocation}>Geolocation</button>
      </div>
      {forecast && (
        <CurrentWeather
          temperature={forecast?.currentWeather?.temperature}
          condition={forecast?.currentWeather?.condition}
          iconUrl={forecast?.currentWeather?.icon_url}
          date={forecast?.currentWeather?.date}
          location={forecast?.currentWeather?.location}
        />
      )}
    </>
  );
};

export default LocationWeather;
