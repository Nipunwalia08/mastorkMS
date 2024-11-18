"use client";

import React from "react";
import Image from "next/image";
import serviceImg4 from "../../../../public/images/saas-startup/health.jpg";

const ServiceStyleTwo: React.FC = () => {
  return (
    <>
      <div className="service-style-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div 
                className="service-info pr-50"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <div className="info-head">
                  <h2 className="title">Healthcare</h2>
                  <p>
                  Mastork Automation Solutions revolutionizes patient care by automating tasks such as appointment scheduling, patient monitoring, and electronic health records management. Our solutions reduce administrative burdens, improve efficiency, and enhance the overall patient experience. With automated systems in place, healthcare providers can focus more on delivering high-quality care and less on paperwork, leading to better outcomes for patients and providers alike.
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Remote Patient Monitoring
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Automated Appointment Reminders
                    </div>
                    {/* <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      React Web Development
                    </div> */}
                  </div>

                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Electronic Health Records (EHR) Implementation
                    </div>
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Hospital integrated systems(HIS)
                    </div>
                    {/* <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Angular Web Development
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

            <div className="col-lg-4">
              <div 
                className="service-right-img"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Image
                  src={serviceImg4}
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
