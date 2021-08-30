import React from "react";

const Highlight = ({ name, value, unit, moreInfo }) => {
  return (
    <div>
      <p>{name}</p>
      <p>
        <span>{value}</span>
        <span>{unit}</span>
      </p>
      {name === "Wind status" && (
        <p>
          <span>Arrow_icon</span>
          {moreInfo.direction}
        </p>
      )}
      {name === "Humidity" && <p>Progress_bar</p>}
    </div>
  );
};

export default Highlight;
