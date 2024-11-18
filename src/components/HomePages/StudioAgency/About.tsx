"use client";

import React from "react";
import Image from "next/image";

import aboutImg from '../../../../public/images/about-img1.jpg';

const About: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image
                  src={aboutImg}
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div 
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                  At Mastork, we are committed to providing tailored solutions that address your unique
                  challenges and goals. Our team of experts brings years of experience and a deep
                  understanding of the latest technological advancements, ensuring that we deliver
                  impactful and future proof solutions. Join us in revolutionizing your business
                  operations and unlocking new opportunities in todays dynamic market landscape.
                  With Mastork, you can confidently navigate the digital transformation journey and
                  achieve sustainable growth.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Our Vision</h4>
                  <p>
                  To be a global leader in technology-driven solutions, empowering businesses to
                  achieve unparalleled efficiency, innovation, and growth through the seamless
                  integration of cutting edge ai and digital technologies
                  </p>
                </div>

                {/* <div className="about-text">
                  <h4>Our Success</h4>
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      It is a long established fact that a reader will be
                      distracted by the readable.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text.
                    </li>
                  </ul>
                </div> */}

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <p>
                  To revolutionize business operations by delivering innovative, data-driven solutions
                  that enhance productivity, security, and strategic decision-making. We are committed
                  to providing exceptional service and expertise, fostering a culture of continuous
                  improvement and excellence, and driving sustainable success for our customers in
                  the digital era
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
