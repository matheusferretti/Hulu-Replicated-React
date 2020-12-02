import React from 'react'
import "./VideoCard.css"

const base_url = "https://image.tmdb.org/t/p/original/"; 

function VideoCard({movie}) {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster" />
            <p>{movie.overview}</p>
            <h2>Movie Title</h2>
            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard
