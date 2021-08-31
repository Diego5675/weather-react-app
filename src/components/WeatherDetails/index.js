import React from "react";
import Forecast from "components/Forecast";
import TodaysHighlights from "components/TodaysHighlights";
import Loader from "components/Loader";
import Error from "components/Error";
import { useForecastContext } from "context/ForecastContext";
import styles from "./WeatherDetails.module.css";

const WeatherDetails = () => {
  const { unitTemperature, setUnitTemperature, loading, error, forecast } =
    useForecastContext();

  const changeToFahrenheit = () => {
    setUnitTemperature("F");
  };

  const changeToCelsius = () => {
    setUnitTemperature("C");
  };

  return (
    <div className={styles.weatherDetails}>
      <div className={styles.unitTempButtons}>
        <button
          className={
            unitTemperature === "C"
              ? styles.activeTempButton
              : styles.inactiveTempButton
          }
          onClick={changeToCelsius}
        >
          °C
        </button>
        <button
          className={
            unitTemperature === "F"
              ? styles.activeTempButton
              : styles.inactiveTempButton
          }
          onClick={changeToFahrenheit}
        >
          °F
        </button>
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
