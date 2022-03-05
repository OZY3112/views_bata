import { Link } from 'react-router-dom';
export default function MovieResults({loading, movies: initialMovies, chosenMovieInfo,
   searchTerm, setMovies, handleFetchMovieId, setChosenMovie}) {

  return (
    <section id="movies__results" className='cont' >
      <div className="results__bar--cont">
        <p className="results__statement--cont">
        Search results for "{searchTerm}"
        </p>
      </div> 
      <div className="results__movie--results">
        {
          initialMovies.map((movie) => (

          <Link to={`/movie/${chosenMovieInfo.id}`} className='results__moves--poster--anchor' key={movie.id}

          onClick={() =>  {handleFetchMovieId(movie.id); setChosenMovie(movie.id)}} >

              {
               loading ? 
               <div className="results__moves--poster--skeleton--cont">
                 <div className="results__moves--poster--skeleton" />
                </div> :  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='results__moves--poster' alt="" />
              }
              
          </Link> 
          ))
        } 
        </div>
    </section>
  )
}
