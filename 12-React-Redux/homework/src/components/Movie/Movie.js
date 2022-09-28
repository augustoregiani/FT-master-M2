import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

componentDidMount(){ //53min verlo de nuevo por que ta bueno
    const id = this.props.match.params.id;   //ATENTO ACA, por que esta usando el MATCH params, ---> En BUSCADOR =  <Link to={`/movie/${movie.imdbID}`}> le paso ID  ---> SI QUEIERO CAMBIAR  tittle, debaria poener   <Link to={`/movie/${movie.Title}`}>
    this.props.getMovieDetail(id)                                                             // ---> En index.Actions= fetch(`http://www.omdbapi.com/?apikey=8222f5af&i=${id}`) tabien paso ID (Si queri buscar por otra cosa, tendria qu ecambiar la "i" por una "t" (en caso de que quiera buscar o matchear por tittle.))
    console.log(this.props.detallePelicula)                                                   // 
}

    render() {
        return (
            <div className="movie-detail">
               <h2>{this.props.detallePelicula.Title}</h2>
               <h3>{this.props.detallePelicula.Year}</h3>
               <h3>{this.props.detallePelicula.Rated}</h3>
               <p>{this.props.detallePelicula.Genre}</p>
               <p>{this.props.detallePelicula.Director}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        detallePelicula: state.movieDetail
    }
}

export default connect (mapStateToProps, {getMovieDetail}) (Movie);

