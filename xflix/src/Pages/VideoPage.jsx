import { useLocation } from "react-router-dom"
import Header from "../Components/Header/Header"
import VideoCards from "../Components/Videocards/VideoCards"
import VideoPLayer from "../Components/Videoplayer/VideoPLayer"
import "./VideoPage.css"

const VideoPage = ({ videos,setVideoLink,videoLink }) => {
  const params = useLocation();
  console.log(params.pathname);
  return (
    <div className="videopage">
      <Header />
      <VideoPLayer videoLink={videoLink}/>
      <hr />
      <VideoCards videos={videos} setVideoLink={setVideoLink} />
    </div>
  )
}

export default VideoPage