"use client";

import React from "react";
import Link from "next/link";
import AboutContent from "./AboutContent";
import Network from "./network";

const topServicesData = [
  {
    image: "/images/cyber-security/features/features-3.jpg",
    title: "Cybersecurity",
    shortText:
      "We prioritize safeguarding your digital assets and ensuring uninterrupted business operations through comprehensive cybersecurity solutions. ",
    btnText: "GET STARTED",
    btnLink: "/services/service-details/",
    bgIconName: "fa-solid fa-lock",
    aosDelay: "100",
  },
  {
    image: "/images/cyber-security/features/features-1.jpg",
    title: "Cloud Security",
    shortText:
      "Mastork introduces cutting-edge infrastructure solutions tailored to meet modern business needs, focusing on reliability, scalability, and performance.",
    btnText: "GET STARTED",
    btnLink: "/services/service-details/",
    bgIconName: "fa-solid fa-cloud",
    aosDelay: "200",
  },
  // {
  //   image: "/images/cyber-security/features/features-3.jpg",
  //   title: "Infrastructure Security",
  //   shortText:
  //     "Lorem ipsum dolor sit amLorem ipsum dolor sit amet is consectetur adipiscing elit sed do.",
  //   btnText: "GET STARTED",
  //   btnLink: "/services/service-details/",
  //   bgIconName: "fa-solid fa-shield",
  //   aosDelay: "300",
  // },
];

const TopServices: React.FC = () => {
  return (
    <>
      <div className="cs-features-area">
        <div className="container-fluid">
          <div className="row justify-content-center">
            {topServicesData &&
              topServicesData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-sm-6 p-0" key={i}>
                  <div
                    className="cs-features-item"
                    style={{
                      backgroundImage: `url(${value.image})`,
                    }}
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="content">
                      <h3>{value.title}</h3>
                      <p>{value.shortText}</p>
                      <Link href={value.btnLink} className="get-started-btn">
                        {value.btnText}
                      </Link>
                    </div>
                    <div className="bg-icon">
                      <i className={value.bgIconName}></i>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopServices;
