import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Catagories = () => {
  return (
    <>
      <div className="text-center mx-auto">
        <h1 className="text-5xl font-bold mb-4">Shop By Catagories</h1>
        <p>Buy your toys with Catagories to build your Sand Castle</p>
      </div>
      <div className="px-10 my-10">
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
            <Tab>Title 3</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
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
