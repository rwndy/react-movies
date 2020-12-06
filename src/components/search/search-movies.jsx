
const SearchMovies = ({search, onSearch, getSubmit}) => {
  return (
    <section className="section-search">
      <form onSubmit={getSubmit} className="section-search--form">
        <input type="text" value={search} onChange={onSearch} autoComplete="off" name="searchTerms" className="section-search--term" placeholder="Search your favourite film..."/>
        <span className="section-search--bar"></span>
      </form>
    </section>
  )
}

export default SearchMovies