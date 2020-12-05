import { useState, useEffect } from 'react'

function MovieDetails({match}) {
  console.log(match.params)
  const [detailMovies, setDetailMovies] = useState({})
  const { params } = match
  const fetchDetailsMovies = async id => {
   const res = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=faf7e5bb`)
   console.log(res)
   const results = await res.json()
   setDetailMovies(results)
  }

  useEffect(()=> {
    fetchDetailsMovies(params.detail)
  }, [params.detail])


  console.log(detailMovies)

  return (
    <section className="section-wrapper">
      <div className="movies-detail--img">
        <img src={detailMovies.Poster} alt={`${detailMovies.Title}'s Poster`}/>
      </div>
      <div className="movies-detail--wrapper">

      </div>
    </section>
  )
}

export default MovieDetails
