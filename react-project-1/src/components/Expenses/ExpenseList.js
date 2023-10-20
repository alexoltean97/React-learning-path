import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.items.length > 0) {
    expensesContent = props.items.map((expense, index) => (
      <ExpenseItem
        key={index}
        expenseValue={expense.title}
        expenseAmount={expense.amount}
        expenseDate={expense.date}
      />
    ));
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpenseList;
