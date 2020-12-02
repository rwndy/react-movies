import { useState } from 'react'
import { SearchMovies } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { toNextPage, toPrevPage, moviesData } from '../redux/store/actions'



const HomePage = ()=> {
  const moviesData = useSelector(state => state.getMovies)
  const [data, setData] = useState(moviesData)
  const currentPages = useSelector(state => state.toPages.pages)
  const dispatch = useDispatch()
  // const api = `http://www.omdbapi.com/?apikey=faf7e5bb&s=${searchMovies}&page=${currentPages}`

  const handleSearch = e => {
    setData({...data, [e.target.name]: e.target.value})
  }
  
 console.log(data)

  return(
    <main>
      <h1>Hello</h1>
      <SearchMovies search={data} onSearch={handleSearch}/>
    </main>
  )
}

export default HomePage