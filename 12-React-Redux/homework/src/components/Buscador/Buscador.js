import React, { Component, useState} from "react";
import { connect , useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';

import { getMovies , addMovieFavorite } from "../../actions/index.js";
import './Buscador.css';



export default function Buscador() {
   // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: ""
  //   };

const dispatch = useDispatch()
const movies = useSelector(state => state.moviesLoaded)
const [title, setTitle] = useState("")
 

  function handleChange(event) {
    setTitle(event.target.value) 
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getMovies(title))
  }

  // render() {
  //   const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          { movies?.map( (movie) =>{
            return (
                <ul key={movie.imdbID}>
                  <Link to={`/movie/${movie.imdbID}`}>
                      <li>{movie.Title}</li>
                  </Link>
                  <button onClick={() => dispatch(addMovieFavorite({title: movie.Title, id: movie.imdbID}))}>Fav</button>
                  </ul>
            )

          })
          }
         </ul>
      </div>
    );
  }
//}

// function mapStateToProps(state) {
//   return {
//     movies: state.moviesLoaded
//   };
// }
// [
// function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
//     getMovies: title => dispatch(getMovies(title))
//   };
// }]



//export default connect( mapStateToProps,  mapDispatchToProps )(Buscador);
        //conecta ----> Los estados de Rexud,  Las acciones de R . con el componente 


             //   <div key= {m.imdbID}>
          //     <Link to={`/movie/${m.imdbID}`}>
          //   <li>{m.Title}</li>
          //     </Link>
          //     <button onClick={() => this.props.addMovieFavorite({title: m.title, id: m.imbdID})}>FAV</button>
          //   </div>

          // ))