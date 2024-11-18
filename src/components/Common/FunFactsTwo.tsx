"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import map from "../../../public/images/map.png";

interface FunFact {
  iconName: string;
  number: string;
  shortText: string;
  aosDelay: string;
}

const funFactsData: FunFact[] = [
  {
    iconName: "fa-solid fa-circle-check",
    number: "120+",
    shortText: "Employees",
    aosDelay: "100",
  },
  {
    iconName: "fa-solid fa-heart",
    number: "100+",
    shortText: "Happy Clients",
    aosDelay: "200",
  },
  {
    iconName: "fa-solid fa-list-check",
    number: "5",
    shortText: "Services",
    aosDelay: "300",
  },
  {
    iconName: "fa-solid fa-trophy",
    number: "3",
    shortText: "Partners",
    aosDelay: "400",
  },
];

const FunFactsTwo: React.FC = () => {
  return (
    <>
      <div className="funfacts-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>We always try to understand users expectation</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.slice(0, 4).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="funfact"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>{value.number}</h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>

          <div
            className="contact-cta-box"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h3>Have any questions about us?</h3>
            <p>Don&apos;t hesitate to contact us</p>

            <Link href="/contact-us/" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          <div className="map-bg">
            <Image src={map} alt="map" width={910} height={443} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFactsTwo;