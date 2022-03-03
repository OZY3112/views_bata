import React from 'react'

export default function MovieResults({loading, movies}) {
  return (
    <section id="movies__results">
        {
            !loading &&
            movies?.Search?.map((movie) => (
              <>
                <img src={movie.Poster} alt="" />
              </>
            ))
          } 
    </section>
  )
}
