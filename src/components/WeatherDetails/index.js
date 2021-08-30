import React from "react";
import Forecast from "components/Forecast";
import TodaysHighlights from "components/TodaysHighlights";
import Loader from "components/Loader";
import Error from "components/Error";
import { useForecastContext } from "context/ForecastContext";

const WeatherDetails = () => {
  const { loading, error, forecast } = useForecastContext();

  return (
    <div>
      <div>
        <button>°C</button>
        <button>°F</button>
      </div>
      {!forecast && (
        <>
          {loading && <Loader />}
          {error && <Error message={error} />}
        </>
      )}
      {forecast && (
        <>
          <Forecast forecastDays={forecast?.upcomingDaysForecast} />
          <TodaysHighlights highlights={forecast?.todaysHighlights} />
        </>
      )}
    </div>
  );
};

export default WeatherDetails;
