import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateToys = () => {
  const toydata = useLoaderData();
  const {
    subCatagory,
    price,
    quantity,
    ratings,
    details,
  } = toydata
  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold">Update Toys</h1>
      </div>
      <div className="p-10">
        <form>
          <div className="flex gap-5 my-5">
            <div className="form-control w-1/2">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input text-white input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                name="ratings"
                placeholder="Ratings"
                className="input text-white input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-5 my-5">
            <div className="form-control w-1/2">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                className="input text-white input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                name="ratings"
                placeholder="Ratings"
                className="input text-white input-bordered"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateToys;
