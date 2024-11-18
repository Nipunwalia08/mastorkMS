"use client";

import React, { useState } from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-rocket bg-13c4a1",
    title: "Intelligent Automation",
    shortText:
      "Streamline your operations and boost efficiency with our cutting-edge automation solutions.",
    viewDetails: "/Automation/",
    aosDelay: "100",
    bgImage: "/images/servicePicture/9.png"
  },
  {
    iconName: "pe-7s-diamond bg-6610f2",
    title: "Cybersecurity and Infra Solutions",
    shortText:
      "Safeguard your digital assets with our robust cybersecurity and infrastructure services.",
    viewDetails: "/cyber-security/",
    aosDelay: "200",
    bgImage: "/images/servicePicture/10.png"
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Data-Driven Decision Making",
    shortText:
      "Unlock actionable insights and drive growth with our advanced data-driven decision-making tools.",
    viewDetails: "/data-driven-prediction/",
    aosDelay: "300",
    bgImage: "/images/servicePicture/11.png"
  },
  {
    iconName: "pe-7s-target bg-fc3549",
    title: "Business Process Digitisation and Automation",
    shortText:
      " Transform your business processes with our customizable SaaS solutions leveraging microsoft and other low code platforms",
    viewDetails: "/process-automation/",
    aosDelay: "400",
    bgImage: "/images/servicePicture/12.png"
  },
  {
    iconName: "pe-7s-film bg-00d280",
    title: "Consultation and Advisory",
    shortText:
      "Navigate complex challenges with confidence, guided by our expert consultation and advisory services.",
    viewDetails: "/consulting",
    aosDelay: "500",
    bgImage: "/images/servicePicture/13.png"
  },
  // {
  //   iconName: "pe-7s-users bg-ff612f",
  //   title: "Workshops",
  //   shortText:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  //   viewDetails: "/services/service-details/",
  //   aosDelay: "600",
  // },
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

const Services: React.FC = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p> */}
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => {
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

export default Services;


const ServicesCard: React.FC<ServicesCardProps> = ({ value }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="col-lg-4 col-sm-6"
      data-aos="fade-in"
      data-aos-duration="1000"
      data-aos-delay={value.aosDelay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="service-card-one white-bg border"
        style={{
          padding: 2,
          minHeight: "300px",
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${value.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={`servicecard-title ${hovered ? 'hovered' : ''}`}>
          <h3>
            <Link href={value.viewDetails} className="text-white" style={{ color: "white" }}>
              {value.title}
            </Link>
          </h3>
          {hovered && <p style={{ color: "white", fontWeight: "600" }}>{value.shortText}</p>}

        </div>
      </div>
    </div>
  )
}


{/* {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-6 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div
                    className="service-card-one white-bg border"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
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
                        <Link href={value.viewDetails} className="text-white" style={{ color: "white" }}>
                          {value.title}
                        </Link>
                      </h3>
                      <p style={{ color: "white", fontWeight: "600" }}>{value.shortText}</p>
                    </div>
                  </div>
                </div>
              ))} */}

{/* {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-6 
                  col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                    <div className="service-card-one white-bg border"
                      style={{
                        backgroundImage: `url(${value.bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        filter: 'blur(10px)"'
                      }}>
                      <i className={value.iconName}></i>
                      <h3>
                        <Link href={value.viewDetails} className="text-white" style={{
                          color: "white"
                        }}>{value.title}</Link>
                      </h3>
                      <p style={{
                        color: "white"
                      }}>{value.shortText}</p>
                    </div>
                </div>
              ))} */}