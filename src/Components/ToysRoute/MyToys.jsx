import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Routers/AuthProvider";
import MytoysRow from "./MytoysRow";
import Swal from "sweetalert2";

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
  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete this",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = mytoys.filter((mytoy) => mytoy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  return (
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
          <tbody className="text-white">
            {mytoys.map((mytoy) => (
              <MytoysRow
                key={mytoy._id}
                mytoy={mytoy}
                handleDelete={handleDelete}
              ></MytoysRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
