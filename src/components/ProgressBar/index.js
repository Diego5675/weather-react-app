import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className={styles.progressBar}>
      <p className={styles.textPercentages}>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </p>
      <div className={styles.progress100}>
        <div
          style={{ width: `${percentage}%` }}
          className={styles.progressPercentage}
        ></div>
      </div>
      <p className={styles.unit}>
        <span>%</span>
      </p>
    </div>
  );
};

export default ProgressBar;
