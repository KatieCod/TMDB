import React from "react";
import MovieBox from "./MovieBox";

function MovieGalery(props) {

    return (
        <div className='d-flex p-3 text-center' style={{ overflowX: "auto" }}>
            <div className='d-flex flex-row' >
                {props.movies.filter(movie => movie.original_title.includes(props.query)).map((movie) => <MovieBox key={movie.id} {...movie} />)}            </div>
        </div>
    )
}

export default MovieGalery;