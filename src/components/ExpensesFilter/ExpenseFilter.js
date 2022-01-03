import React from "react";
import { useState } from "react/cjs/react.development";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [EnteredYear, setEnteredYear] = useState("");
  const selectedYear = (event) => {
    setEnteredYear(event.target.value);
  };

  props.onFilteredvalues(EnteredYear);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
