import { getFormattedDate } from "./getFormattedDate";

export const getCurrentWeather = (location, current) => ({
  temperature_c: Math.round(current.temp_c),
  temperature_f: Math.round(current.temp_f),
  condition: current.condition.text,
  icon_url: current.condition.icon,
  date: getFormattedDate(),
  location: location.name,
});
