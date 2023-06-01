import React, { useState } from 'react';
import "./Dashboard.css";
import Header from '../Components/Header/Header';
import VideoCards from '../Components/Videocards/VideoCards';
import Modals from '../Components/Modals/Modals';

const Dashboard = ({ videos, searchBar,
    setSearchBar, handlesearch,
    setVideoLink, propData,
    setPropData, genreFilter, setGenreFilter,
    ageFilter, setAgeFilter }) => {
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
                modalOpen={modalOpen} genreFilter={genreFilter}
                setGenreFilter={setGenreFilter}
                ageFilter={ageFilter} setAgeFilter={setAgeFilter} />
            <VideoCards
                videos={videos}
                propData={propData}
                setPropData={setPropData}
            />
        </div>
    )
}

export default Dashboard