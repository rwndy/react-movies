
const DisplayMovies = ({movies}) => {
  return (
    <section>
      <div className="container">
        {
          movies.map((movie, i) => (
            <div key={i}>
              <p>
                {movie.Title}
              </p>
              <img src={movie.Poster} alt={`${movie.Title}'s Poster`}/>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default DisplayMovies