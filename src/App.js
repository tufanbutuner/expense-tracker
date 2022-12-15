import { useState } from "react";
import DUMMY_EXPENSE_DATA from "./Components/Expenses/DummyData";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE_DATA);

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
