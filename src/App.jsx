import axios from "axios"
import { useEffect, useState } from "react"
import MoviesPage from "./pages/MoviesPage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./compos/Navbar"
import MovieInfo from "./pages/MovieInfo"


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [chosenMovie, setChosenMovie] = useState();

  const handleFetchMovies = async() => {
    setLoading(true)
    const  data  = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=d882ad9a`)
    setMovies(data.data)
    setLoading(false)
  }
  const handleFetchMovieId = async() => {
    setLoading(true)
    const  data  = await axios.get(`http://www.omdbapi.com/?i=${chosenMovie}&apikey=d882ad9a`)
    setChosenMovie(data.data)
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
          <MoviesPage setSearchTerm={setSearchTerm} setMovies={setMovies}  setChosenMovie={setChosenMovie}
          searchTerm={searchTerm} onSearch={onSearch} movies={movies} loading={loading}  handleFetchMovieId={handleFetchMovieId} />
          <Routes>
           <Route path={`/movie/:id`} component={<MovieInfo/>} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
