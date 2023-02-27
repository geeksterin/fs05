import React, { useState } from 'react'

const initState = ['Bruce','Wayne']
export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState)
  const changeName = () => {
    // person[0] = 'Clark'
    // person[1] = 'Kent'
    // setPerson(person);

    const newPerson = [...person];
    newPerson[0] = 'Clark';
    newPerson[1] = 'Kent';
    setPerson(newPerson);
  }
  console.log('ObjectUseState Render')
  return (
    <div>
      <button onClick={changeName}>{person[0]} {person[1]}</button>
    </div>
  )
}