import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";

const Expenses = props => {
    const [filteredYear, SetFilteredYear] = useState("All");

    const items = props.expenses
        .filter(expense => (filteredYear === "All" || expense.date.getFullYear() == filteredYear))
        .map(expense => {
            return (

            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        );
    });

    const yearSelectHandler = (year) => {
        SetFilteredYear(year);
    }
    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onSelectYear={yearSelectHandler}/>
            {items}
        </Card>
    );
};

export default Expenses;
