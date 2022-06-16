import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Food({ food }) {
  const [varient, setvarient] = useState("small");
  const [quantity, setquantity] = useState(1);

  // For Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="m-2 mt-5 p-4 shadow">
      <div onClick={handleShow}>
        {/* Title */}
        <h3 className="foodTitle">{food.name}</h3>

        {/* Image */}
        <img src={food.image} className="img-fluid foodImage" alt="food" />
      </div>

      {/* Varients and Quantity */}
      <div className="container-fluid">
        {/* Varients */}
        <div className="m-1 w-100">
          <p>Varients:</p>
          <select
            className="form-select"
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {food.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        {/* Quantity */}
        <div className="m-1 w-100">
          <p>Quantity:</p>
          <select
            className="form-select"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      {/* Prices and Add to Cart */}
      <div className="container-fluid mt-2">
        {/* Prices */}
        <div className="mt-2 w-100">
          <h5>Price: {food.prices[0][varient] * quantity} Rs</h5>
        </div>
        {/* Add to Cart */}
        <div className="w-100">
          <button type="button" class="p-2 btn btn-danger">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={food.image} className="modalImage img-fluid" alt="food" />
          <p>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
