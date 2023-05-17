import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = props => {
    const expenses = props.expenses;
    const items = expenses.map(expense => {
        return (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )
    })
    return (
        <div className="expenses">
            {items}
        </div>
    )
}

export default Expenses;