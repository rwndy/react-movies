import { useState } from 'react'
import { DisplayMovies, SearchMovies, } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { toNextPage, toPrevPage } from '../redux/store/actions'


const HomePage = ()=> {
  const [searchMovies, setSearchMovies] = useState('')
  const [showMovies, setShowMovies] = useState([])
  const currentPages = useSelector(state => state.toPages.pages)
  const [results, setResults] = useState(null)

  const dispatch = useDispatch()
  const api = `http://www.omdbapi.com/?apikey=faf7e5bb&s=${searchMovies}&page=${currentPages}`

  console.log(api)
  const handleSearch = e => {
    setSearchMovies(e.target.value)
  }

  const getMoviesAPI = async () => {
    const response = await fetch(api)
    const data = await response.json()
    setShowMovies(data.Search)
    setResults(data.totalResults)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (searchMovies) {
      getMoviesAPI()
    }


  }
  
  console.log(currentPages)

  const onPage = () => {
      getMoviesAPI()
      dispatch(toNextPage())
  }

  const prevPage = () => {
    getMoviesAPI()
    dispatch(toPrevPage())
  }


  return(
    <main>
      <h1>Hello</h1>
      <SearchMovies search={searchMovies} onSearch={handleSearch} getSubmit={handleSubmit} />
      {
        <h4>hasil input: {searchMovies}</h4>
      }

      <DisplayMovies movies={showMovies}/>
      
        <button onClick={onPage}>Next page: <strong>{currentPages}</strong></button>
        <button onClick={prevPage}>Prev page: <strong>{currentPages}</strong></button>
      

      
    </main>
  )
}

export default HomePage