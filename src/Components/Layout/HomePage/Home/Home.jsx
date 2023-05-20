import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Catagories from "../Catagories/Catagories";
import VisitUs from "../VisitUs/VisitUs";
import { updateTitle } from "../../../Title/Title";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    const router = location.pathname;
    updateTitle(router);
  }, [location]);
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <VisitUs></VisitUs>
      <Catagories></Catagories>
    </div>
  );
};

export default Home;
