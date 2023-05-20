import React from "react";
import { Link } from "react-router-dom";

const SandTools = ({ sandTool }) => {
  const { _id, toyPhoto, toyName, price, quantity, ratings } = sandTool;
  return (
    <>
      <div className="card w-96 shadow-xl">
        <figure>
          <img className="h-64 w-96" src={toyPhoto} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <div className="my-4">
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Ratings: {ratings}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/toydetails/${_id}`}>
              <button className="btn btn-accent">View details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SandTools;
