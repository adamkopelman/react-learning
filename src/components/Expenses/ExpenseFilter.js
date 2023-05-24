import "./ExpensesFilter.css"

const ExpenseFilter = props => {
    const options = [2019, 2020, 2021, 2022].map(
        number => {
            return <option value={number}>{number}</option>
        });
    options.push((<option selected hidden>filter year</option>));

    const yearSelectedHandler = (event) => {
        props.onSelectYear(event.target.value)
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={yearSelectedHandler}>
                    {options}
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter