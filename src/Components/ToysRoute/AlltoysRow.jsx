import React from "react";

const AlltoysRow = ({ toy }) => {
    const {sellerName, toyName, subCatagory, price, quantity}= toy
    console.log(toy)
  return (
    <>
      <tr className="text-white">
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCatagory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <th><button className="btn btn-accent btn-sm">View details</button></th>
      </tr>
    </>
  );
};

export default AlltoysRow;
