import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">AT KATIE'S </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Movies </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/TvGalery">TV Shows</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={props.handleClick}>
                        <input name="search" className="form-control mr-sm-2" type="search" placeholder="Search a movie" />
                        <button  className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header;