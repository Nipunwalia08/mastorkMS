"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import whoWeAreImg from "../../../../public/images/business-consulting/who-we-are.jpg";

const WhoWeAre: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="bc-who-we-are-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="bc-who-we-are-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <span className="sub-title">WHO WE ARE</span>
                {/* <h2>
                  At Mastork Technologies, we are a dynamic team of experts dedicated to driving innovation and excellence in the digital age. With a strong focus on technology and business solutions, we empower organizations to achieve their goals through cutting-edge automation, data-driven decision-making, and comprehensive cybersecurity measures. Our commitment to customer success is at the core of everything we do, ensuring that we deliver tailored solutions that meet the unique needs of each client.
                </h2> */}
                <p>
                At Mastork Technologies, we are a dynamic team of experts dedicated to driving innovation and excellence in the digital age. With a strong focus on technology and business solutions, we empower organizations to achieve their goals through cutting-edge automation, data-driven decision-making, and comprehensive cybersecurity measures. Our commitment to customer success is at the core of everything we do, ensuring that we deliver tailored solutions that meet the unique needs of each client.
                </p>
                {/* <Link href="/about" className="default-btn-two">
                  Read More <i className="fas fa-chevron-right"></i>
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="bc-who-we-are-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Image src={whoWeAreImg} alt="image" width={720} height={577} />
                {/* <div
                  onClick={() => setToggler(!toggler)}
                  className="video-btn popup-video"
                >
                  <i className="fas fa-play"></i>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
