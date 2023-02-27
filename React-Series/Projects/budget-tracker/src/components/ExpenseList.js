import React from 'react'
import ExpenseItem from './ExpenseItem';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function ExpenseList() {

  const {expenses} = useContext(AppContext);
  return (
    <>
        <h2>Expenses:</h2>
        <ul className='list-group'>
           {expenses.map((item)=>{
                return <ExpenseItem name={item.name} cost={item.cost}></ExpenseItem>
           })}
        </ul>
    </>
  )
}

export default ExpenseList