import "./videoPlayer.css"
import like from "../../../public/like.svg"
import unlike from "../../../public/435k.svg"
import { useLocation } from "react-router-dom";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const VideoPLayer = ({propData,
  setPropData }) => {
  // const params = useLocation()
  // console.log("pararmms", params);
  return (
    <div className="videoPlayer">
      <div className="videoWindow">
        <iframe src={`https://www.${propData.VideoLink}`} className="videoMaster" />
        <span className="videoDesc">
          <span className="Desc-left">
            <h2>{propData.title}</h2>
            <ul>
              <li>{propData.contentRating}</li>
              <li>{propData.releaseDate}</li>
            </ul>
          </span>
          <span className="Desc-right">
            <button>
              <ThumbUpIcon/>
              <p>
                {propData.upvote}
              </p>
            </button>
            <button>
              <ThumbDownIcon />
              <p>
              {propData.downVote}
              </p>
            </button>
          </span>
        </span>
      </div>

    </div>
  )
}
e
export default VideoPLayer