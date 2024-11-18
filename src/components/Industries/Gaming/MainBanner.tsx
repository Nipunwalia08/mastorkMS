"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg from "../../../../public/images/automationsPictures/gaming.webp";
import backgroundImg from "../../../../public/images/automationsPictures/gamingbg.jpg";

const MainBanner: React.FC = () => {
  return (
    <>
      <div
        className="saas-banner-area"
        style={{
          padding: "180px 60px 60px 60px",
          backgroundImage: `url(${backgroundImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="saas-banner-content">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                  style={{ fontSize: "45px" }}
                >
                  Ready for the ultimate experience
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Are you looking to kickstart your own online gaming platform? Look no further! We are offering the full source code for all the games mentioned, a versatile and exciting real cash multi-gaming casino application designed for enthusiasts of card games and more.
                </p>

                <Link
                  href="/contact-us/"
                  className="default-btn-two"
                  style={{
                    background: "linear-gradient(to right, #a8ff78, #78ffd6)",
                    border:"none",
                    color:"#1e1e1e"
                  }}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Get your gaming platform today<i className="fas fa-chevron-right" style={{marginLeft:"7px"}}></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="saas-banner-image"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Image
                  src={bannerImg}
                  alt="image"
                  width={928}
                  height={502}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
