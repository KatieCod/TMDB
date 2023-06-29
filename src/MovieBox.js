import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const imageURL = "https://image.tmdb.org/t/p/w500/"

function MovieBox({ original_title, poster_path, vote_average, release_date, overview}) {

    const [show, setShow] = useState(false);

    const handleShow = () => {setShow(true); console.log(show)};
    const handleClose = () => {setShow(false); console.log(show)};


    return (
        <div className="card" onClick={handleShow} style={{ width: "16rem" }}>
            <img classname="card-img-top" src={imageURL + poster_path} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-text">{original_title}</h5>
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>
                        <h3 className="card-text">{original_title}</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img classname="card-img-top " src={imageURL + poster_path} style={{ width: "29rem" }} />
                        <h5 className="card-text"> ImDb: {vote_average}</h5>
                        <h5 className="card-text"> Release date: {release_date}</h5>
                        <h5 className="card-text"> Overview:</h5>
                        <p className="card-text">  {overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={handleClose}>CLOSE</button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default MovieBox;