"use client";

import React from "react";
import Image from "next/image";

import aboutImg from "../../../../public/images/saas-startup/about-img.png";

const howItWorksData = [
  {
    iconName: "fa-solid fa-chart-line",
    title: "Accelerated Transformation",
    shortText:
      "Quickly address common business challenges and optimize processes with our ready-to-use SaaS solutions, accelerating your digital transformation journey.",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-user-lock",
    title: "Scalability and Ease",
    shortText:
      "Built with scalability and ease of implementation in mind, our solutions offer immediate access to cutting-edge technology without extensive customization, ensuring seamless integration into your operations.",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-arrows-rotate",
    title: "Flexible Workflows",
    shortText:
      "Seamlessly convert manual procedures into flexible, digital workflows, enhancing efficiency and agility in your business processes.",
    aosDelay: "300",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <>
      <div className="bg-dark ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Offerings</span>
            <h2>Off-the-Shelf SaaS Solutions</h2>
            <p>
            Accelerate your digital transformation with our ready-to-use solutions designed to address common business challenges and optimize processes. Built for scalability and ease of implementation, our SaaS offerings provide immediate access to cutting-edge technology without extensive customization. Seamlessly integrate these solutions into your operations to convert manual procedures into flexible, digital workflows, gaining a competitive edge in todays dynamic business landscape.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="saas-how-it-works-content white-color">
                <ul>
                  {howItWorksData &&
                    howItWorksData.slice(0, 3).map((value, i) => (
                      <li
                        key={i}
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay={value.aosDelay}
                      >
                        <i className={`icon ${value.iconName}`}></i>
                        <h3>{value.title}</h3>
                        <p>{value.shortText}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="saas-how-it-works-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  width={600}
                  height={444}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
