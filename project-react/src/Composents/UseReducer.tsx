import React, { useReducer } from "react";
import '../Css/UseReducer.css';

export default function UseReducer() {

  function reducer(state: { age: number; }, action: { type: string; }) {
    switch (action.type) {
      case 'incremented_age':
        console.log("Age avant l'ajout : ", state)
        return { ...state, age: state.age + 1 }

      case 'decremented_age':
        console.log("Age avant retrait : ", state)
        return { ...state, age: state.age - 1 }

      default:
        console.log('Je suis pas entré dans un case')
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, { age: 0 });
  console.log(state)

  return (
    <div className="divClasseName">
      <h1>Test du <strong>useReducer</strong></h1>
      <p>Bonjour, vous avez {state.age} ans.</p>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Ajouter 1 an
      </button>
      <button onClick={() => {
        dispatch({ type: 'decremented_age' })
      }}>
        Retirer 1 an
      </button>
    </div>
  );
}
