import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

import { useState } from "react/cjs/react.development";

const DUMMY = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  //   return (
  //     <div>
  //       <h2>Let's get started!</h2>
  //       <Expenses item={expenses}></Expenses>
  //     </div>
  //   );
  // }
  const [Expenses1, setExpenses] = useState(DUMMY);

  const ExpenseinMain = (expensemain) => {
    setExpenses((preExpenses1) => {
      return [expensemain, ...preExpenses1];
    });
  };

  return (
    <div>
      <NewExpenses GettingMain={ExpenseinMain} />

      <Expenses items={Expenses1} />
    </div>
  );
}
export default App;
