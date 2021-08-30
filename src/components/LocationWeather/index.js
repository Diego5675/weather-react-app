import React from "react";
import CurrentWeather from "components/CurrentWeather";

const LocationWeather = () => {
  return (
    <>
      <div>
        <button>Search for places</button>
        <button>Geolocation</button>
      </div>
      <CurrentWeather />
    </>
  );
};

export default LocationWeather;
