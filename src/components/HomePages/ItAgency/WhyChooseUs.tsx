"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import aboutImg from "../../../../public/images/about-img3.jpg";

const WhyChooseUs: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="about-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two pl-0 mt-0"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="section-title">
                  <h2>Why Choose Data Driven Decision Prediction?</h2>
                  
                </div>

                <div className="about-text">
                  <h4>Expertise and Innovation</h4>
                  <p>
                  At Mastork, we combine years of industry experience with cutting-edge technology to deliver innovative automation solutions tailored to your business needs. Our team of experts continuously stays ahead of the latest trends and advancements, ensuring your operations benefit from the most up-to-date and effective automation strategies.
                  </p>
                </div>
                <div className="about-text">
                  <h4>Comprehensive Solutions</h4>
                  <p>
                  Our end-to-end automation solutions cover a wide range of industries and applications, from finance and healthcare to logistics and retail. We offer a full suite of tools and services, including advanced analytics, predictive modeling, and real-time monitoring, to help you streamline operations, reduce costs, and drive growth.
                  </p>
                </div>
                <div className="about-text">
                  <h4>Customization and Scalability</h4>
                  <p>
                  We understand that every business is unique. Thats why we offer customizable automation solutions that can be tailored to fit your specific requirements. Our scalable solutions grow with your business, allowing you to expand and adapt your automation capabilities as needed.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Data-Driven Insights</h4>
                  <p>
                  Harness the power of data with our advanced analytics and predictive modeling tools. We help you transform raw data into actionable insights, enabling informed decision-making and strategic planning. Our solutions provide you with the intelligence needed to stay ahead of the competition and drive operational excellence.
                  </p>
                </div>
                <div className="about-text">
                  <h4>Proven Track Record</h4>
                  <p>
                  Our successful track record speaks for itself. We have helped numerous organizations across various industries achieve significant improvements in efficiency, accuracy, and productivity. Our clients trust us to deliver reliable, high-quality automation solutions that deliver tangible results.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image right-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />

                {/* <div className="video-box">
                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
