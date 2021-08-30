import React from "react";

const CurrentWeather = ({
  unit,
  temperature,
  condition,
  iconUrl,
  date,
  location,
}) => {
  return (
    <div>
      <img src={iconUrl} alt={condition} />
      <p>
        <span>{temperature}</span>
        <span>°{unit}</span>
      </p>
      <p>{condition}</p>
      <p>
        <span>Today</span>
        <span>{date}</span>
      </p>
      <p>
        <span>Location_icon</span>
        <span>{location}</span>
      </p>
    </div>
  );
};

export default CurrentWeather;
