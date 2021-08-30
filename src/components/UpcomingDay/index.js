import React from "react";

const UpcomingDay = ({ date, condition, iconUrl, maxTemp, minTemp }) => {
  return (
    <div>
      <p>{date}</p>
      <img src={iconUrl} alt={condition} />
      <p>
        <span>{maxTemp} °C</span>
        <span>{minTemp} °C</span>
      </p>
    </div>
  );
};

export default UpcomingDay;
