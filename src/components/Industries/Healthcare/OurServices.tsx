"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const servicesData = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "Hospital management system (HealthyWeb)",
    shortText:
      "Optimizes hospital operations with integrated patient management and real-time administrative tools.",
    viewDetails: "https://launch.enroles.com/204/",
    aosDelay: "100",
    bgImage: "/images/automationsPictures/finance.png"
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Pharmacy management system (Phroma)",
    shortText:
      "Enhances pharmacy efficiency with seamless inventory management and prescription tracking.",
    viewDetails: "https://launch.enroles.com/29/",
    aosDelay: "200",
    bgImage: "/images/automationsPictures/recruitment.png"
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Clinic Management system (Clinicio)",
    shortText:
      "Streamlines clinic operations with comprehensive patient scheduling and record management.",
    viewDetails: "https://clinicio.enroles.com/",
    aosDelay: "300",
    bgImage: "/images/automationsPictures/logistics.png"
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Lab management system (All Healed)",
    shortText:
      "Transform lab efficiency with seamless test management and real-time result delivery.",
    viewDetails: "https://launch.enroles.com/207/",
    aosDelay: "400",
    bgImage: "/images/automationsPictures/healthcare.png"
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Customer support",
    shortText:
      "Enhances service efficiency with intelligent, 24/7 support and automated response solutions.",
    viewDetails: "https://drive.google.com/file/d/1WIv5viSV9Vr5np8nNBntpaJYc6HsqenD/view",
    aosDelay: "200",
    bgImage: "/images/automationsPictures/recruitment.png"
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Lead management system",
    shortText:
      "Cultivates valuable relationships with automated, personalized engagement and targeted follow-ups.",
    viewDetails: "https://drive.google.com/file/d/1gamYMxz55I_AYlTz7FOiSs9asXdBWBsH/view",
    aosDelay: "300",
    bgImage: "/images/automationsPictures/logistics.png"
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Top management",
    shortText:
      "Empowers leadership with strategic insights and comprehensive oversight tools for optimal decision-making.",
    viewDetails: "https://drive.google.com/file/d/1XRV4ChCXIj_UtTVA6Z84AwvMDE6vDOsN/view",
    aosDelay: "400",
    bgImage: "/images/automationsPictures/healthcare.png"
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
            <h2>Our Healthcare Products</h2>
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