import React from "react";

const imageURL = "https://image.tmdb.org/t/p/w500/"

function MovieBox({ original_title, poster_path }) {
    return (
        <div className="card" style={{ width: "16rem" }}>
            <img classname="card-img-top hover:scale-105 ease-in-out duration-300" src={imageURL + poster_path} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-text">{original_title}</h5>
            </div>
        </div>
    )
}

export default MovieBox;