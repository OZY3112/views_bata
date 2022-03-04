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
    const  data  = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=d882ad9a`)
    setMovies(data.data)
    setLoading(false)
  }
  const handleFetchMovieId = async(id) => {
    setLoading(true)
    const  movieintodata  = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=d882ad9a`)
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
            <Route path={`/`} element={<LandingPage/>} />

           <Route path={`/movies`} element={<MoviesPage chosenMovie={chosenMovie} setSearchTerm={setSearchTerm} setMovies={setMovies}  setChosenMovie={setChosenMovie}
          searchTerm={searchTerm} onSearch={onSearch} movies={movies} loading={loading}  handleFetchMovieId={handleFetchMovieId} />} />

           {/* <Route path={`/movie/:imdbID`} element={<MovieInfo chosenMovieInfo={chosenMovieInfo} />} /> */}
           <Route path={`/movie`} element={<MovieInfo chosenMovie={chosenMovie} chosenMovieInfo={chosenMovieInfo} />} />

          </Routes>
        </div>
    </Router>
  )
}

export default App
