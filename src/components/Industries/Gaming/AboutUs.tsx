"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg from "../../../../public/images/saas-startup/about-img.png";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="saas-about-content">
                <span className="sub-title">Trusted Excellence</span>
                <h2>
                  Why Choose Teen Patti Master Real Cash Multi Gaming Casino Application?
                </h2>

                <p>
                  We pride ourselves on delivering top-notch products/services along with unmatched support. With years of experience in the industry, we have built a reputation for excellence and have become the go-to choice for customers who seek the best.


                </p>


              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="saas-about-content">
                <h3>
                  Proven Success:
                </h3>
                <p>
                  Teen Patti Master has a track record of user satisfaction and engagement, making it a reliable choice for your gaming platform.
                </p>
                <h3>
                  Scalability:
                </h3>
                <p>
                  The code is designed to handle a growing user base, ensuring your platform can expand without compromising performance.
                </p>
                <h3>
                  Cost-Effective:
                </h3>
                <p>
                  Save time and resources by starting with a solid foundation, ready to be customized to your vision.
                </p>


              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
