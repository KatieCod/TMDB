import React from "react";

function Banner(props) {
    return (
        <div className="jumbotron jumbotron-fluid" class="theImage">
            <div className="container">
                <h1 className="display-4" style={{ color: "white" }}>WELCOME!</h1>
                <p className="lead" style={{ color: "white" }}>Millions of movies are waiting for you!</p>
                <form className="form-inline my-2 my-lg-0" onSubmit={props.handleClick}>
                    <input name="search" class="theInput" className="form-control mr-sm-2" type="search" placeholder="Search a movie" aria-label="Search" />
                    <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Banner;