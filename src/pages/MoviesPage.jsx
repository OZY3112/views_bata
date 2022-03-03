import React from 'react'
import {IoMdSearch} from 'react-icons/io'
import bg from '../assests/bg.jpg'
import MovieResults from '../compos/MovieResults'
export default function MoviesPage({setSearchTerm, onSearch, movies, searchTerm, loading}) {
  return (
    <section id="moviespage">
      <img src={bg} alt="" className="movies__bg--img" />
      <div className="movie__search--section--cont">
      <div className="movies__section--title--cont">
        <h5 className="movies__section--title">
            Browse all of your favorite movies and shows 
        </h5>  
      </div> 
        <div className="movies__search-bar--cont">
          <input type="text" name="" className="movies__search-bar"  onKeyPress={(e) => e.key === 'Enter' && onSearch(e)}
           onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search for a movie' />
          <div className="movies__search-bar--icon--cont">
            <IoMdSearch/>
          </div>
        </div>
      </div>
      <MovieResults loading={loading} movies={movies} searchTerm={searchTerm} />
    </section>
  )
}
