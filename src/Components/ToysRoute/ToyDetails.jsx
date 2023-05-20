import React, { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  const {
    toyPhoto,
    email,
    sellerName,
    toyName,
    price,
    quantity,
    subCatagory,
    details,
  } = toyDetails;
  console.log(toyDetails);
  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold">Toy Details</h1>
      </div>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col gap-6">
            <img
              src={toyPhoto}
              className="max-w-sm rounded-lg shadow-2xl my-5"
            />
            <div className="text-center my-5">
              <h1 className="text-5xl my-4 font-bold">{toyName}</h1>
              <p className="py-3">
                <span className="text-xl font-bold">Sub-Catagory :</span> {subCatagory}
              </p>
              <p className="py-3">
                <span className="text-xl font-bold">Seller-Email :</span> {email}
              </p>
              <p className="py-3">
                <span className="text-xl font-bold">Seller-Name :</span> {sellerName}
              </p>
              <p className="py-3">
                <span className="text-xl font-bold">Price :</span> {price}
              </p>
              <p className="py-3">
                <span className="text-xl font-bold">Available Quantity :</span> {quantity}
              </p>
              <p className="py-3">
                <span className="text-xl font-bold">Description :</span> {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
