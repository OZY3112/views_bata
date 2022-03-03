import React from 'react'

export default function MovieResults({loading, movies, searchTerm}) {
  return (
    <section id="movies__results">
      <div className="results__bar--cont">
        <p className="results__statement--cont">
        Search results for "{searchTerm}"
        </p>
        <div className="results__bar--selector--cont">
          <select className="results__bar--selector">
            <option value="DEF">TV or Show</option>
          </select>
        </div>
      </div>
        {
          !loading ? movies?.Search?.map((movie) => (<img src={movie.Poster} className='results__moves--poster' alt="" />))
          :
          new Array(10).fill(0).map(() => (<div className='results__moves--poster--skeleton' />))
        } 
    </section>
  )
}
