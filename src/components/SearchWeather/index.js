import React, { useState, useCallback } from "react";
import SearchForm from "components/SearchForm";
import { useForecast } from "hooks/useForecast";

const SearchWeather = ({ onShowing }) => {
  const [query, setQuery] = useState(null);
  useForecast(query);

  const handleSubmit = useCallback((location) => {
    setQuery(location);
  }, []);

  const handleShowing = () => {
    onShowing();
  };

  return (
    <>
      <div>
        <button onClick={handleShowing}>X</button>
      </div>
      <SearchForm onSubmit={handleSubmit} />
    </>
  );
};

export default SearchWeather;
