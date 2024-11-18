"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const feedbacskData = [
  {
    image: "/images/digital-marketing/t1.jpg",
    name: "Sarah Taylor",
    designation: "Director",
    feedbackText:
      "Their Microsoft expertise transformed how we handle workflows, cutting costs by 30%!",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
  {
    image: "/images/digital-marketing/t2.jpg",
    name: "Richard Turner",
    designation: "CEO & Founder",
    feedbackText:
      "From ERP integration to automation, they made digital transformation a reality for us.",

    rating: [
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
      {
        iconName: "fa-solid fa-star",
      },
    ],
  },
];

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="marketing-testimonials-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">TESTIMONIALS</span>
            <h2>What Our Customers Say</h2>
          </div>

          <Swiper
            autoHeight={true}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Navigation]}
            className="marketing-testimonials-slides"
          >
            {feedbacskData &&
              feedbacskData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="marketing-testimonials-image">
                        <Image
                          src={value.image}
                          alt="image"
                          width={720}
                          height={720}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="marketing-testimonials-content">
                        <i className="icon fa-solid fa-quote-left"></i>
                        <p>
                          <q>{value.feedbackText}</q>
                        </p>

                        <div className="rating">
                          {value.rating.map((value, i) => (
                            <i className={value.iconName} key={i}></i>
                          ))}
                        </div>

                        <div className="info">
                          <h3>{value.name}</h3>
                          <span>{value.designation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="container flex flex-col items-center justify-center text-center" >
            <Link href="https://calendly.com/dhruv-aii/30mins" className="btn btn-primary mt-5">
            Book a 1:1 Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
