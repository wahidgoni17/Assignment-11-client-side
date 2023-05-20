import React, { useEffect, useState } from "react";
import AlltoysRow from "./AlltoysRow";
import { updateTitle } from "../Title/Title";
import { useLocation } from "react-router-dom";

const Alltoys = () => {
  const [toys, setToys] = useState([]);
  const location = useLocation()
  useEffect(() => {
    fetch("https://assignment-11-server-side-flax.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data.slice(0, 20));
      });
      const route = location.pathname
      updateTitle(route)
  }, [location]);
  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">All Toys</h1>
      </div>
      <div className="overflow-x-auto m-5">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Catagory</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <AlltoysRow key={toy._id} toy={toy}></AlltoysRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Alltoys;
