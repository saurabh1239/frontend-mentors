import "./videoPlayer.css"
import like from "../../../public/like.svg"
import unlike from "../../../public/435k.svg"
import { useLocation } from "react-router-dom"

const VideoPLayer = ({videoLink}) => {
  const params = useLocation()
  console.log("pararmms",params);
  return (
    <div className="videoPlayer">
      <div className="videoWindow">
        <iframe src={`https://www.${videoLink}`} className="videoMaster" />
        <span className="videoDesc">
          <span className="Desc-left">
            <h2>heading title</h2>
            <ul>
              <li>12+</li>
              <li>5 months</li>
            </ul>
          </span>
          <span className="Desc-right">
            <button>
              <img src={like} alt="" />
              <p>
                12k
              </p>
            </button>
            <button>
              <img src={unlike} alt="" />
              <p>
                43%
              </p>
            </button>
          </span>
        </span>
      </div>

    </div>
  )
}

export default VideoPLayer