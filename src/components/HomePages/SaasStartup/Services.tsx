"use client";

import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "fa-solid fa-gear",
    title: "Expertise and Innovation",
    shortText:
      "Leverage our years of experience and advanced technology to drive your digital transformation.",
    serviceDetailsLink: "",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-building-lock",
    title: "Tailored Solutions",
    shortText:
      "Transform your business with tailored solutions that enhance efficiency and drive growth.",
    serviceDetailsLink: "",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-certificate",
    title: "Comprehensive Tools",
    shortText:
      "Access a full suite of tools and services, from advanced analytics to real-time monitoring.",
    serviceDetailsLink: "",
    aosDelay: "300",
  },
  {
    iconName: "fa-solid fa-file-pen",
    title: "Data-Driven Decisions",
    shortText:
      "Transform raw data into actionable insights for informed decision-making.",
    serviceDetailsLink: "",
    aosDelay: "400",
  },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="bg-dark with-black-border pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Why Us</span>
            <h2>Why Choose Mastork for Business Process Digitization & Automation?</h2>
            <p>
            Transform your business with tailored, innovative digital solutions that enhance efficiency, drive growth, and provide exceptional support.
            </p>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 4).map((value, i) => (
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12" key={i}>
                  <div
                    className="saas-services-box color-white"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={`icon ${value.iconName}`}></i>
                    <h3>
                      <Link href={value.serviceDetailsLink}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
