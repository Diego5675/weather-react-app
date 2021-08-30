import { getFormattedDate } from "./getFormattedDate";

export const getUpcomingDaysForecast = (forecastDays) => {
  return forecastDays.map((forecastDay) => ({
    date: getFormattedDate(forecastDay.date),
    condition: forecastDay.day.condition.text,
    icon_url: forecastDay.day.condition.icon,
    max_temp: Math.round(forecastDay.day.maxtemp_c),
    min_temp: Math.round(forecastDay.day.mintemp_c),
  }));
};
