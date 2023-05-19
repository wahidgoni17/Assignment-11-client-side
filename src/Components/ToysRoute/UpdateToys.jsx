import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateToys = () => {
  const toydata = useLoaderData();
  const { _id, subCatagory, price, quantity, details, toyName } = toydata;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const subCatagory = form.subCatagory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updatedInfo = { toyName, subCatagory, price, quantity, details };
    fetch(`http://localhost:4000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          confirm("Updated Successfully");
        }
      });
  };
  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold">Update Toys</h1>
      </div>
      <div className="p-10 bg-slate-100">
        <form onSubmit={handleUpdate}>
          <div className="flex gap-5 my-5">
            <div className="form-control w-1/2">
              <input
                type="text"
                name="toyName"
                placeholder="Toy Name"
                defaultValue={toyName}
                className="input text-white input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                name="subCatagory"
                placeholder="Sub Catagory"
                defaultValue={subCatagory}
                className="input text-white input-bordered"
              />
            </div>
          </div>
          <div className="flex gap-5 my-5">
            <div className="form-control w-1/2">
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity"
                className="input text-white input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <input
                type="text"
                name="price"
                placeholder="Price"
                defaultValue={price}
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
                defaultValue={details}
                className="input text-white input-bordered h-28"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-outline btn-accent"
              type="submit"
              value="Update Toy"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateToys;
