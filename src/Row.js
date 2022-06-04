import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

// snippet code runs based on condition
    
    useEffect(() => {
// if array blank, only run once when row loads
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
            {movies.map(movie => (
                <img className='row__poster'
                src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
            ))}
        </div>
        {/* container, with posters of films that we are seeing */}
    </div>
  )
}

export default Row;
