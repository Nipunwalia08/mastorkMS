"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import serviceImg1 from "../../../../public/images/services/it-service1.png";
import serviceImg2 from "../../../../public/images/services/it-service2.png";
import serviceImg3 from "../../../../public/images/services/it-service3.png";
import serviceImg4 from "../../../../public/images/saas-startup/health.jpg";
import serviceImg5 from "../../../../public/images/saas-startup/manuf.jpg";
import serviceImg6 from "../../../../public/images/saas-startup/retail.jpg";

const ServiceStyleTwo: React.FC = () => {
  return (
    <>
      <div className="service-style-two ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div 
                className="service-info pr-50"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="info-head">
                  <h2 className="title">Finance</h2>
                  <p>
                  Mastork Automation Solutions enhances financial operations by streamlining regulatory compliance, budgeting, and workforce management. Automated systems ensure adherence to laws, reduce risk, and generate accurate reports. By freeing employees from repetitive tasks, we enable a focus on strategic growth. Achieve greater efficiency, accuracy, and compliance with our innovative solutions.
                  </p>
                </div>

                <div className="row" >
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Compliance & Reporting Automation
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Budgeting and Expense Tracking
                    </div>
                    {/* <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      React Web Development
                    </div> */}
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Workforce Automation
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Top Management Automation
                    </div>
                    {/* <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Angular Web Development
                    </div> */}
                  </div>
                </div>

                <div className="service-read-more">
                  {/* <Link href="/services/service-details/" className="btn btn-primary">
                    <i className="fa-solid fa-list-check"></i> Read more
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div 
                className="service-right-img"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Image
                  src={serviceImg1}
                  alt="Service Image"
                  width={770}
                  height={582}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ServiceStyleTwo;
