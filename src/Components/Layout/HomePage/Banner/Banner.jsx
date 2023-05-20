import React from "react";
import pic3 from "../../../../assets/3.jpg";
const Banner = () => {
  return (
    <div data-aos="zoom-in" data-aos-duration="3000">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${pic3})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-white text-5xl font-bold">Build Your Dream Castle</h1>
            <p className="mb-5 text-slate-100">
              Want to build Your dream Castle in sand? Explore Our Brand new sand castle toys,we bring to you our best quality toys.
            </p>
            <button className="btn btn-secondary">New Toys</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
