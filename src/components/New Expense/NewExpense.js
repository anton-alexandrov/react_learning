import "../css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isDisplayed, formIsDisplayed] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("In New Form");
    props.onAddExpense(expenseData);
  };

  const formDisplayed = () => {
    formIsDisplayed(true);
  };

  const cancelNewExpenseHandler = () =>{
    formIsDisplayed(false);
  }

  return (
    <div className="new-expense">
      <div className="new-expense__actions">
        {isDisplayed === false && (
          <div>
            <button type="submit" onClick={formDisplayed}>
              Add New expense
            </button>
          </div>
        )}
        {isDisplayed === true && (
          <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelNewExpenseHandler} />
          </div>
        )}
      </div>
    </div>
  );
};
export default NewExpense;
