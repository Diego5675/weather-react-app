import React from "react";
import styles from "./HistorySearches.module.css";

const HistorySearches = ({ onSubmit }) => {
  const historySearches =
    JSON.parse(localStorage.getItem("historySearches")) || [];

  return historySearches.map((item) => (
    <button
      key={item}
      className={styles.buttonHistory}
      onClick={() => onSubmit(item)}
    >
      <span>{item}</span>
      <span className={`${styles.historyIcon} material-icons`}>
        navigate_next
      </span>
    </button>
  ));
};

export default HistorySearches;
