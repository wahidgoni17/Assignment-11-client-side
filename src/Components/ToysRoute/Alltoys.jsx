import React, { useEffect, useState } from "react";
import AlltoysRow from "./AlltoysRow";

const Alltoys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);
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
