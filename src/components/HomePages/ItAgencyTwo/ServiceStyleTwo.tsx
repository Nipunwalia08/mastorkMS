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

                <div className="row">
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

      <div className="service-style-two ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
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

            <div className="col-lg-6">
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

      <div className="service-style-two ptb-100">
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
                  <h2 className="title">Retail</h2>
                  <p>
                  Mastork Automation Solutions transforms retail operations by automating order fulfillment and inventory management. Our systems reduce order processing time, minimize stockouts, and optimize stock levels using AI-powered algorithms. By improving efficiency and customer satisfaction, retailers can stay ahead of the competition and thrive in todays dynamic market.
                  </p>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-list">
                      <i className="fa-solid fa-circle-check"></i>
                      Order Fulfillment Automation
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
                      Inventory Management Optimization
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
                  src={serviceImg6}
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
