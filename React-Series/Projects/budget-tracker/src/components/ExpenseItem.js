import React from 'react'
import { TiDelete } from 'react-icons/ti';

function ExpenseItem({name,cost}) {
  return (
    <li className='list-group-item d-flex justify-content-between '>
        {name}
        <span>Rs. {cost}
            <TiDelete size='1.5em'></TiDelete>
        </span>

    </li>
  )
}

export default ExpenseItem