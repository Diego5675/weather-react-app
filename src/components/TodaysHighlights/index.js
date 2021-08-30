import React from "react";
import Highlight from "components/Highlight";

const TodaysHighlights = ({ highlights }) => {
  return (
    <div>
      <h3>Today's Highlights</h3>
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
