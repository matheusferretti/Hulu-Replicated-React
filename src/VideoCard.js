import React from 'react'
import "./VideoCard.css"

function VideoCard({movie}) {
    return (
        <div className="videoCard">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.otakupt.com%2Fwp-content%2Fuploads%2F2014%2F11%2Fe0450rde0c565999e4c77.jpg&f=1&nofb=1" alt="" />
            <p>This is a film about bebop...</p>
            <h2>Movie Title</h2>
            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard
