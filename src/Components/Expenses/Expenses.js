import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return <ExpenseItem key={expense.id} {...expense} />;
      })}
    </Card>
  );
}
