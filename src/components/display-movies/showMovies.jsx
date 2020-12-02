
const DisplayMovies = ({movies}) => {
  return (
    <section className="section-wrapper">
      <div className="movies-wrapper">
        {
          movies.map((movie, i) => (
            <div className="movies-cards" key={i}>
              <div className="movies-cards--wrapper">
                <img src={ movie.Poster } alt={ `${movie.Title}'s Poster` }/>
              </div>
              <h1 className="movies-cards--title">
                { movie.Title }
              </h1>
              <h4 className="movies-cards--year">
                Year: { movie.Year }
              </h4>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default DisplayMovies