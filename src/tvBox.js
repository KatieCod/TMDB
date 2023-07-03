import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const imageURL = "https://image.tmdb.org/t/p/w500/"

function TvBox({ name, poster_path, vote_average, first_air_date }) {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);
    const handleClose = () => setShow(!show);

    return (
        <div className="card" onClick={handleShow} style={{ width: "16rem" }} >
            <img className="card-img-top" src={imageURL + poster_path} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-text">{name}</h5>
                <Modal show={show}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h3 className="card-text">{name}</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="card-img-top " src={imageURL + poster_path} style={{ width: "29rem" }} />
                        <h5 className="card-text"> ImDb: {vote_average}</h5>
                        <h5 className="card-text"> Release date: {first_air_date}</h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="secondary" onClick={handleClose}>CLOSE</Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default TvBox;