import React, { useState, useCallback } from "react";
import SearchForm from "components/SearchForm";
import HistorySearches from "components/HistorySearches";
import { useForecast } from "hooks/useForecast";

const SearchWeather = ({ onShowing }) => {
  const [query, setQuery] = useState(null);
  useForecast(query);

  const handleSubmit = useCallback(
    (location) => {
      setQuery(location);
      setTimeout(() => onShowing(), 0);
    },
    [onShowing]
  );

  const handleShowing = () => {
    onShowing();
  };

  return (
    <>
      <div>
        <button onClick={handleShowing}>X</button>
      </div>
      <SearchForm onSubmit={handleSubmit} />
      <HistorySearches onSubmit={handleSubmit} />
    </>
  );
};

export default SearchWeather;
