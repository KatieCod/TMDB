import React from "react";

const imageURL = "https://image.tmdb.org/t/p/w500/"

function TvBox({ name, poster_path }) {
    return (
        <div className="card" style={{ width: "16rem" }}>
            <img classname="card-img-top" src={imageURL + poster_path} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-text">{name}</h5>
            </div>
        </div>
    )
}

export default TvBox;