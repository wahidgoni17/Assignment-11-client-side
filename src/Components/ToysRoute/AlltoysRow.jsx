import React from "react";
import { Link } from "react-router-dom";

const AlltoysRow = ({ toy }) => {
    const {_id, sellerName, toyName, subCatagory, price, quantity}= toy
  return (
    <>
      <tr className="text-white">
        <td>{sellerName}</td>
        <td>{toyName}</td>
        <td>{subCatagory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <th><Link to={`/toydetails/${_id}`}><button className="btn btn-accent btn-sm">View details</button></Link></th>
      </tr>
    </>
  );
};

export default AlltoysRow;
