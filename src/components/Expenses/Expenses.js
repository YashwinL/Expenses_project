import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React from "react";
import ExpensesFilter from "../ExpensesFilter/ExpenseFilter";
import { useState } from "react/cjs/react.development";
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
      {filteredYear.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
