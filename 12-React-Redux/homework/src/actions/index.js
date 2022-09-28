
import { ADD_MOVIE_FAVORITE, GET_MOVIES, REMOVE_MOVIE_FAVORITE, GET_MOVIE_DETAIL} from "../action-types"



export function addMovieFavorite(payload) {  //para agregar peliculas Favoritas 
    return { type: ADD_MOVIE_FAVORITE, 
             payload
             };
  }
 

export function removeMovieFavorite(id) {  // otra para eliminarla de favoritas removeMovieFavorite.
  return {
         type: REMOVE_MOVIE_FAVORITE, 
         payload: id
    };
}


export function getMovies(titulo) {
    return function(dispatch) {
       return fetch(`http://www.omdbapi.com/?apikey=8222f5af&s=${titulo}`) //acapi-~~do info a la api
              .then(response => response.json()) // aca capturo la info de la api y la guardo en respomse.json-- imp, el response lo que hace es convertirme toda la info que me llega como un string gneral, en un objeto con info. Des esta forma puedo filtrar la informacion que necesito accediendo a las pripiedades/valor del Objeto en cuestion
              .then(resonseObjetc => {  // y despues digo, que json se va a despachar con GET_MOVIES y con el valor de la info
                      dispatch(getMoviesComplete(resonseObjetc))
          });
    }}

export function getMoviesComplete(movies){
    return{
         type: GET_MOVIES, //va a ser la action
         payload: movies   //va a ser la info (en este caso el nombre de la pelicula)
    }
}




export function getMovieDetail(id)  {   //otra para traer los detalles de la pelicula especifica 
    return function(dispatch) {
      fetch(`http://www.omdbapi.com/?apikey=8222f5af&i=${id}`)
      .then(response => response.json())
        .then(data=> {
        dispatch({
             type: GET_MOVIE_DETAIL, 
             payload: data
             })
         })
    }
  }