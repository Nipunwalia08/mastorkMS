"use client";

import React from "react";
import Image from "next/image";
import serviceImg5 from "../../../../public/images/saas-startup/manuf.jpg";

const ServiceStyleTwo: React.FC = () => {
  return (
    <>
      <div className="service-style-two ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div 
                className="service-left-img"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Image
                  src={serviceImg5}
                  alt="Service Image"
                  width={852}
                  height={580}
                />
              </div>
            </div>

            <div className="col-lg-8">
              <div 
                className="service-info pl-50"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <div className="info-head">
                  <h2 className="title">Manufacturing</h2>
                  <p>
                  Mastork Automation Solutions revolutionizes manufacturing by optimizing inventory management, maintenance practices, and workflow automation. Our systems ensure efficient stock levels, minimize downtime through predictive maintenance, and streamline production processes. With our automation technology, manufacturers can enhance productivity, reduce costs, and maintain a competitive edge in the industry.
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Inventory and Warehousing Management
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Maintenance Practices
                    </div>
                    {/* <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Automated Scheduling
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Pre-screening Agent
                    </div> */}
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Workflow Automation
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Top Management Automation
                    </div>
                    {/* <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Onboarding Process
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Top Management Automation
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
          </div>
        </div>
      </div>

    </>
  );
};

export default ServiceStyleTwo;
