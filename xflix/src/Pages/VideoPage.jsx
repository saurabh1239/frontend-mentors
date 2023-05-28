import { useLocation } from "react-router-dom"
import Header from "../Components/Header/Header"
import VideoCards from "../Components/Videocards/VideoCards"
import VideoPLayer from "../Components/Videoplayer/VideoPLayer"
import "./VideoPage.css"

const VideoPage = ({ videos, setVideoLink, propData, setPropData }) => {
  const params = useLocation();
  console.log(params.pathname);
  return (
    <div className="videopage">
      <Header />
      <VideoPLayer  propData={propData}
        setPropData={setPropData} />
      <hr />
      <VideoCards videos={videos} setVideoLink={setVideoLink} propData={propData}
        setPropData={setPropData} />
    </div>
  )
}

export default VideoPage