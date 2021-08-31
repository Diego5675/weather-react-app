import React from "react";
import styles from "./Highlight.module.css";

const Highlight = ({ name, value, unit, moreInfo }) => {
  return (
    <div className={styles.highlight}>
      <p className={styles.name}>{name}</p>
      <p className={styles.valueContainer}>
        <span className={styles.value}>{value}</span>
        <span className={styles.unit}>{unit}</span>
      </p>
      {name === "Wind status" && (
        <p className={styles.windDirection}>
          <span
            style={{ transform: `rotate(${moreInfo.degree}deg)` }}
            className={`material-icons md-14 ${styles.windIcon}`}
          >
            navigation
          </span>
          <span className={styles.windText}>{moreInfo.direction}</span>
        </p>
      )}
      {name === "Humidity" && <p>Progress_bar</p>}
    </div>
  );
};

export default Highlight;
