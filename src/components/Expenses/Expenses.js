import "./Expenses.css";
import Card from "../UI/Card";
import React from "react";
import ExpensesFilter from "../ExpensesFilter/ExpenseFilter";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [yearr, setyearr] = useState("");
  const FilteredValues = (finalFilteredValues) => {
    setyearr(finalFilteredValues);
  };
  const filteredYear = props.items.filter(
    (item) => item.date.getFullYear().toString() === yearr
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onFilteredvalues={FilteredValues} />
      <ExpensesList items={filteredYear}></ExpensesList>
    </Card>
  );
};

export default Expenses;
