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

const ServiceStyle2: React.FC = () => {
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
                  <h2 className="title">What we Offer</h2>
                  <p>
                  At Mastork, we offer AI-powered solutions to streamline your email management. Our services include automated customer support, intelligent email routing, refund and return management, automated follow-ups, sales order management, and email interaction analytics. With our AI, you can enhance productivity, improve response times, and deliver a seamless customer experience.
                  </p>
                </div>

                <div className="row" >
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Customized Development on Microsoft Power Platform
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      ERP & CRM Implementation and Optimization
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      AI-Driven Business Process Automation
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Accelerated Digital Transformation
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Cloud Integration & Security
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Customizable Business Solutions with Power Apps
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                  <Link href="https://calendly.com/dhruv-aii/30mins" className="btn btn-primary">
                     Book a 1:1 Call
                  </Link>
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

export default ServiceStyle2;
