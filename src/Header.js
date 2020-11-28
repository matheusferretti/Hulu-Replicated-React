import React from 'react';
import "./Header.css";
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function Header() {
    return (
        //BEM naming class
        <div className="header">
            <div className="header__icons">
                <HomeIcon />
                <FlashOnIcon />
                <LiveTvIcon />
                <VideoLibraryIcon />
                <SearchIcon />
                <PersonOutlineIcon />
            </div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.suplari.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fhulu-logo-white.png&f=1&nofb=1" alt=""></img>
        </div>
    )
}

export default Header
