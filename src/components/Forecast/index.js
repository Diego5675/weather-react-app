import React from "react";
import UpcomingDay from "components/UpcomingDay";

const Forecast = ({ forecastDays }) => {
  return (
    <div>
      {forecastDays.map((day) => (
        <UpcomingDay
          key={day.date}
          date={day.date}
          condition={day.condition}
          iconUrl={day.icon_url}
          maxTemp={day.max_temp}
          minTemp={day.min_temp}
        />
      ))}
    </div>
  );
};

export default Forecast;
