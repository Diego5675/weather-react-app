import React, { useState, useCallback } from "react";
import SearchForm from "components/SearchForm";
import HistorySearches from "components/HistorySearches";
import { useForecast } from "hooks/useForecast";
import styles from "./SearchWeather.module.css";

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
    <div className={styles.searchWeather}>
      <div className={styles.searchWrapper}>
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleShowing}>
            <span className="material-icons">close</span>
          </button>
        </div>
        <SearchForm onSubmit={handleSubmit} />
        <HistorySearches onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default SearchWeather;
