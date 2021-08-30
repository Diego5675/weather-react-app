import React from "react";

const HistorySearches = ({ onSubmit }) => {
  const historySearches =
    JSON.parse(localStorage.getItem("historySearches")) || [];

  return historySearches.map((item) => (
    <button key={item} onClick={() => onSubmit(item)}>
      {item}
    </button>
  ));
};

export default HistorySearches;
