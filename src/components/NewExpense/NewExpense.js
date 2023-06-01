import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = props => {
    const [showFrom, setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        }
        props.onSaveExpense(expenseData);
    }

    return (
        <div className="new-expense">
            {showFrom && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCacelForm={() => setShowForm(false)}/>}
            {!showFrom && <button onClick={() => setShowForm(true)}>Add New Expense</button>}
        </div>
    );
}

export default NewExpense;
