import { useState } from "react"
import "./Header.css"

const genre = [
    "All Genre",
    "Education",
    "Sports",
    "Comedy",
    "Lifestyle",
]

const AgeFilters = [
    "Any age group",
    "7+",
    "12+",
    "16+",
    "18+",
]
const Header = ({searchBar,setSearchBar,handlesearch}) => {
    const [Genre, setGenre] = useState(genre[0]);
    const [Age, setAge] = useState(AgeFilters[0]);

    console.log("age", Age);
    console.log("agefilter", AgeFilters[0]);


    const handleGenre = (id) => {
        setGenre(genre[id])
    }
    const handleAge = (id) => {
        setAge(AgeFilters[id])
    }
    return (
        <div className="upper-header">
            <div className="header">
                <span className="logo">
                    <span>X</span>
                    Flix
                </span>
                {/* <span className="searchBar">
                    <input type="text" className='searchBar-input' placeholder="Search" value={searchBar} onChange={(e)=>handlesearch(e)}/>
                    <button className="searchBar-button">S</button>
                </span>
                <span className="profile">
                    <span>I</span>
                    Upload
                </span> */}
            </div>
            {/* <div className="genre">
                <div className="genre-chips">
                    {genre.map((item, id) =>
                        <span className={Genre === item ? "chip Active" : "chip"} key={id}
                        onClick={()=>handleGenre(id)}>
                            {item}
                        </span>
                    )}
                </div>
                <span className="releaseDate">Release Date</span>   
            </div>
            <div className="filters">
                {AgeFilters.map((item, id) =>
                    < span key={id} className={Age === item ? "filterChip Active" : "filterChip"}
                        onClick={() => handleAge(id)}
                    >
                        {item}
                    </span>
                )}
            </div> */}
        </div >
    )
}

export default Header