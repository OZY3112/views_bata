import React from 'react'

export default function MovieInfo({chosenMovieInfo: movies}) {
  return (
      <section id="movie__info">
        
        {
          movies?.Search?.map(movie => (
            <img src={movie.Poster} alt="" />
          ))
        }
      </section>
    )
}
