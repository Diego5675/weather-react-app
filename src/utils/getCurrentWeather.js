import { getFormattedDate } from "./getFormattedDate";

export const getCurrentWeather = (location, current) => ({
  temperature: Math.round(current.temp_c),
  condition: current.condition.text,
  icon_url: current.condition.icon,
  date: getFormattedDate(),
  location: location.name,
});
