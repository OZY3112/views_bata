import React from 'react'

export default function MovieInfo({chosenMovieInfo, chosenMovie}) {
  return (
      <section id="movie__info">   
      {
        chosenMovieInfo?.Search?.map((_, index) => (

          <div className="movieinfo__wrapper" key={chosenMovie}>
          <div className="movieinfo__movie--poster">
              <img src={chosenMovieInfo.Poster} alt=""  />
          </div> 
              sasdasd
          <div className="movieinfo__description--wrapper">
                <figure className="movieinfo__description--cont"  >
                   <h3 className="movieinfo__movie--title">
                     {chosenMovieInfo.Title}
                   </h3>  
                   <div className="movieinto__movie--release-date">
                    Release date: {chosenMovieInfo.Released}
                   </div>
                   <div className="movieinto__movie--genre">
                     Genre: {chosenMovieInfo.Genre}
                   </div>
                   <div className="movieinto__movie--genre">
                   Rating {chosenMovieInfo.Ratings}
                   </div>
                   <div className="movieinto__movie--plot">
                     plot: {chosenMovieInfo.Plot} 
                    </div>
                </figure>
          </div>
        </div>
            ))
        }
      </section>
    )
}
