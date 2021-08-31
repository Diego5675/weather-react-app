import React from "react";
import Highlight from "components/Highlight";
import styles from "./TodaysHighlights.module.css";

const TodaysHighlights = ({ highlights }) => {
  return (
    <div className={styles.todaysHighlights}>
      <h3 className={styles.title}>Today's Highlights</h3>
      {highlights.map((highlight) => (
        <Highlight
          key={highlight.name}
          name={highlight.name}
          value={highlight.value}
          unit={highlight.unit}
          moreInfo={highlight.more_info}
        />
      ))}
    </div>
  );
};

export default TodaysHighlights;
