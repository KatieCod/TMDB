import React, { useState, useEffect } from "react";
import MovieBox from "./MovieBox";

const moviesUrl = "https://api.themoviedb.org/3/movie/popular?api_key=8d97210e6edd66eb9e967278325836d0"

function MovieGalery() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(moviesUrl)
            .then((res) => res.json())
            .then(data => {
                setMovies(data.results)
            })
    }, [])

    return (
        <div className='d-flex p-3 text-center' style={{ overflowX: "auto" }}>
            <div className='d-flex flex-row' >
                {movies.map((movie) => <MovieBox key={movie.id} {...movie} />)}
            </div>
        </div>
    )
}

export default MovieGalery;