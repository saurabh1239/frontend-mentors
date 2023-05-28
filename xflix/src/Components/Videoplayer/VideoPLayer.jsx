import "./videoPlayer.css"
import like from "../../../public/like.svg"
import unlike from "../../../public/435k.svg"
import { useLocation } from "react-router-dom"

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
              <img src={like} alt="" />
              <p>
                {propData.upvote}
              </p>
            </button>
            <button>
              <img src={unlike} alt="" />
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

export default VideoPLayer