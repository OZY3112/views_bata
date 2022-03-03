import axios from "axios"
import { useEffect, useState } from "react"
import MoviesPage from "./pages/MoviesPage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./compos/Navbar"


function App() {
  const [searchTerm, setSearchTerm] = useState()
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false);

  const handleFetchMovies = async() => {
    setLoading(true)
    const  data  = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=d882ad9a`)
    setMovies(data.data)
    console.log(movies)
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
          <MoviesPage setSearchTerm={setSearchTerm} onSearch={onSearch} movies={movies} loading={loading} />
           
        </div>
    </Router>
  )
}

export default App
