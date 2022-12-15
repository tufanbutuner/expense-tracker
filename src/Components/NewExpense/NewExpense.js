import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (expense) => {
    const expenseData = { ...expense, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
    </div>
  );
}
