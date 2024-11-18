"use client";

import React from "react";
import Image from "next/image";

import howItWorksImg from "../../../../public/images/saas-startup/how-it-works.png";

const howItWorksData = [
  {
    iconName: "fa-solid fa-chart-line",
    title: "Customized Solutions",
    shortText:
      "Tailored digital workflows to meet your specific business needs, ensuring alignment with your goals and operations.",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-user-lock",
    title: "Enhanced Productivity",
    shortText:
      "Streamline processes and boost productivity through iterative development and customized digital ecosystems.",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-arrows-rotate",
    title: "Long-term Success",
    shortText:
      "Position your business for sustainable growth and long-term success in a rapidly changing market.",
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
            <h2>SaaS Garage (Customized Solution)</h2>
            <p>
            Embrace innovation with our customized solution, SaaS Garage, tailored to meet your specific business needs. We collaborate closely with your team to develop custom digital solutions that align perfectly with your objectives and operations. Through iterative development and customization, we create a digital ecosystem that enhances productivity, streamlines processes, and drives growth. 
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
                  src={howItWorksImg}
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
