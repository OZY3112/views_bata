import React from 'react'
import {IoMdSearch} from 'react-icons/io'

export default function MoviesPage() {
  return (
    <section id="moviespage">
      <div className="movie__search--section--cont">
      <div className="movies__section--title--cont">
        <h5 className="movies__section--title">
            Browse all of your favorite movies and shows 
        </h5>  
      </div> 
        <div className="movies__search-bar--cont">
          <input type="text" name="" className="movies__search-bar" placeholder='Search for a movie' />
          <div className="movies__search-bar--icon--cont">
            <IoMdSearch/>
          </div>
        </div>
      </div>
    </section>
  )
}
