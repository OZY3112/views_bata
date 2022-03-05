import axios from "axios"
import { useEffect, useState } from "react"
import MoviesPage from "./pages/MoviesPage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./compos/Navbar"
import MovieInfo from "./pages/MovieInfo"
import LandingPage from "./pages/LandingPage"


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [chosenMovie, setChosenMovie] = useState();
  const [chosenMovieInfo, setChosenMovieInfo] = useState([]);
  
  const handleFetchMovies = async() => {
    setLoading(true)
    const  {data}  = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3123e3e88f49c8845544a9a59996b76c&query=${searchTerm}`)
    setMovies(data.results)
    setLoading(false)
  }
  const handleFetchMovieId = async(id) => {
    setLoading(true)
    await handleFetchMovies()
    // https://api.themoviedb.org/3/movie/550?api_key=3123e3e88f49c8845544a9a59996b76c
    const  movieintodata  = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a68a1e716dc10887f9e01a8f4e4ee2b3&language=en-US`)
    // const  movieintodata  = await axios.get(`www.omdbapi.com/?i=tt1596343&apikey=d882ad9a`)
    setChosenMovieInfo(movieintodata.data)
    console.log(chosenMovie)
    console.log(chosenMovieInfo)
    setLoading(false)
  }
  const onSearch = () => {
    handleFetchMovies()
  }
  useEffect(()=> {
    handleFetchMovies()
  },[])
  return (
    <Router>
        <div className="App">
          <Navbar/>

          
          <Routes>
            <Route path="/" element={<LandingPage setSearchTerm={setSearchTerm} onSearch={onSearch}  />} />

           <Route path={`/movies`} element={<MoviesPage chosenMovie={chosenMovie} setSearchTerm={setSearchTerm} setMovies={setMovies}  setChosenMovie={setChosenMovie}
          searchTerm={searchTerm} onSearch={onSearch} movies={movies} loading={loading}  handleFetchMovieId={handleFetchMovieId} chosenMovieInfo={chosenMovieInfo} />} />

           {/* <Route path={`/movie/:imdbID`} element={<MovieInfo chosenMovieInfo={chosenMovieInfo} />} /> */}
           <Route path={`/movie/${chosenMovieInfo.id}`} element={<MovieInfo chosenMovie={chosenMovie} chosenMovieInfo={chosenMovieInfo} />} />

          </Routes>
        </div>
    </Router>
  )
}

export default App
