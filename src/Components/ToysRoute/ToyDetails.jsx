import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toyDetails = useLoaderData()
    console.log(toyDetails)
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Toy Details</h1>
      </div>
    </>
  );
};

export default ToyDetails;
