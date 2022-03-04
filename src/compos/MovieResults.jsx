import React, { useState } from 'react'
import { Loader } from '@mantine/core';
import { Link } from 'react-router-dom';
export default function MovieResults({loading, movies: initialMovies, searchTerm, setMovies, handleFetchMovieId, setChosenMovie}) {
  const [initialMoviesState, setInitialMoviesState] = useState(initialMovies);
  const handleMovieSorting = (filter) => {
    if(filter === 'SERIES'){
      setInitialMoviesState(initialMovies?.Search?.sort((a) => a.Type === 'series'))
    }
    if(filter === 'OLD'){
      setInitialMoviesState(initialMovies?.Search?.slice().sort((a, b) => +a.Year - +b.Year ))
    }
    if(filter === 'RECENT'){
      setInitialMoviesState(initialMovies?.Search?.sort((a, b) => +a.Year + +b.Year ))
    }
    
  }
  return (
    <section id="movies__results" className='cont' >
      <div className="results__bar--cont">
        <p className="results__statement--cont">
        Search results for "{searchTerm}"
        </p>
        <div className="results__bar--selector--cont">
          <select defaultValue='DEF' className="results__bar--selector" 
           onChange={(e)=> {
             handleBookFilter(e.target.value)
             handleMovieSorting(e.target.value) 
              }} >
            <option value="DEF">Sort</option>
            <option value="SERIES">Series</option>
            <option value="SHOW">Show</option>
            <option value="RECENT">Recent</option>
            <option value="OLD">Old</option>
          </select>
        </div>
      </div> 
      <div className="results__movie--results">
        {
          loading ? 
          <div className="results__loader--cont">
            <Loader size={50}  color="#082eac" /> 
          </div>
          :
          initialMovies?.Search?.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} className='results__moves--poster--anchor' key={movie.imdbID}
          onClick={(e) => 
          {
            setChosenMovie(movie.imdbID)
            handleFetchMovieId()
            }} >
          <img src={movie.Poster} className='results__moves--poster' alt="" />
          </Link> 
          ))
        } 
        </div>
    </section>
  )
}
