import React from 'react';
import "./Header.css";

function Header() {
    return (
        //BEM naming class
        <div className="header">
            <div className="header__icons">
                {/* All icons here */}
            </div>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.suplari.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fhulu-logo-white.png&f=1&nofb=1" alt=""></img>
        </div>
    )
}

export default Header
