import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Molds from "./Molds";

const Catagories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);
  const molds = categories.filter(
    (category) => category.subCatagory === "Sandcastle Molds"
  );
  return (
    <>
      <div className="text-center mx-auto">
        <h1 className="text-5xl font-bold mb-4">Shop By Catagories</h1>
        <p>Buy your toys with Catagories to build your Sand Castle</p>
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
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Catagories;
