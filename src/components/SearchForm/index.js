import React, { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search location"
        value={value}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
};

export default React.memo(SearchForm);
