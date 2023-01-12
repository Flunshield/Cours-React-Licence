import React, { useReducer } from "react";
import '../Css/UseReducer.css';

export default function UseReducer() {

  function reducer(state: { age: number; }, action: { type: string; }) {
    switch (action.type) {
      case 'incremented_age':

        console.log("age avant l'ajout : ", state)
        return { age: state.age +1 }
      
        case 'decremented_age':

        console.log("age avant retrait : ", state)
        return { age: state.age -1 }
        
        default:

        console.log('je suis pas entré dans un case')

        return state

    }
  }

const [state, dispatch] = useReducer(reducer, { age: 42 });

console.log(state)
return (
  <div className="divClasseName">
  <h1>Test du <strong>useReducer</strong></h1>
  <p>Hello! You are {state.age}.</p>
    <button onClick={() => {
      dispatch({ type: 'incremented_age' })
    }}>
      Increment age
    </button>
    <button onClick={() => {
      dispatch({ type: 'decremented_age' })
    }}>
      Decrement age
    </button>
  </div>
);
}
