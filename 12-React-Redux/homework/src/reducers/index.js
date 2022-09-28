
import { ADD_MOVIE_FAVORITE, GET_MOVIES, REMOVE_MOVIE_FAVORITE, GET_MOVIE_DETAIL} from "../action-types"

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };


  function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    if (action.type === GET_MOVIES) {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }

    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
          ...state, 
          moviesFavourites: state.moviesFavourites.filter( (pelicula) => pelicula.id !== action.payload) //aca en el filter recorro todas las movies (m), y le pido que en la recorrida lea sus ID
        };                                                   //m.imdID (Es la forma en que la appi administra los ID) , y entonces le digo. : Mientras recorres, a la que tenga por ID --> Action.payloar (== al ID de la peli)                                          
    }                                                        // dejala pasar, cortala menos dias, no me la cuentes, fultrala! 
                                           // Por ser un filter  se usa !==  que sigfica, NO FILTRES A LOS IDS que NO son iguales a este. A el que sea IGUAL.-- FILTEEER y lo sacamo
   
    if (action.type === GET_MOVIE_DETAIL) {
      return {
        ...state,
        movieDetail: action.payload
      };
  }
 
  return state;    
 
  }
  
  export default rootReducer;