/* eslint-disable no-unused-vars */
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "../Expenses/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <Card className="expenses">
        {filteredExpenses.map((expense) => {
          return <ExpenseItem key={expense.id} {...expense} />;
        })}
      </Card>
    </>
  );
}
