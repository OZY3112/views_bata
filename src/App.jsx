import axios from "axios"
import { useEffect, useState } from "react"
import MoviesPage from "./pages/MoviesPage"

function App() {
  const [searchTerm, setSeachTerm] = useState()
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
    <div className="App">
      <MoviesPage/>
      {
       !loading &&
        movies?.Search?.map((movie) => (
          <>
            <img src={movie.Poster} alt="" />
          </>
        ))
      }
    </div>
  )
}

export default App
