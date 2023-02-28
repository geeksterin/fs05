import React,{useReducer} from 'react'


const initialState = 0;

function reducer(state,action){
  console.log('state and action',state,action);
  switch(action.type){
    case 'increment':
      return state+1;
    case 'decrement':
      return state-1;
    case 'reset':
      return action.initialState;
    default:
      return state;
  }
}

function UseReducer() {

  const [count, dispatch] = useReducer(reducer,initialState);
  return (
    <div>
        Count: {count}
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default UseReducer