import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";
import { useState } from "react";

const INITIAL_EXPENSES = [
  { title: "Title 1", amount: 22, date: new Date("03-18-2021") },
  { title: "Title 2", amount: 33, date: new Date("03-18-2022") },
  { title: "Title 3", amount: 44, date: new Date("03-18-2023") },
  { title: "Title 4", amount: 55, date: new Date("03-18-2023") },
];

function App() {
  const [expenseList, setExpenseList] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenseList((prevList) => {
      return [...prevList, expense];
    });
  };
/*
  const filterHandler = (enteredYear) => {
    setExpenseList(
      expenseList.filter((item) => {
        return item.date.getFullYear().toString() == enteredYear;
      })
    );
  };*/

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/*<Expenses items={expenseList} onSetFilter={filterHandler} />*/}
      <Expenses items={expenseList} />
    </div>
  );
}

export default App;
