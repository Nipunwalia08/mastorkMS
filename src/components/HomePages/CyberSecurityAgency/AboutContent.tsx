"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../../public/images/cyber-security/about.png";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="cs-about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="cs-about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image src={aboutImg} alt="image" width={865} height={740} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="cs-about-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                {/* <span className="sub-title">Cybersecurity</span> */}
                <h3>
                  Secure Your Clicks, <span>Secure Your</span> Business
                  Reputation
                </h3>
                <p>
                At Mastork Technologies, we understand the critical importance of cybersecurity in safeguarding your digital assets and ensuring the uninterrupted flow of your business operations. Our comprehensive cybersecurity solutions are designed to protect your systems, networks, and data from evolving digital threats and attacks, providing you with peace of mind and confidence in your digital environment.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="cs-about-card">
                      <div className="icon">
                        <i className="fa-solid fa-lock"></i>
                      </div>
                      <h4>Identity and Access Management (IAM)</h4>
                      <p>
                      Manage user identities and permissions to prevent unauthorized access and protect sensitive data.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="cs-about-card">
                      <div className="icon">
                        <i className="fa-solid fa-shield"></i>
                      </div>
                      <h4>Endpoint Security</h4>
                      <p>
                      Secure individual devices from malware and unauthorized access to safeguard against potential threats.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-6 col-sm-6">
                    <div className="cs-about-card">
                      <div className="icon">
                        <i className="fa-solid fa-file-shield"></i>
                      </div>
                      <h4>Network Security</h4>
                      <p>
                      Implement robust measures to protect network infrastructure from unauthorized access and attacks, ensuring data integrity and availability.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <div className="cs-about-card">
                      <div className="icon">
                        <i className="fa-solid fa-user-secret"></i>
                      </div>
                      <h4>Governance, Risk, and Compliance (GRC)</h4>
                      <p>
                      Integrate governance, risk management, and compliance to strengthen your cybersecurity framework and ensure regulatory adherence
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="about-btn">
                  <Link href="/contact-us/" className="default-btn-two">
                    Get Started <i className="fa-solid fa-chevron-right"></i>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
