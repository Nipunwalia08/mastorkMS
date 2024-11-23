"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const feedbacskData = [
  {
    image: "/images/digital-marketing/t1.jpg",
    name: "Pradeep",
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
    image: "/images/digital-marketing/t1.jpg",
    name: "Vivek",
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
    image: "/images/digital-marketing/manuj.webp",
    name: "Manuj Aggarwal",
    designation: "CEO & Founder",
    feedbackText:
      "With expert Microsoft ERP integration and automation using Power BI and Power Apps, they made our digital transformation seamless, empowering us to optimize workflows, enhance collaboration, and drive business growth.",

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
    image: "/images/digital-marketing/lionrose.jpg",
    name: "Lion Rose",
    designation: "Founder",
    feedbackText:
      "With their implementation of Microsoft Power Platforms, Dynamics 365 Finance & Operations, and tailored automation solutions, they empowered us to optimize our financial processes, drive operational efficiency, and achieve faster decision-making across the organization.",

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
            // autoHeight={true}
            // navigation={true}
            autoplay={{
              delay: 3000,
              // disableOnInteraction: true,
              // pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="marketing-testimonials-slides"
          >
            {feedbacskData &&
              feedbacskData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="relative p-4 border border-gray-300 shadow-md rounded-md bg-white max-w-lg mx-auto ">
                    <div className="flex gap-4">
                      <div className="marketing-testimonials-image">
                        <Image
                          src={value.image}
                          alt="testimonial"
                          width={80}
                          height={80}
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="marketing-testimonials-content">
                        <i className="icon fa-solid fa-quote-left text-gray-400"></i>
                        <p className="mt-2 text-sm text-gray-600">
                          <q>{value.feedbackText}</q>
                        </p>

                        <div className="rating mt-2 flex items-center">
                          {value.rating.map((value, i) => (
                            <i className={value.iconName} key={i}></i>
                          ))}
                        </div>

                        <div className="info mt-2">
                          <h3 className="text-base font-semibold">
                            {value.name}
                          </h3>
                          <span className="text-sm text-gray-500">
                            {value.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="container flex flex-col items-center justify-center text-center">
            <Link
              href="https://calendly.com/dhruv-aii/30mins"
              className="btn btn-primary mt-5"
            >
              Book a 1:1 Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
