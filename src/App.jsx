import axios from "axios"
import { useEffect, useState } from "react"
import MoviesPage from "./pages/MoviesPage"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./compos/Navbar"


function App() {
  const [searchTerm, setSearchTerm] = useState()
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false);

  const handleFetchMovies = async(searchTerm) => {
    setLoading(true)
    const  data  = await axios.get(`http://www.omdbapi.com/?s=fast&apikey=d882ad9a`)
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
          <MoviesPage/>
          {/* {
            !loading &&
            movies?.Search?.map((movie) => (
              <>
                <img src={movie.Poster} alt="" />
              </>
            ))
          } */}
        </div>
    </Router>
  )
}

export default App
