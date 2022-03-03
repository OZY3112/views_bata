import React from 'react'

export default function Movie({movies}) {
  return (
    <div>
        {
            movies?.Search?.map((movie) => (<img src={movie.Poster} className='results__moves--poster' alt="" />))
        }
    </div>
  )
}
