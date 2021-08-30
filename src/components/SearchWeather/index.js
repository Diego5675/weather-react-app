import React, { useState, useCallback } from "react";
import SearchForm from "components/SearchForm";
import { useForecast } from "hooks/useForecast";

const SearchWeather = () => {
  const [query, setQuery] = useState(null);
  useForecast(query);

  const handleSubmit = useCallback((location) => {
    setQuery(location);
  }, []);

  return (
    <>
      <div>
        <button>X</button>
      </div>
      <SearchForm onSubmit={handleSubmit} />
    </>
  );
};

export default SearchWeather;
