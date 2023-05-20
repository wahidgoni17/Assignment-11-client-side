import React from "react";
import logo from "../../../../assets/63efa4c96df9f10f76be8e72.avif";

const VisitUs = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold">Visit Us!</h1>
            <p className="mb-5 text-4xl text-black font-bold">
              Shop their favorite toys,characters,and more at your favorite
              childhood toy store!
            </p>
            <button className="btn text-black bg-orange-50 text-xl border-none">
              Find Your Nearest ToyHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
