import React from 'react'
import './ExpenseItem.css'
function ExpenseItem(props) {
  return (
    <div className="expenses">
        <h2>{props.title}</h2>
        <p>${props.price}</p>
        <h3>{props.date}</h3>
    </div>
  )
}

export default ExpenseItem