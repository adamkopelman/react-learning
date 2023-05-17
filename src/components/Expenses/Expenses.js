import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = props => {
    const expenses = props.expenses;
    const items = expenses.map(expense => {
        return (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        );
    });
    return <Card className="expenses">{items}</Card>;
};

export default Expenses;
