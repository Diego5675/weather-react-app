import React from "react";
import CurrentWeather from "components/CurrentWeather";
import { useForecastContext } from "context/ForecastContext";

const LocationWeather = () => {
  const { forecast } = useForecastContext();

  return (
    <>
      <div>
        <button>Search for places</button>
        <button>Geolocation</button>
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
