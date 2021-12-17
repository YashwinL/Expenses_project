import ExpensesForm from "./ExpensesForm";
import "./NewExpenses.css";
const NewExpenses = (props) => {
  const SavedChanges = (EnteredValues) => {
    const expenseData = {
      ...EnteredValues,
      id: Math.random().toString(),
    };
    props.GettingMain(expenseData);
  };
  return (
    <div className=" new-expense">
      <ExpensesForm onSaveValue={SavedChanges} />
    </div>
  );
};
export default NewExpenses;
