import { useState, useEffect } from 'react'
import Navbar from '../navigation/navbar'

function MovieDetails({match}) {
  const [detailMovies, setDetailMovies] = useState({})
  const { params } = match
  const fetchDetailsMovies = async id => {
   const res = await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=faf7e5bb`)
   const results = await res.json()
   setDetailMovies(results)
  }

  useEffect(()=> {
    fetchDetailsMovies(params.detail)
  }, [params.detail])


  console.log(detailMovies)

  return (
    <>
      <Navbar />
      <section className="section-wrapper">
        <div className="movies-detail">
          {/* <div className="movies-detail--backdrop">
            <img src={detailMovies.Poster} alt={`${detailMovies.Title}'s Poster`}/>
          </div> */}
          <div className="movies-detail--img">
            <img src={detailMovies.Poster} alt={`${detailMovies.Title}'s Poster`}/>
          </div>
          <h1 className="movies-detail--title">{detailMovies.Title}</h1>
          <div className="movies-detail--synopsis">
            <div className="movies-detail--description">
              <p><strong>STARRING:</strong> {detailMovies.Actors}</p>
              <p><strong>DIRECTOR:</strong> {detailMovies.Director}</p>
              <p><strong>CENCOR RATING:</strong> {detailMovies.Rated}</p>
              <p><strong>GENRE:</strong> {detailMovies.Genre}</p>
              <p><strong>LANGUAGE:</strong> {detailMovies.Language}</p>
              <p><strong>DURATION:</strong> {detailMovies.Runtime}</p>
            </div>
            <div className="movies-detail--plot">
              <h4>{detailMovies.Plot}</h4>
            </div>
          </div>
        </div>

        <p className="movies-detail--back"><a href="/">Back</a></p>
      </section>
  </>
  )
}

export default MovieDetails
