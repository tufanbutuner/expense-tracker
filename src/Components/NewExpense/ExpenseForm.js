/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleTitleChange = (event) => {
    setData({ ...data, title: event.target.value });
  };

  const handleAmountChange = (event) => {
    setData({ ...data, amount: event.target.value });
  };

  const handleDateChange = (event) => {
    setData({ ...data, date: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: data.title,
      amount: +data.amount,
      date: new Date(data.date),
    };

    props.onSaveExpense(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={data.title} onChange={handleTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={data.amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={data.date}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
