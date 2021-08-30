import React from "react";
import UpcomingDay from "components/UpcomingDay";

const dummy = [
  {
    date: "2021-08-30",
    date_epoch: 1630281600,
    day: {
      maxtemp_c: 22.8,
      maxtemp_f: 73.0,
      mintemp_c: 12.1,
      mintemp_f: 53.8,
      avgtemp_c: 16.7,
      avgtemp_f: 62.1,
      maxwind_mph: 8.7,
      maxwind_kph: 14.0,
      totalprecip_mm: 0.0,
      totalprecip_in: 0.0,
      avgvis_km: 10.0,
      avgvis_miles: 6.0,
      avghumidity: 71.0,
      daily_will_it_rain: 0,
      daily_chance_of_rain: 0,
      daily_will_it_snow: 0,
      daily_chance_of_snow: 0,
      condition: {
        text: "Sunny",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000,
      },
      uv: 8.0,
    },
  },
];

const Forecast = ({ forecastDays }) => {
  return (
    <div>
      {dummy.map((day) => (
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
