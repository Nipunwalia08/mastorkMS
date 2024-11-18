"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const ourClientsData = [
  {
    id: "1",
    image: "/images/business-consulting/Microsoft-Power-BI-Symbol.png",
    url: "#",
  },
  {
    id: "2",
    image: "/images/business-consulting/power-automate.png",
    url: "#",
  },
  {
    id: "3",
    image: "/images/business-consulting/microsoft-power.webp",
    url: "#",
  },
  {
    id: "4",
    image: "/images/business-consulting/Microsoft-PowerApps-Logo.png",
    url: "#",
  },
  {
    id: "5",
    image: "/images/business-consulting/Copilot - Logo.jpeg.jpg",
    url: "#",
  },
  {
    id: "6",
    image: "/images/business-consulting/bubble-io-logo-vector.png",
    url: "#",
  },
];

const OurClients: React.FC = () => {
  return (
    <>
      <div className="partner-area bg-dark ptb-100">
        <div className="container">
          <Swiper
            autoHeight={true}
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="partner-slides"
          >
            {ourClientsData &&
              ourClientsData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="partner-item text-center">
                    <a
                      href={value.url}
                      className="d-inline-block"
                      target="_blank"
                    >
                      <Image
                        src={value.image}
                        alt="image"
                        width={155}
                        height={45}
                        style={{
                          maxWidth: "200px",
                          maxHeight: "80px",
                          objectFit: "cover",
                          // aspectRatio: "6/3"
                        }}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurClients;
