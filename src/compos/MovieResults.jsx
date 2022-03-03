import React from 'react'

export default function MovieResults({loading, movies, searchTerm}) {
  
  return (
    <section id="movies__results" className='cont' >
      <div className="results__bar--cont">
        <p className="results__statement--cont">
        Search results for "{searchTerm}"
        </p>
        <div className="results__bar--selector--cont">
          <select defaultValue='DEF' className="results__bar--selector" onChange={(e)=> handleBookFilter(e.target.value)} >
            <option value="DEF">TV or Show</option>
            <option value="TV">TV</option>
            <option value="SHOW">Show</option>
          </select>
        </div>
      </div> 
      <div className="results__movie--results">
        {
          loading ? new Array(9).fill(0).map(() => <div className='results__moves--poster--skeleton' />)
          :
          movies?.Search?.map((movie) => (<img src={movie.Poster} className='results__moves--poster' alt="" />))
        } 
        </div>
    </section>
  )
}
