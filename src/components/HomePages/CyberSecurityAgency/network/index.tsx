"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Services from "./DataService";
import Cloud from "./Cloud";
import Networking from "./Networking";
import IAC from "./IAC";
// import Product from "./Product";

const network: React.FC = () => {
  return (
    <>
      <section className="case-studies-area pt-100 pb-70 " style={{ color: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "white" }}>NETWORK AND INFRASOLUTIONS</h2>
            <p style={{ color: "white" }}>
              At Mastork, we are excited to introduce our new vertical dedicated to providing cutting-edge infrastructure solutions tailored to meet the evolving needs of modern businesses. With a focus on reliability, scalability, and performance, our comprehensive suite of offerings ensures that your IT infrastructure remains robust and resilient in todays dynamic digital landscape.
            </p>
          </div>

          <div className="case-studies-tabs">
            <Tabs>
              <TabList>
                <Tab>Data Center Services</Tab>
                <Tab>Cloud Services</Tab>
                <Tab>Networking Solutions</Tab>
                <Tab>Infrastructure as Code (IaC)</Tab>
                {/* <Tab>Product</Tab> */}
              </TabList>

              <TabPanel>
                <Services />
              </TabPanel>

              <TabPanel>
                <Cloud />
              </TabPanel>

              <TabPanel>
                <Networking />
              </TabPanel>

              <TabPanel>
                <IAC />
              </TabPanel>

            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default network;
