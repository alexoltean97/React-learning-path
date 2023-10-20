import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense.js";
import ExpenseFilter from "./components/Expenses/ExpenseFilter.js";
import ExpenseList from "./components/Expenses/ExpenseList.js";
import ExpensesChart from "./components/Expenses/ExpensesChart.js";

const DUMMY_EXPENSES = [
  {
    id: Math.random().toString(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: Math.random().toString(),
    title: "Car Repairs",
    amount: 295.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: Math.random().toString(),
    title: "Car Idk",
    amount: 296.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: Math.random().toString(),
    title: "Car Idk",
    amount: 296.67,
    date: new Date(2021, 2, 28),
  },
];

// import React from 'react';
function App(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filterInfoText, setFilterInfoText] = useState("2019, 2021 & 2022");

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    if ((selectedYear = "2019")) {
      setFilterInfoText("2020, 2021, 2022");
    } else if ((selectedYear = "2020")) {
      setFilterInfoText("2019, 2021 & 2022");
    } else if (selectedYear === "2021") {
      setFilterInfoText("2019, 2021 & 2022");
    }
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="parent">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <div>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses} />
      </div>
      <p>Data for years {filterInfoText} is hidden.</p>

      <ExpenseList items={filteredExpenses} />
    </div>
  );

  // return React.createElement(
  //   'div',
  //    {},
  //     React.createElement('h2', {}, ''),
  //     React.createElement(ExpenseItem, {expense: expenses})
  // )
}

export default App;
