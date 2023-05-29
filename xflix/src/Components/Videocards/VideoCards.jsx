import { Link, useLocation } from "react-router-dom";
import "./VideoCards.css"

const VideoCards = ({ videos, propData, setPropData }) => {
    const params = useLocation();

    const handleVideo = (link) => {
        propData.title = link.title;
        propData.VideoLink = link.videoLink;
        propData.contentRating = link.contentRating;
        propData.releaseDate = link.releaseDate;
        propData.upvote = link.votes.upVotes;
        propData.downVote = link.votes.downVote;



        // const {name,value} = link;
        console.log("link", propData);
        // setPropData((prev)=>{
        //     return{...prev,[name]:value}
        // })

        // const { videoLink, contentRating, releaseDate } = link;
        // const{upVote,downVote} =link.votes;
        console.log(propData);
    }

    return (
        <div className="videocards">
            {videos.map((item, id) =>
                <Link to={"/Video"} key={id}>
                    <div className="card"  onClick={() => handleVideo(item)}>
                        <img src={item.previewImage} alt="" />
                        <span className="cardTitle">
                            {item.title}
                        </span>
                        <span className="releaseDatep">
                            {item.releaseDate}
                        </span>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default VideoCards