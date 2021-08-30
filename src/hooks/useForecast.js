import { useEffect } from "react";
import { useForecastContext } from "context/ForecastContext";
import { getForecast } from "services/getForecast";
import { getCurrentWeather } from "utils/getCurrentWeather";
import { getUpcomingDaysForecast } from "utils/getUpcomingDaysForecast";
import { getTodaysHighlights } from "utils/getTodaysHighlights";

const MAX_HISTORY_ITEMS = 5;

export const useForecast = (query) => {
  const { setLoading, setError, setForecast } = useForecastContext();

  useEffect(() => {
    if (!query) return;
    setLoading(true);

    getForecast(query).then((response) => {
      if (response === "Something went wrong") {
        setError(response);
        setLoading(false);
        return;
      }
      const { data } = response;
      const currentWeather = getCurrentWeather(data.location, data.current);
      const todaysHighlights = getTodaysHighlights(data.current);
      const upcomingDaysForecast = getUpcomingDaysForecast(
        data.forecast.forecastday
      );

      setForecast({ currentWeather, todaysHighlights, upcomingDaysForecast });
      setLoading(false);
      const historySearches =
        JSON.parse(localStorage.getItem("historySearches")) || [];

      if (!historySearches.includes(data.location.name)) {
        historySearches.push(data.location.name);
        historySearches.splice(
          -MAX_HISTORY_ITEMS - 1,
          historySearches.length - MAX_HISTORY_ITEMS
        );

        localStorage.setItem(
          "historySearches",
          JSON.stringify(historySearches)
        );
      }
    });
  }, [query, setError, setForecast, setLoading]);
};
