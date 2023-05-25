import React from 'react';
import "./Dashboard.css";
import Header from '../Components/Header/Header';
import VideoCards from '../Components/Videocards/VideoCards';

const Dashboard = ({videos,searchBar,setSearchBar,handlesearch}) => {
    return (
        <div className="dashboard">
            <Header searchBar={searchBar} setSearchBar={searchBar} handlesearch={handlesearch}/>
            <VideoCards videos={videos}/>
        </div>
    )
}

export default Dashboard