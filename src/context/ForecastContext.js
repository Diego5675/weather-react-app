import React, { useState } from "react";

const ForecastContext = React.createContext();

export const ForecastProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState(null);

  return (
    <ForecastContext.Provider
      value={{ loading, setLoading, error, setError, forecast, setForecast }}
    >
      {children}
    </ForecastContext.Provider>
  );
};

export const useForecastContext = () => {
  const context = React.useContext(ForecastContext);
  if (context === undefined) {
    throw new Error(
      "useForecastContext must be used within a ForecastProvider"
    );
  }
  return context;
};

export default ForecastContext;
