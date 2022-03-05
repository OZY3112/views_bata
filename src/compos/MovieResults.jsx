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
          initialMovies.map((movie) => (

          <Link to={`/movie/`} className='results__moves--poster--anchor' key={movie.id}

          onClick={() =>  {handleFetchMovieId(movie.id); setChosenMovie(movie.id)}} >

              {
               loading ? 
               <div className="results__moves--poster--skeleton--cont">
                 <div className="results__moves--poster--skeleton" />
                </div> :  <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='results__moves--poster' alt="" />
              }
              
          </Link> 
          ))
        } 
        </div>
    </section>
  )
}
