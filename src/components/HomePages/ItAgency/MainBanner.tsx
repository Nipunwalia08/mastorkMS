"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';
import Image from "next/image";

import bannerImg from '../../../../public/images/animate-banner-img1.jpg';

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

			<div 
        className="hero-banner it-banner overly" 
        style={{ 
          backgroundImage: `url(/images/hero-banner4.jpg)` 
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="100"
                    >
                     Mastork Data Driven Decision  Prediction
                    </h1>

                    {/* <p
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                    >
                      In today's data-rich business environment, leveraging insights from data is essential for informed decision-making.Leveraging the power of data science, our solutions enable organizations to optimize various aspects of their operations. From demand forecasting to inventory optimization and process mining, our tools intelligize data to drive quality decision-making and operational excellence.

                    </p> */}

                    <Link 
                      href="/contact-us/" 
                      className="btn btn-primary"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    >
                      Reach Out
                    </Link>

                    {/* <button
                      onClick={() => setToggler(!toggler)}
                      className="btn btn-secondary"
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay="400"
                    >
                      <i className="fa-solid fa-play me-1"></i> How it works
                    </button> */}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div
                    className="animate-banner-image"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={bannerImg}
                      alt="Animate image"
                      width={600}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</>
  );
}

export default MainBanner;