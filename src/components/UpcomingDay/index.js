import React from "react";

const UpcomingDay = ({ unit, date, condition, iconUrl, maxTemp, minTemp }) => {
  return (
    <div>
      <p>{date}</p>
      <img src={iconUrl} alt={condition} />
      <p>
        <span>
          {maxTemp}°{unit}
        </span>
        <span>
          {minTemp}°{unit}
        </span>
      </p>
    </div>
  );
};

export default UpcomingDay;
