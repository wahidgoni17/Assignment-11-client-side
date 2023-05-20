import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Routers/AuthProvider";
import Swal from 'sweetalert2'
import { updateTitle } from "../Title/Title";
import { useLocation } from "react-router-dom";

const Addtoys = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation()
  useEffect(()=>{
    const route = location.pathname
    updateTitle(route)
  },[location])
  const handleAddToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const sellerName = user?.displayName;
    const toyName = form.toyName.value;
    const toyPhoto = form.toyPhoto.value;
    const subCatagory = form.subCatagory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const ratings = form.ratings.value;
    const details = form.details.value;
    const toyData = {
      email,
      sellerName,
      toyName,
      toyPhoto,
      subCatagory,
      price,
      quantity,
      ratings,
      details,
    };
    console.log(toyData);
    fetch("http://localhost:4000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Add Toys Here</h1>
      </div>
      <div className="p-10 bg-slate-100">
        <h1 className="text-center my-5 text-3xl font-semibold">
          Give Some Information
        </h1>
        <form onSubmit={handleAddToys}>
          <div className="flex gap-5 my-5">
            <div className="form-control w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Seller Email"
                defaultValue={user?.email}
                className="input text-white input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                placeholder="Seller Name"
                className="input text-white input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-5 my-5">
            <div className="form-control w-1/2">
              <input
                type="text"
                name="toyName"
                placeholder="Toy Name"
                className="input text-white input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="url"
                name="toyPhoto"
                placeholder="Toy Photo URL"
                className="input text-white input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-5 my-5">
            <div className="form-control w-1/2">
              <input
                type="text"
                name="subCatagory"
                placeholder="Sub Catagory"
                className="input text-white input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                name="price"
                placeholder="Price"
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
          <div>
            <div className="form-control">
              <input
                type="text"
                name="details"
                placeholder="Description"
                className="input text-white input-bordered h-28"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-outline btn-accent"
              type="submit"
              value="Add Toy"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Addtoys;
