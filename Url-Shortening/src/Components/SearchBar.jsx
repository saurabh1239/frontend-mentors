
import "../App.css"

const SearchBar = ({ handleChange, error, handleSubmit,link }) => {
  return (
    <div className="searchbar">
      <div>
        <input type="text" placeholder='Shorten a link here...' onChange={(e) => handleChange(e)} className={error === true ? "error-input" : "input"} />
        <button onClick={handleSubmit}>Shorten it!</button>
      </div>
      {error &&
        <span className="span-error">Please add a link </span>
      }
    </div>
  )
}

export default SearchBar