import React from "react";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({
  unit,
  temperature,
  condition,
  iconUrl,
  date,
  location,
}) => {
  return (
    <div className={styles.currentWeather}>
      <img src={iconUrl} alt={condition} className={styles.currentImage} />
      <p className={styles.temperatureContainer}>
        <span className={styles.temperature}>{temperature}</span>
        <span className={styles.unit}>°{unit}</span>
      </p>
      <p className={styles.condition}>{condition}</p>
      <p className={styles.today}>
        <span>Today</span>
        <span className={styles.date}>{date}</span>
      </p>
      <p className={styles.locationContainer}>
        <span class="material-icons">place</span>
        <span className={styles.location}>{location}</span>
      </p>
    </div>
  );
};

export default CurrentWeather;
