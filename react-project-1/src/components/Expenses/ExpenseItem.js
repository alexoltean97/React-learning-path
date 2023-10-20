import React, { useState, useEffect } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ expenseDate, expenseValue, expenseAmount }) => {
  let [title, setTitle] = useState(expenseValue);
  useEffect(() => {
    setTitle(expenseValue);
  }, [expenseValue]);

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item ">
      <ExpenseDate date={expenseDate} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change something</button>
    </Card>
  );
};

export default ExpenseItem;
