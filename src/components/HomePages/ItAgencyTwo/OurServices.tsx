"use client";

import React, { useState } from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "pe-7s-comment bg-13c4a1",
    title: "Finance",
    shortText:
      "Enhance regulatory compliance, streamline budgeting, and optimize workforce management.",
    viewDetails: "/finance",
    aosDelay: "100",
    bgImage: "/images/automationsPictures/finance.png"
  },
  {
    iconName: "pe-7s-display2 bg-6610f2",
    title: "Recruitment",
    shortText:
      "Automate resume screening, scheduling, and onboarding for efficient talent acquisition.",
    viewDetails: "/recruitment",
    aosDelay: "200",
    bgImage: "/images/automationsPictures/recruitment.png"
  },
  {
    iconName: "pe-7s-light bg-ffb700",
    title: "Logistics",
    shortText:
      "Improve fleet management and warehouse operations to boost efficiency and reduce costs.",
    viewDetails: "/logistics",
    aosDelay: "300",
    bgImage: "/images/automationsPictures/logistics.png"
  },
  {
    iconName: "pe-7s-phone bg-fc3549",
    title: "Healthcare",
    shortText:
      "Transform patient monitoring, appointment scheduling, and EHR management for better care.",
    viewDetails: "/healthcare",
    aosDelay: "400",
    bgImage: "/images/automationsPictures/healthcare.png"
  },
  {
    iconName: "pe-7s-cart bg-00d280",
    title: "Manufacturing",
    shortText:
      "Optimize inventory, enhance maintenance practices, and streamline workflow automation.",
    viewDetails: "/manufacturing",
    aosDelay: "500",
    bgImage: "/images/automationsPictures/manufacturing.png"
  },
  {
    iconName: "pe-7s-users bg-ff612f",
    title: "Gaming",
    shortText:
      "Automate a versatile and exciting real cash multi-gaming casino application designed for enthusiasts of card games and more.",
    viewDetails: "/gaming",
    aosDelay: "600",
    bgImage: "/images/automationsPictures/gaming.webp"
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
            <h2>Industries Benefiting from Intelligent Automation</h2>
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

export default OurServices;

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
          padding: 0,
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