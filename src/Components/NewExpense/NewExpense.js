/* eslint-disable no-unused-vars */
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (expense) => {
    const expenseData = { ...expense, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setShowExpenseForm(false);
  };

  const showExpenseFormHandler = () => {
    setShowExpenseForm(true);
  };

  const closeExpenseForm = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpense={saveExpenseDataHandler}
          onCancel={closeExpenseForm}
        />
      )}
    </div>
  );
}
