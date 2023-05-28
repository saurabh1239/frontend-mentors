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
  "https://bb0ab0a0-c99b-48b5-8394-2c99d5f4587b.mock.pstmn.io/v1/videos";
function App() {
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
  const performApiCall = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const definedData = data.videos
      // const resp = await axios.get(url);
      // const data = resp.data.videos;
      setVideos(definedData)
      // console.log("data", definedData);
    } catch (error) {
      console.log(error);
    }
  }

  const handlesearch = (e) => {
    setSearchBar(e.target.value)
  }
  const params = useLocation();
  useEffect(() => {
    (async () =>
      await performApiCall())();
    // setVideos(Data)
  }, [propData])
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
          setPropData={setPropData} />
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
