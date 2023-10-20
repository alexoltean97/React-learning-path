import './ExpenseDate.css';
function ExpenseDate({ date }) {
    const year = date.getFullYear();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.getDate();
  
    return (
      <div className="expense-date">
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>
    );
  }
  
  export default ExpenseDate;