"use client";

import React from "react";
import Image from "next/image";

const partnersData = [
  {
    image: "/images/collab/inobit.png",
    link: "https://www.innobitsystems.com/",
    aosDelay: "100",
  },
  {
    image: "/images/collab/dg.png",
    link: "https://www.digitalgarage.ai/",
    aosDelay: "200",
  },
  {
    image: "/images/collab/litestack.jpg",
    link: "https://litestack.net/",
    aosDelay: "300",
  },
//   {
//     image: "/images/partners/brand4.png",
//     link: "#",
//     aosDelay: "400",
//   },
//   {
//     image: "/images/partners/brand5.png",
//     link: "#",
//     aosDelay: "500",
//   },
//   {
//     image: "/images/partners/brand6.png",
//     link: "#",
//     aosDelay: "600",
//   },
//   {
//     image: "/images/partners/brand7.png",
//     link: "#",
//     aosDelay: "700",
//   },
//   {
//     image: "/images/partners/brand8.png",
//     link: "#",
//     aosDelay: "800",
//   },
//   {
//     image: "/images/partners/brand9.png",
//     link: "#",
//     aosDelay: "900",
//   },
//   {
//     image: "/images/partners/brand10.png",
//     link: "#",
//     aosDelay: "1000",
//   },
//   {
//     image: "/images/partners/brand11.jpeg",
//     link: "#",
//     aosDelay: "1100",
//   },
//   {
//     image: "/images/partners/brand13.png",
//     link: "#",
//     aosDelay: "1200",
//   },
];

const Collab: React.FC = () => {
  return (
    <>
      <div className="partner-area pt-100 pb-60">
        <div className="container">
          <div className="section-title">
            <h2>Partners</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row align-items-center justify-content-center">
            {partnersData &&
              partnersData.map((value, i) => (
                <div className="col-lg-2 col-6 col-sm-4" key={i}>
                  <div
                    className="single-partner"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <a href={value.link} target="_blank">
                      <Image
                        src={value.image}
                        alt="Partner Image"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collab;
