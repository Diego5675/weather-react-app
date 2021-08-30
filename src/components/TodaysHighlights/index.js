import React from "react";
import Highlight from "components/Highlight";

const TodaysHighlights = ({ highlights }) => {
  return (
    <div>
      {highlights.map((highlight) => (
        <Highlight
          title={highlight.name}
          value={highlight.value}
          unit={highlight.unit}
          optional={highlight.optional}
        />
      ))}
    </div>
  );
};

export default TodaysHighlights;
