import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default store;

// applyMiddleware=> Es el que me permite hacer llamados asincronos a Apis, por medio de REDUX
//compose => comvina todas las cosas externas de redux, que puedan llegar a colisionar. como por ejeplmlo el applymiddleware con el redux DEVTOOLS-EXTENCION.