import React from 'react'

export default function MovieInfo({chosenMovieInfo}) {
  return (
      <section id="movie__info">
        <div className="movieinfo__wrapper">
          <div className="movieinfo__movie--poster">
          {
            chosenMovieInfo?.Search?.map(movie => (
              <img src={movie.Poster} alt="" />
            ))
          }
          </div> 
              sasdasd
          <div className="movieinfo__description--wrapper">
            {
              chosenMovieInfo?.Search?.map(movie => (
                <figure className="movieinfo__description--cont">
                   <h3 className="movieinfo__movie--title">
                     {movie.Title}
                   </h3>  
                   <div className="movieinto__movie--release-date">
                    Release date: {movie.Released}
                   </div>
                   <div className="movieinto__movie--genre">
                     Genre: {movie.Genre}
                   </div>
                   <div className="movieinto__movie--genre">
                   Rating {movie.Ratings}
                   </div>
                   <div className="movieinto__movie--plot">
                     plot: {movie.Plot} 
                    </div>
                </figure>
              ))
            }
          </div>
          
        </div>
        
      </section>
    )
}
