
const SearchMovies = ({search, onSearch, getSubmit}) => {
  return (
    <section>
      <form onSubmit={getSubmit}>
        <input type="text" value={search.searchTerms} onChange={onSearch} autoComplete="off" name="searchTerms"/>
      </form>
    </section>
  )
}

export default SearchMovies