import "../css/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../Card.js";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setYear] = useState();
  
  const filterChangeHandler = (year) => {
    setYear(year);
    //props.onSetFilter(year)
  };

  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() == selectedYear;
  })

  let expenseContent = <p>No expenses found</p>;
  if (filteredExpenses.length>0){
    expenseContent=filteredExpenses.map(expense=> 
      <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
      )
  }

  return (
    <Card className="expenses">
      <ExpenseFilter preselected={selectedYear} onChangeFilter={filterChangeHandler} />
      
      {expenseContent}
      
      { //option with ternary
      /*filteredExpenses.length==0 ? (<p>No expenses found</p>) : (
         filteredExpenses.map(expense=> 
          <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
          )
         ) */}
      {/*
      <ExpenseItem
        title='{props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>*/}
    </Card>
  );
}

export default Expenses;
