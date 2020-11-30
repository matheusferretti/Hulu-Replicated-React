import { MovieSharp } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import "./Results.css"
import VideoCard from "./VideoCard"
import axios from "./axios";

function Results() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get()
        }

        fetchData();
    }, [])

    return (
        <div className="results">
            {movies.map((movie) => (
            <VideoCard />
            ))}
        </div>
    );
}

export default Results
