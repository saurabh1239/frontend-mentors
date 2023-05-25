import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Pages/Dashboard'
import axios from 'axios'
import Data from "./Constants/Data"
import VideoPage from './Pages/VideoPage'

var url =
  "https://bb0ab0a0-c99b-48b5-8394-2c99d5f4587b.mock.pstmn.io/v1/videos";
function App() {
  const [count, setCount] = useState(0);
  const [videos, setVideos] = useState([]);
  const [searchBar, setSearchBar] = useState("")

  const performApiCall = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const definedData = data.videos
      // const resp = await axios.get(url);
      // const data = resp.data.videos;
      setVideos(definedData)
      console.log("data", definedData);
    } catch (error) {
      console.log(error);
    }
  }

  const handlesearch = (e) => {
    setSearchBar(e.target.value)
  }
  useEffect(() => {
    (async () =>
      await performApiCall())();
    // setVideos(Data)
  }, [])
  console.log("new data", videos);

  // performApiCall();
  return (
    <div className="container">
      {/* <Dashboard videos={videos} searchBar={searchBar} setSearchBar={setSearchBar}  handlesearch={handlesearch}/> */}
      <VideoPage />
    </div>
  )
}

export default App
