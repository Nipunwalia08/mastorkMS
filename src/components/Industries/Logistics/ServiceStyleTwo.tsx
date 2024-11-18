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
                  <h2 className="title">Logistics</h2>
                  <p>
                  Mastork Automation Solutions enhances logistics by optimizing fleet management and warehouse operations. Our automated systems streamline route assignments, track inventory in real-time, and manage driver performance. Increase efficiency, reduce costs, and ensure timely deliveries with our cutting-edge automation technology.
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Fleet Driver Management
                    </div>
                    {/* <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Email Servers
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      File Storage
                    </div> */}
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Warehouse Management
                    </div>
                    {/* <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Website Hosting
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Backup Systems
                    </div> */}
                  </div>
                </div>
                <div className="row justify-content-center">
  <div className="col-sm-4 col-md-6 col-lg-8 col-xl-10">
    <div className="feature-list" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
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

            <div className="col-lg-5">
              <div 
                className="service-right-img"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Image
                  src={serviceImg3}
                  alt="Service Image"
                  width={894}
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
