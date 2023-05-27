import React, { useState } from 'react';
import "./Dashboard.css";
import Header from '../Components/Header/Header';
import VideoCards from '../Components/Videocards/VideoCards';
import Modals from '../Components/Modals/Modals';

const Dashboard = ({ videos, searchBar,
    setSearchBar, handlesearch,
    setVideoLink, propData,
    setPropData }) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="dashboard">
            {
                modalOpen &&
                <Modals modalOpen={modalOpen}
                    setModalOpen={setModalOpen} />
            }
            <Header searchBar={searchBar} setSearchBar={searchBar}
                handlesearch={handlesearch} setModalOpen={setModalOpen}
                modalOpen={modalOpen} />
            <VideoCards videos={videos} setVideoLink={setVideoLink}
                propData={propData}
                setPropData={setPropData}
            />
        </div>
    )
}

export default Dashboard