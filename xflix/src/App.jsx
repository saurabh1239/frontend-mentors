import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Pages/Dashboard'
import axios from 'axios'
import Data from "./Constants/Data"
import VideoPage from './Pages/VideoPage'
import { BrowserRouter, Link, Route, Routes, useLocation, useParams, useSearchParams } from "react-router-dom";

var url =
  "https://9844e596-66a7-44a4-b2e1-ae10f6ebbd7a.mock.pstmn.io/v1/videos";
function App() {
  // states
  const [videos, setVideos] = useState([]);
  const [searchBar, setSearchBar] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [propData, setPropData] = useState({
    title: "",
    VideoLink: "",
    contentRating: "",
    releaseDate: "",
    upvote: "",
    downVote: "",
  })
  const [genreFilter, setGenreFilter] = useState("All Genre");
  const [ageFilter, setAgeFilter] = useState("Any age group");

  // modal data
  const [modalData, setModalData] = useState({
    "Video Link": "",
    "Thumbnail Image Link": "",
    "Title": "",
    "Genre": "Education",
    "Suitable age or group for the clip": "7",
    "Upload and Publish date": ""
  })

  const handleModalData = (e) => {
    const { name, value } = e.target;
    setModalData({ ...modalData, [name]: value });

  }
  // {
  //   genre:"All Genre",
  //   selected:false
  // }
  // ,
  // "Education",
  // "Sports",
  // "Comedy",
  // "Lifestyle",

  const performApiCall = () => {
    var UpdatedData = Data;
    // setVideos(Data)
    if (searchBar.length > 0) {
      const searchBarFilter = UpdatedData.filter((item) => {
        return item.title.toLowerCase().includes(searchBar)
      });
      setVideos(searchBarFilter)
      console.log(searchBarFilter);
      // const searchparam = `${url}?title=${searchBar}`;
      // try {
      //   const resp = await fetch(searchparam);
      //   const data = await resp.json();
      //   const definedData = data.videos
      //   setVideos(definedData)
      //   // console.log("data", definedData);
      // } catch (error) {
      //   console.log(error);
      // }
    }
    else if (genreFilter.length > 0) {
      if (genreFilter === "All Genre") {
        console.log("here1");
        const GenreData = UpdatedData;
        setVideos(GenreData)
      }
      else {
        console.log("here2");
        const GenreData = UpdatedData.filter((item) => {
          return item.genre.toLowerCase().includes(genreFilter.toLowerCase())
        }
        )
        UpdatedData = GenreData;
        setVideos(UpdatedData)
      }
    }
    else if (ageFilter.length > 0) {
      if (ageFilter === "Any age group") {
        const AgeData = UpdatedData;
        setVideos(AgeData)
      }
      else {
        const AgeData = UpdatedData.filter((item) => {
          return item.contentRating.includes(ageFilter)
        }
        )
        UpdatedData = AgeData;
        setVideos(AgeData)
      }
      // if (ageFilter === "Any age group") {
      //   const resp = await fetch(url);
      //   const data = await resp.json();
      //   const definedData = data.videos
      //   setVideos(definedData)
      //   // ? contentRating = 12 % 2B
      // }
      // else {
      //   const ratingUrl = `${url}?contentRating=${ageFilter}%2B`
      //   try {
      //     const resp = await fetch(ratingUrl);
      //     const data = await resp.json();
      //     const definedData = data.videos
      //     setVideos(definedData)
      //     // console.log("data", definedData);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
    }

    else {
      console.log("sadasd", videos);
      setVideos(UpdatedData)

      // try {
      //   const resp = await fetch(url);
      //   const data = await resp.json();
      //   const definedData = data.videos
      //   setVideos(definedData)
      //   // console.log("data", definedData);
      // } catch (error) {
      //   console.log(error);
      // }
    }
  }

  const handlesearch = (e) => {
    setSearchBar(e.target.value)
  }
  useEffect(() => {
    performApiCall();
    // (async () =>
    //   await performApiCall())();
    // setVideos(Data)
  }, [ageFilter, searchBar, genreFilter])
  // console.log("param", params);
  // performApiCall();
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Dashboard videos={videos} searchBar={searchBar}
          setSearchBar={setSearchBar}
          handlesearch={handlesearch}
          setVideoLink={setVideoLink}
          propData={propData}
          setPropData={setPropData}
          genreFilter={genreFilter}
          setGenreFilter={setGenreFilter}
          ageFilter={ageFilter}
          setAgeFilter={setAgeFilter}
          modalData={modalData} setModalData={setModalData}
        />
        } />
        <Route path='/Video' element={<VideoPage videos={videos}
          videoLink={videoLink} setVideoLink={setVideoLink}
          propData={propData}
          setPropData={setPropData} />} />
      </Routes>
    </div>
  )
}

export default App
