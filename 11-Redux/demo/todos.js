const redux = require('redux');// -----> primero se importa REDUX COMO ES BACKEND, NO SE PUEDE USAR EL IMPORT.

const createStore = redux.createStore;  //CON ESTOS DOS CREAMOS EL STORE DE REDUX -------------********************

const ADD_TODO = 'ADD_TODO'         // ACA DEFINIMOS CUALES VAN A SER LA SACCIONES QUE VAMOS A DESPACHAR
const REMOVE_TODO = 'REMOVE_TODO';  //


const initialState = {    //--> estado inicial del ROOTreducer.
  todos: []
}
//Puede tener 1 o varios REDUCER
const rootReducer = (state = initialState, action) => {    //--> estos reducer son los que me permiten modificar el store, osea el estado de REDUX
  switch(action.type) {        //action.type => el type es el elemento que habiamos agregado, como nombre para indicar una accion en el accion creator (estonces con TYPE, preguntamos cual es el tipo de accion a realizar)
    case ADD_TODO:  //en este caso la accion es ADD_TODO
    return { 
      todos: [...state.todos, action.payload] // y aca llamamos a todos los ToDos que teniamos antes, y agregamos un nuevo ToDoo que viene en el action.payload (action viene como argumento)
    }
    case REMOVE_TODO:   //En el caso de que el action.type sea "REMOVE_TODO"
    return {
      todos: state.todos.filter((text, i) => i !== action.payload) //retornamos UN NUEVO OBJETO en donde, va a tener una propiedad todos (state.todos) a la cual le aplicamos un FILTERT
    }                                                               // que lo que hace es decir, bueno, todos los states.todos que tengan el indice "i" SACALOS.
    default:
      return state;
    }
  }
  
  
const store = createStore(rootReducer); //aca creo la BODEGA DEl store con el createStore, enciadoles el rootReducer linea13)
                                                  //si estso fueran componentes, directamente importo los mismos aca adentro.
  
  
  //ACTIONS CREATORS---------------------------------------------------------
  function addTodo(text) {
    return {
      type: ADD_TODO,
    payload: text
  }
}

function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}
//aca subscribooooo -- y por lo tanto LEEO a informacion que posee el State || ESTO ES LO QUE SE ME MUESTRA LOS ESTADOS EN CONSOLA DESPUES DE UN NODE todos.js
var contador = 0
store.subscribe(() => {  //aca me suscribo con el contador.
  console.log(`Subscription: ${contador}`, store.getState()); //getState--> es el metodo que muestra como esta todo el estado
  contador ++
});

/// si haces un dispatch -- despachas la accion que va a MODIFICAR el state
store.dispatch(addTodo('Comprar pan'))  //esl dispatch recibe una funcion addtodo que es una accion creator que modifica el store.
store.dispatch(addTodo('Correr'))
store.dispatch(removeTodo(1))

console.log(store.getState());


// const initialState = {    //--> estado inicial del ROOTreducer.
//   vacas: []
// }
//                                                             //Puede tener 1 o varios REDUCER
// const reducerVacas = (state = initialState, action) => {    //--> estos reducer son los que me permiten modificar el store, osea el estado de REDUX
//   switch(action.type) {
//     case ADD_TODO:
//       return {
//         todos: [...state.todos, action.payload]
//       }
//     case REMOVE_TODO:
//       return {
//         todos: state.todos.filter((text, i) => i !== action.payload)
//       }
//     default:
//       return state;
//   }
// }


// const initialState = {    //--> estado inicial del ROOTreducer.
//   pollitos: []
// }
//                                                             //Puede tener 1 o varios REDUCER
// const reducerPollitos  = (state = initialState, action) => {    //--> estos reducer son los que me permiten modificar el store, osea el estado de REDUX
//   switch(action.type) {
//     case ADD_TODO:
//       return {
//         todos: [...state.todos, action.payload]
//       }
//     case REMOVE_TODO:
//       return {
//         todos: state.todos.filter((text, i) => i !== action.payload)
//       }
//     default:
//       return state;
//   }
// }

// const initialState = {    //--> estado inicial del ROOTreducer.
//   caballos: []
// }
//                                                             //Puede tener 1 o varios REDUCER
// const reducerCaballos = (state = initialState, action) => {    //--> estos reducer son los que me permiten modificar el store, osea el estado de REDUX
//   switch(action.type) {
//     case ADD_TODO:
//       return {
//         todos: [...state.todos, action.payload]
//       }
//     case REMOVE_TODO:
//       return {
//         todos: state.todos.filter((text, i) => i !== action.payload)
//       }
//     default:
//       return state;
//   }
// }
