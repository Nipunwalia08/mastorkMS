"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../../public/images/saas-startup/about-img.png";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="about-area bg-dark pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="saas-about-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image src={aboutImg} alt="image" width={524} height={473} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="saas-about-content white-color">
                <span className="sub-title">ABOUT US</span>
                <h2>
                Empowering Business Transformation through Digital Workflows
                </h2>

                <p>
                In todays fast-paced business environment, digitization is crucial for enhancing productivity, fostering creativity, and streamlining operations. Mastork leverages both off-the-shelf SaaS offerings and customized solutions to help businesses transform manual processes into efficient digital workflows. This transformation provides 100% transparency and real-time visibility into operational performance, expediting decision-making and maximizing resource utilization for sustainable and profitable growth.
                </p>

                {/* <ul className="features-list">
                  <li>
                    <i className="fas fa-check-circle"></i> Stet clita kasd
                    gubergren no sea takimata sanctus
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Duis autem vel eum
                    iriure dolor in hendrerit.
                  </li>
                </ul> */}

                {/* <Link href="/about" className="default-btn-two">
                  Learn More <i className="fas fa-chevron-right"></i>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
