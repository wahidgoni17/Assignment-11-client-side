import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import pics from "../../../../assets/644acc6e6df9f10f76deb23d.avif";
import Molds from "./Molds";
import Sculpts from "./Sculpts";
import SandTools from "./SandTools";

const Catagories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-server-side-flax.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  const molds = categories.filter(
    (category) => category.subCatagory === "Sandcastle Molds"
  );
  const sculpts = categories.filter(
    (category) => category.subCatagory === "Sand Sculpting Tools"
  );
  const sandTools = categories.filter(
    (category) => category.subCatagory === "Sandcastle Sand Tools"
  );
  return (
    <>
      <div data-aos="fade-left" data-aos-duration="3000">
        <div className="text-center mx-auto">
          <h1 className="text-5xl font-bold mb-4">Shop By Categories</h1>
          <p>Buy your toys with Categories to build your Sand Castle</p>
        </div>
        <div className="px-10 my-10">
          <Tabs>
            <TabList className="text-xl mb-5">
              <Tab>Sandcastle Molds</Tab>
              <Tab>Sand Sculpting Tools</Tab>
              <Tab>Sandcastle Sand Tools</Tab>
            </TabList>

            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-2 mx-10">
                {molds.map((mold) => (
                  <Molds key={mold._id} mold={mold}></Molds>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-2 mx-10">
                {sculpts.map((sculpt) => (
                  <Sculpts key={sculpt._id} sculpt={sculpt}></Sculpts>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-2 mx-10">
                {sandTools.map((sandTool) => (
                  <SandTools key={sandTool._id} sandTool={sandTool}></SandTools>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <img data-aos="zoom-in" data-aos-duration="2000" src={pics} alt="" />
    </>
  );
};

export default Catagories;
