import { Link, useLocation } from "react-router-dom";
import "./VideoCards.css"
// "votes": {
//     "upVotes": 0,
//     "downVotes": 0
// },
// "previewImage": "https://i.ytimg.com/vi/nx2-4l4s4Nw/mqdefault.jpg",
// "viewCount": 83,
// "_id": "60331f421f1d093ab5424489",
// "videoLink": "youtube.com/embed/nx2-4l4s4Nw",
// "title": "Consumed by the Apocalypse",
// "genre": "Movies",
// "contentRating": "12+",
// "releaseDate": "18 Jan 2021"
const VideoCards = ({ videos, propData, setPropData }) => {
    // console.log("vider",typeof(videos));
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