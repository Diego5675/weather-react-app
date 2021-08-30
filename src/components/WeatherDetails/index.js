import React from "react";
import Forecast from "components/Forecast";
import TodaysHighlights from "components/TodaysHighlights";

const WeatherDetails = ({ forecastDays, highlights }) => {
  return (
    <div>
      <div>
        <button>°C</button>
        <button>°F</button>
      </div>
      <Forecast forecastDays={forecastDays} />
      <TodaysHighlights highlights={highlights} />
    </div>
  );
};

export default WeatherDetails;
