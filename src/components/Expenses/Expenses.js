import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

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

    const [filteredYear, SetFilteredYear] = useState("");

    const yearSelectHandler = (year) => {
        SetFilteredYear(year);
    }
    return (
        <Card className="expenses">
            <ExpenseFilter onSelectYear={yearSelectHandler}/>
            {items}
        </Card>
    );
};

export default Expenses;
