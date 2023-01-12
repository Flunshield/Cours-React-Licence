React

Introduction :

Le JSX n'est pas de l'HTML, les fonctions retournent du jsx.
JSX regroupe du html du css et du javascript.

Utilie :  destructuration, opérator, 

# Lundi : 
TP JS

# Mardi :

La logique dans le composant parent et l'affichage dans le composant enfant.

Avant de commencer a coder, il faut découper l'application en composant de manière a identifer plus facilement les composants à créer.


## Appel API


.then dans un fetch permet de gérer le retour d'un API.

Exemple pour un **GET** :
``` js
    const [listPlayer, setlistPlayer] = useState<ListPlayer[]>([])

    const [isUse, setIsUse] = useState(false)

    const [isPlayerLoading, setisPlayerLoading] = useState(false)

    const API_LINK = "https://localhost:7148/getAllHeroes"

    const fetchData = async () => {

      await fetch(API_LINK, {

        method: 'GET'

      })

      .then((res) => res.json())

      .then((result: ListPlayer[]) => {

        setlistPlayer(result);

        setisPlayerLoading(true)

      });

  }
```

Important : Tout cez qui sort de la fonction DOM est un effet de bord, par exemple, requete HTTP.
Si nous manipulon le DOM en dehors de cadre de react.

React fournit un hook qui eprmet de gérer les effets de bord : UseEffect 
[] => Tableau de dépendance, permet d'effectuer la modification d'un élément du code en fonction de la dépendance.

Les hooks ne fonctionne que dans les fonction, pas dans les classes.
Les hooks remplacent la casi totalité de react a ses début.

### Composant react exemple

``` jsx
export const MyAppContextProvider = ({children}) => {

  

    const myReducer = (state, action) => {

        switch (action.type) {

            case 'MODFIY_TEST_STRING':

                console.log('je suis entré dans MODFIY_TEST_STRING')

                return {...state, test: action.payload}

            default:

                console.log('je suis pas entré dans un case')

                return state

        }

    }

  

    const [state, dispatch] = useReducer(myReducer, {test: 'myString'})

  
  

    return (

        <myAppContext.Provider value={{

            state: state,

            dispatch: dispatch,

        }}>

            {children}

        </myAppContext.Provider>

    )

}
```

La fonction **myReducer** retourne du jsx.
Nous reconnaisons que c'est unee fonction de part sa structure.

``` jsx
    const myReducer = (state, action) => {

        switch (action.type) {

            case 'MODFIY_TEST_STRING':

                console.log('je suis entré dans MODFIY_TEST_STRING')

                return {...state, test: action.payload}

            default:

                console.log('je suis pas entré dans un case')

                return state

        }
```

la fonction myReducer prend en paramètre  "state, action".

Elle créer une copie de state et vient la mettre à jour avec la nouvelle valeur (elle écrase la valeur précédente)

spreadOpérator = [... Objet]

useReducer = même but qu'un useState. Gérer l'état local.

useState convient quand l'état doit être gérer de façon très simple, cependant, lorsque l'objet se complexifi, useReducer 

useReducer gère la mise à jour d'état de variable complexe.

``` jsx
     * An alternative to `useState`.
     *
     * `useReducer` is usually preferable to `useState` when you have complex state 
     * logic that involves
     * multiple sub-values. It also lets you optimize performance for components that
     * trigger deep
     * updates because you can pass `dispatch` down instead of callbacks.
```

Pour fonctionner, il a besoin de 2 paratères :
==> Une fonction de type reducer et une valeur initial.

```jsx
        const myReducer = (state, action) => {

        switch (action.type) {

            case 'MODFIY_TEST_STRING':

                console.log('je suis entré dans MODFIY_TEST_STRING')

                return {...state, test: action.payload}

            default:

                console.log('je suis pas entré dans un case')

                return state

        }

    
    const [state, dispatch] = useReducer(myReducer, {test: 'myString'})
    
    const myHandler = () => {

        dispatch({type: 'MODFIY_TEST_STRING', payload: 'nouvelle valeur'})

    }
```

En utilisant le useReducer va écouter automatique les dispatchs de l'appli.

Exemple en tsx :

```tsx
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
```

## React Router


