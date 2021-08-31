import React, { useState } from "react";
import styles from "./SearchForm.module.css";

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
    <div className={styles.formContainer}>
      <div className={styles.inputContainer}>
        <span className={`${styles.searchIcon} material-icons`}>search</span>
        <form className={styles.formSearch} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search location"
            value={value}
            className={styles.input}
            onChange={handleChange}
          />
        </form>
      </div>
      <button className={styles.searchButton} onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default React.memo(SearchForm);
