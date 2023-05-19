import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Routers/AuthProvider";
import MytoysRow from "./MytoysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, []);
  return (
    <>
      <div>
        <h1>my toys here</h1>
      </div>
      <>
        <div className="text-center my-10">
          <h1 className="text-4xl font-bold">My Toys</h1>
        </div>
        <div className="overflow-x-auto m-5">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-white">
                <th></th>
                <th>Toy Name</th>
                <th>Sub-Catagory</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {mytoys.map((mytoy) => (
                <MytoysRow key={mytoy._id} mytoy={mytoy}></MytoysRow>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </>
  );
};

export default MyToys;
