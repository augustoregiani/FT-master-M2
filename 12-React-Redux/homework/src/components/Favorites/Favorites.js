import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
        { 
        this.props.peliculasFavoritas?.map((movie) =>{ return (
            <li key= {movie.id}>
              <Link to={`/movie/${movie.id}`}>
            <p>{movie.title}</p>
              </Link>
              <button onClick={()=> this.props.removeMovieFavorite(movie.id)} >X</button>
            </li>
          )
          })
          }
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    peliculasFavoritas: state.moviesFavourites
  };
}





export default connect( mapStateToProps, { removeMovieFavorite})(ConnectedList);