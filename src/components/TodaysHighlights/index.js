import React from "react";
import Highlight from "components/Highlight";

const dummy = [
  {
    name: "Wind status",
    value: 0,
    unit: "mph",
    more_info: {
      direction: "N",
      degree: 300,
    },
  },
  {
    name: "Humidity",
    value: 0,
    unit: "%",
  },
  {
    name: "Visibility",
    value: new Intl.NumberFormat("es").format(1.5),
    unit: "miles",
  },
  {
    name: "Air Pressure",
    value: Math.round(5.8),
    unit: "mb",
  },
];

const TodaysHighlights = ({ highlights }) => {
  return (
    <div>
      <h3>Today's Highlights</h3>
      {dummy.map((highlight) => (
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
