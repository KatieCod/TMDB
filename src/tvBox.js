import React, { useState } from "react";
import { CloseButton, Modal } from "react-bootstrap";


const imageURL = "https://image.tmdb.org/t/p/w500/"

function TvBox({ name, poster_path, vote_average, first_air_date }) {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="card" onClick={handleShow} style={{ width: "16rem" }} >
            <img classname="card-img-top" src={imageURL + poster_path} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-text">{name}</h5>
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>
                        <h3 className="card-text">{name}</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img classname="card-img-top " src={imageURL + poster_path} style={{width: "29rem"}}/>
                        <h5 className="card-text"> ImDb: {vote_average}</h5>
                        <h5 className="card-text"> Release date: {first_air_date}</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={handleClose}>CLOSE</button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default TvBox;