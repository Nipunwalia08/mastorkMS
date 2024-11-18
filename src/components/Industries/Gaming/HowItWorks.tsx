"use client";

import React from "react";
import Image from "next/image";

import howItWorksImg from "../../../../public/images/industries/gaming/img1.jpg";
import howItWorksImg2 from "../../../../public/images/industries/gaming/img2.webp";
import Link from "next/link";

const howItWorksData = [
  {
    iconName: "fa-solid fa-chart-line",
    title: "Complete Source Code:",
    shortText:
      "Full access to the Android application source code, written in Java and XML (native code), with a backend server using PHP CodeIgniter.",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-user-lock",
    title: "Comprehensive Documentation:",
    shortText:
      "Detailed instructions and documentation to guide you through the setup and customization process.",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-arrows-rotate",
    title: "Extended Version Code:",
    shortText:
      "For the extended version features, please email us at hello@mastork.com with your purchase code.",
    aosDelay: "300",
  },
];

const howItWorksData1 = [
  {
    iconName: "fa-solid fa-chart-line",
    title: "Code Provided:",
    shortText:
      "Android Studio Code (Native App), PHP CI Code for API, PHP CI Admin Panel",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-user-lock",
    title: "Maintenance (Server & Database):",
    shortText:
      "Linux-based any VPS or Cpanel, PHP installed with curl on and Apache MySQL or Nginx or MariaDB",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-arrows-rotate",
    title: "Development Tools:",
    shortText:
      "Java Android and XML, PHP CI and Bootstrap HTML 5, REST API",
    aosDelay: "300",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title" >Take Action Now</span>
            <h2>How to Purchase or Get Demo:</h2>
            <p style={{marginBottom:"35px"}}>
            get your hands on the Teen Patti Master source code today. Take the first step towards launching a successful online gaming platform.
            </p>
            <Link
                  href="/contact-us/"
                  className="default-btn-two"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  style={{
                    background: "linear-gradient(to right, #a8ff78, #78ffd6)",
                    border:"none",
                    color:"#1e1e1e"
                  }}
                  
                >
                  Get Started <i className="fas fa-chevron-right"></i>
                </Link>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
      
            <span className="sub-title">01</span>
            <h2>What’s Included:</h2>
          
              <div className="saas-how-it-works-content">
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
                        
                        <p><span style={{fontWeight:"700"}}>{value.title}</span> {value.shortText}</p>
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
                  width={550}
                  height={444}
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center" style={{marginTop:"130px",marginBottom:"60px"}}>
          <div className="col-lg-6 col-md-12">
              <div
                className="saas-how-it-works-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image
                  src={howItWorksImg2}
                  alt="image"
                  width={550}
                  height={444}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
      
            <span className="sub-title">02</span>
            <h2>Code and Maintenance Details:</h2>
          
              <div className="saas-how-it-works-content">
                <ul>
                  {howItWorksData1 &&
                    howItWorksData1.slice(0, 3).map((value, i) => (
                      <li
                        key={i}
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay={value.aosDelay}
                      >
                        <i className={`icon ${value.iconName}`}></i>
                        
                        <p><span style={{fontWeight:"700"}}>{value.title}</span> {value.shortText}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
