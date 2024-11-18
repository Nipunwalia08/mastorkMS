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
                  <h2>Why Choose Mastork Automation Solutions?</h2>
                  <p>
                  Automation is transforming the way businesses operate, offering unparalleled advantages across various sectors. Here are some key reasons to integrate automation into your business:
                  </p>
                </div>

                <div className="about-text">
                  <h4>Increased Efficiency</h4>
                  <p>
                  Automate repetitive tasks to save time and reduce errors, allowing your workforce to focus on higher-value activities.
                  </p>
                </div>
                <div className="about-text">
                  <h4>Cost Savings</h4>
                  <p>
                  Reduce operational costs by streamlining processes and minimizing waste.
                  </p>
                </div>
                <div className="about-text">
                  <h4>Enhanced Accuracy</h4>
                  <p>
                  Reduce operational costs by streamlining processes and minimizing waste.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Scalability</h4>
                  <p>
                  Easily scale your operations to meet growing demands without a proportional increase in costs.
                  </p>
                </div>
                <div className="about-text">
                  <h4>Competitive Edge</h4>
                  <p>
                  Stay ahead of the competition by leveraging advanced technologies and innovative solutions.
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
