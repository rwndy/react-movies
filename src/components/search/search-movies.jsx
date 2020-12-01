
const SearchMovies = ({search, onSearch, getSubmit}) => {
  return (
    <section>
      <form onSubmit={getSubmit}>
        <input type="text" value={search} onChange={onSearch} autoComplete="off"/>
      </form>
    </section>
  )
}

export default SearchMovies