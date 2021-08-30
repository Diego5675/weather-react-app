import { getFormattedDate } from "./getFormattedDate";

export const getUpcomingDaysForecast = (forecastDays) => {
  return forecastDays.map((forecastDay) => ({
    date: getFormattedDate(forecastDay.date),
    condition: forecastDay.day.condition.text,
    icon_url: forecastDay.day.condition.icon,
    max_temp_c: Math.round(forecastDay.day.maxtemp_c),
    min_temp_c: Math.round(forecastDay.day.mintemp_c),
    max_temp_f: Math.round(forecastDay.day.maxtemp_f),
    min_temp_f: Math.round(forecastDay.day.mintemp_f),
  }));
};
