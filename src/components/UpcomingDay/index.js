import React from "react";
import styles from "./UpcomingDay.module.css";

const UpcomingDay = ({ unit, date, condition, iconUrl, maxTemp, minTemp }) => {
  return (
    <div className={styles.upComingDay}>
      <p className={styles.date}>{date}</p>
      <img src={iconUrl} alt={condition} className={styles.icon} />
      <p className={styles.maxmin}>
        <span>
          {maxTemp}°{unit}
        </span>
        <span className={styles.min}>
          {minTemp}°{unit}
        </span>
      </p>
    </div>
  );
};

export default UpcomingDay;
