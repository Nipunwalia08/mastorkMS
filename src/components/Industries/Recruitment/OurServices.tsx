"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const servicesData = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "HRMS (Recruit Rabbit)",
    shortText:
      "Accelerates HR processes with intelligent recruitment and streamlined employee management.",
    viewDetails: "https://launch.enroles.com/69/public/",
    aosDelay: "100",
    bgImage: "/images/automationsPictures/finance.png"
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Resume builder (Resumesy)",
    shortText:
      "Crafts standout resumes effortlessly with intuitive design and customizable templates.",
    viewDetails: "https://resumesy.online/",
    aosDelay: "200",
    bgImage: "/images/automationsPictures/recruitment.png"
  },
 
];
type ServiceData = {
  aosDelay: string;
  bgImage: string;
  viewDetails: string;
  title: string;
  shortText: string;
};

interface ServicesCardProps {
  value: ServiceData;
}

const OurServices: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Recruitment Products</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p> */}
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 7).map((value, i) => {
                return (
                  <ServicesCard value={value} key={i} />
                )
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;

const ServicesCard: React.FC<ServicesCardProps> = ({ value }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="col-lg-6 col-sm-6"
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-delay={value.aosDelay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="service-card-one white-bg"
        style={{
          padding: "15px",
          minHeight: "200px",
          position: "relative",
          border: "1px solid #ff2988",
          borderRadius: "10px",
          borderLeft: "5px solid #ff5826",
          transition: "all ease-in-out 0.3s",
          display: "flex",
          flexDirection: "row",
          gap: "25px"

        }}
      >
        <div style={{
          maxWidth: "38%",
          marginBottom: "12px"
        }}>
          <img src={value.bgImage} style={{ boxShadow: "0 .125rem .25rem rgba(0, 0, 0, .075) !important", objectFit: "cover", borderRadius: "10px !important", }}></img>
        </div>
        <div>
          <h3 style={{ color: "#1e1e1e", fontSize: "25px" }} >
            {value.title}
          </h3>
          <p style={{ color: "#18181B", fontWeight: "600" }}>{value.shortText}</p>

          <Link href={value.viewDetails} style={{ color: "#ff5826",marginTop:"7px",fontWeight:"700"}} target="blank">
            PREVIEW <FaArrowRight/>
          </Link>

        </div>

      </div>
    </div>
  )
}





/* {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-4 
                  col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="service-card-one bg-fcfbfb text-center"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                    }}>
                    <div
                      style={{
                        backgroundImage: `url(${value.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        filter: "blur(4px)",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 1
                      }}
                    ></div>
                    <div style={{ position: "relative", zIndex: 1, padding: "20px" }}>
                      <h3>
                        <Link href={value.viewDetails}>{value.title}</Link>
                      </h3>
                      <p style={{ color: "black", fontWeight: "600" }}>{value.shortText}</p>
                    </div>
                  </div>
                </div>
              ))} */