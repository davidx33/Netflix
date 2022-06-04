import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';

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
    <div>
        <h2>{title}</h2>
        {/* container, with posters of films that we are seeing */}
    </div>
  )
}

export default Row;
