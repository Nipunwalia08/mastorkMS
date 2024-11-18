"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import serviceImg2 from "../../../../public/images/services/it-service2.png";


const ServiceStyleTwo: React.FC = () => {
  return (
    <>

      <div className="service-style-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div 
                className="service-left-img"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image
                  src={serviceImg2}
                  alt="Service Image"
                  width={852}
                  height={580}
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div 
                className="service-info pl-50"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="info-head">
                  <h2 className="title">Recruitment</h2>
                  <p>
                  Mastork Automation Solutions transforms recruitment by automating resume screening, interview scheduling, and onboarding. Our tools use AI to quickly identify top candidates, reduce hiring time, and ensure a seamless onboarding process. Improve efficiency and find the best talent faster with our advanced automation solutions.
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Automated Resume Generator
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Resume Screening
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Automated Scheduling
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Pre-screening Agent
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Skill Matching
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Job Portals Automation
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Onboarding Process
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Top Management Automation
                    </div>
                  </div>
                </div>

                <div className="service-read-more">
                  {/* <Link href="/services/service-details/" className="btn btn-primary">
                    <i className="fa-solid fa-list-check"></i> Read more
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default ServiceStyleTwo;
