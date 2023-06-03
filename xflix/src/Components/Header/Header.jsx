import { useState } from "react"
import "./Header.css"
import { Link, useLocation } from "react-router-dom"

const genre = [
    "All Genre",
    "Education",
    "Sports",
    "Comedy",
    "Lifestyle",
]

const AgeFilters = [
    "Any age group",
    "7",
    "12",
    "16",
    "18",
]
const Header = ({ searchBar, setSearchBar, handlesearch, modalOpen, setModalOpen,
    genreFilter, setGenreFilter, ageFilter, setAgeFilter }) => {
    // const [Genre, setGenre] = useState(genre[0]);
    const [Age, setAge] = useState(AgeFilters[0]);

    const location = useLocation()
    console.log("age", genreFilter);
    // console.log("agefilter", AgeFilters[0]);

    // const handleModel = () => {

    // }
    const handleGenre = (id) => {
        setGenreFilter(prev => [...prev, genre[id]])
    }
    const handleAge = (id) => {
        setAgeFilter(AgeFilters[id])
    }
    return (
        <div className="upper-header">
            <div className="header">
                <Link to="/">
                    <span className="logo" >
                        <span>X</span>
                        Flix
                    </span>
                </Link>
                {(location.pathname === "/Video") ?
                    <></> :
                    <>
                        <span className="searchBar">
                            <input type="text" className='searchBar-input' placeholder="Search" value={searchBar} onChange={(e) => handlesearch(e)} />
                            <button className="searchBar-button">S</button>
                        </span>
                        <span className="profile" onClick={() => setModalOpen(!modalOpen)}>
                            <span>I</span>
                            Upload
                        </span>
                    </>
                }
            </div>
            {(location.pathname === "/Video") ?
                <></> :
                <>
                    <div className="genre">
                        <div className="genre-chips">
                            {genre.map((item, id) =>
                                <span
                                    className={genreFilter.forEach(element => {
                                        // console.log("check",element,item);
                                        if (element === item) {
                                            // console.log("passsed");
                                            return "chip Active";
                                        }
                                        else if (element !== item) {
                                            // console.log("passsed 2");
                                            return "chip";
                                        }

                                    })
                                    }
                                    key={id}
                                    onClick={() => handleGenre(id)}>
                                    {item}
                                </span>
                            )}
                        </div>
                        <span className="releaseDate">Release Date</span>
                    </div>
                    <div className="filters">
                        {AgeFilters.map((item, id) =>
                            < span key={id} className={ageFilter === item ? "filterChip Active" : "filterChip"}
                                onClick={() => handleAge(id)}
                            >
                                {item === "Any age group" ?
                                    item :
                                    `${item}+`}
                            </span>
                        )}
                    </div>
                </>
            }
        </div >
    )
}

export default Header