
import "../App.css"

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder='Shorten a link here...' />
      <button>Shorten it!</button>
    </div>
  )
}

export default SearchBar