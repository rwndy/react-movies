/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { SearchMovies, Navbar, DisplayMovies, Pagination } from '../components'

const HomePage = ()=> {
  const [films, setFilms] = useState([])
  const [searchTerms, setSearchTerms] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  const api = `http://www.omdbapi.com/?apikey=faf7e5bb&s=${searchTerms}`

  const handleSearch = e => {
    setSearchTerms(e.target.value)
  }



  const fetchFilms = async () => {
    try {
      const response = await fetch(`${api}&page=${currentPage}`)
      const results = await response.json()
      setFilms(results.Search)
      setTotalPages(results.totalResults)
    } catch(error) {
      console.error(error)
    }
  }

  const next = () => {
    if (films.length === Math.floor(totalPages/10) || films.length === 0) {
      console.error('error')
    } else {
      setCurrentPage(currentPage + 1)
      fetchFilms()
    }
  }

  const prev = () => {
    if ( currentPage === 1 ) {
      setCurrentPage(currentPage)
    } else {
      setCurrentPage(currentPage - 1)
      fetchFilms()
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetchFilms()
  }

 console.log(films)
  return(
    <main>
      <Navbar />
      <SearchMovies search={searchTerms} onSearch={handleSearch} getSubmit={handleSubmit}/>
      <DisplayMovies movies={films} />
      {
        films.length < parseInt(totalPages) ?
        (<Pagination currentPages={currentPage} nextPages={next} prevPages={prev}/>) :
        null
      }
    </main>
  )
}

export default HomePage