import React from "react";

const UpcomingDay = ({ date, condition, maxTemp, minTemp }) => {
  return (
    <div>
      <p>{date}</p>
      <img src="" alt={condition} />
      <p>
        <span>{maxTemp} °C</span>
        <span>{minTemp} °C</span>
      </p>
    </div>
  );
};

export default UpcomingDay;
