"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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

const Portfolio: React.FC = () => {
  return (
    <>
      <div className="m-30 pt-70 pb-70">
        <section className="portfolio-area">
          <div className="container">
            <div className="section-title">
              <h2>What our clients say</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                architecto magni est recusandae, iure officia voluptate
                repellat, asperiores laudantium dolorum explicabo dignissimos
                obcaecati laboriosam cupiditate corporis similique.
              </p>
            </div>
          </div>

          <div className="container">
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

            <Link
              href="https://calendly.com/dhruv-aii/30mins"
              className="btn btn-primary"
            >
              Book a 1:1 Call
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
