import React, { useEffect, useState } from "react";
import SinglePic from "./SinglePic";

const Gallery = () => {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-side-flax.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => {
        setPics(data);
      });
  }, []);
  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold mb-4">Explore Toys</h1>
        <p className="text-lg">Lets Explore some brand new toys to make a dream castle</p>
      </div>
      <div className="grid my-10 gap-5 grid-cols-1 lg:grid-cols-3">
        {
            pics.map(pic => <SinglePic key={pic._id} pic={pic}></SinglePic>)
        }
      </div>
    </div>
  );
};

export default Gallery;
