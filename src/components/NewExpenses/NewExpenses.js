import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";
import { useState } from "react";

const NewExpenses = (props) => {
  const SavedChanges = (EnteredValues) => {
    const expenseData = {
      ...EnteredValues,
      id: Math.random().toString(),
    };
    props.GettingMain(expenseData);
    setisediting(false);
  };
  const [isediting, setisediting] = useState(false);
  const editingHandler = () => {
    setisediting(true);
  };
  const canceledit = () => {
    setisediting(false);
  };
  return (
    <div className=" new-expense">
      {!isediting && <button onClick={editingHandler}>Add New Expense</button>}
      {isediting && (
        <ExpensesForm onSaveValue={SavedChanges} cancelhandler={canceledit} />
      )}
    </div>
  );
};
export default NewExpenses;
