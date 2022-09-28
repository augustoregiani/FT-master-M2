// los componentes se suscriben al store de redux, y este puede leerlos, como ellos a ellos

// Dispatch, es el despachado de acciones, genera que el componente despache acciones que cambie las props que posee el store.




ACTIONS TYPES
// PRIMERO QUE NADA DEFINO COSAS
const ADD_TODO = 'ADD_TODO'         // ACA DEFINIMOS CUALES VAN A SER LA SACCIONES QUE VAMOS A DESPACHAR
const REMOVE_TODO = 'REMOVE_TODO';

const initialState = {    //--> estado inicial del ROOTreducer.
    todos: []
  }

//SEGUNDO --> creo el store. Este contiene el estado de la aplicacion.
//->Permite el acceso al estado via getState()
//->permite que el estado sea actualizado via dispactch(action)
//->Registra los listeners via subscribe (listener)


// imports
import { createStor } from 'redux'
import todoApp from './reducers'

const store = createStore(rootReducer);

//Tercerro:

// Entonces el Flujo es:


// 1) Un componente se suscribe: (o en este caso un MODULO)
//aca subscribooooo -- y por lo tanto LEEO a informacion que posee el State || ESTO ES LO QUE SE ME MUESTRA LOS ESTADOS EN CONSOLA DESPUES DE UN NODE todos.js
var contador = 0
store.subscribe(() => {  //aca me suscribo con el contador.
  console.log(`Subscription: ${contador}`, store.getState()); //getState--> es el metodo que muestra como esta todo el estado
  contador ++
});




// 2)llamo al store, y me traigo las acciones que puedo despachar, siempre que quiera despacchar una accion, le tengo que poner 
// cual es la accion que quiero despachar con --AddTodo--, con la informacion necesaria para que haga lo que tenga que hacer -'Comprar pan'-

/// si haces un dispatch -- despachas la accion que va a MODIFICAR el state
store.dispatch(addTodo('Comprar pan'))  //esl dispatch recibe una funcion addtodo que es una accion creator que modifica el store.
store.dispatch(addTodo('Correr'))
store.dispatch(removeTodo(1))

console.log(store.getState());

//  ACTION CREATORS
// 3) Se despacha esa accion y pasa la funcion que posee la accion. 
function addTodo(text) {       //
return {                       //   la funcion que genera la ACCION, me retorna
        type: ADD_TODO,        //  un action con un "type" y un "payload" 
        payload: text          //  
      }                        //   type me indica el tipo de accion que es. Type: ADD_TODO
  }                            //   y el payload lo que es (?) un texto
                               //
  function removeTodo(index) { //
    return {                    //
      type: REMOVE_TODO,        //
      payload: index            //
    }
  }



//REDUCERS estas son las acciones que describen que algo paso, pero no especifican como cambio el estado de la aplicacion enrespuesta. Osea no conyevan logica
// 4) inmediatamente despues de eso se llama al REDUCER (rootReducer) que recime state (el estado incial en el que se encuentra) y la action (que posee el typle y el peyload)

const rootReducer = (state = initialState, action) => {    
    switch(action.type) {        //action.type => aca esa trayendo el nombre de la accion para hacer la busqueda 
      case ADD_TODO:  //en este caso la accion es ADD_TODO que ejecute lo de abajo que no es mas que agregar la informaicon seteada en el store.
      return { 
        todos: [...state.todos, action.payload] // y aca llamamos a todos los ToDos que teniamos antes, y agregamos un nuevo ToDoo que viene en el action.payload (action viene como argumento)
      }
      case REMOVE_TODO:   //En el caso de que el action.type sea "REMOVE_TODO"
      return {
        todos: state.todos.filter((text, i) => i !== action.payload) //retornamos UN NUEVO OBJETO en donde, va a tener una propiedad todos (state.todos) a la cual le aplicamos un FILTERT
      }                                                               // que lo que hace es decir, bueno, todos los states.todos que tengan .
      default:
        return state;
      }
    }

    //con esto se modifica el state.


    // 5) entonces por ultimo, se vuelve a modificar el subscribe, mediante el cual el store le avisa a todos los componentes o modulos que se modifico el state del elemento
    // que en nuestro caso, le mandamos un console.log para mostrar que es lo que paso con cada uno de los dispatch que hicimos

    var contador = 0// este contador lo monto para cuantificar en el ejempli los numeros de las subscripcciones realizadas
      store.subscribe(() => {   //aca suscrbribo la modificacion al store
      console.log(`Subscription: ${contador}`, store.getState()); //getState--> es el metodo que muestra como esta todo el estado
      contador ++                /// em este caso mandamos un console log, pero tambien podriamos mandar una accion o fucnion a detectar un cambio.
      });


    store.subscribe() //--> el suscribe por lo general se manda asi solo.



    