import React from "react";
import UpcomingDay from "components/UpcomingDay";
import { useForecastContext } from "context/ForecastContext";

const Forecast = ({ forecastDays }) => {
  const { unitTemperature } = useForecastContext();

  return (
    <div>
      {forecastDays.map((day) => (
        <UpcomingDay
          key={day.date}
          unit={unitTemperature}
          date={day.date}
          condition={day.condition}
          iconUrl={day.icon_url}
          maxTemp={unitTemperature === "C" ? day.max_temp_c : day.max_temp_f}
          minTemp={unitTemperature === "C" ? day.min_temp_c : day.min_temp_f}
        />
      ))}
    </div>
  );
};

export default Forecast;
