import "../css/NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {

const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData= {
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    console.log("In New Form");
    props.onAddExpense(expenseData);
}

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
export default NewExpense;