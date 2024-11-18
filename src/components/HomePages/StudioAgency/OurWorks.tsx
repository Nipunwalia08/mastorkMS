"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const ourWorksData = [
  {
    image: "/images/case-studies/1.png",
    title: "Inventory and Warehouse Management",
    category: "Automation",
    viewDetails: "case-study/inventory-and-warehouse/",
  },
  {
    image: "/images/case-studies/2.png",
    title: "Remote Health Monitoring System",
    category: "Automation",
    viewDetails: "case-study/remote-hms",
  },
  {
    image: "/images/case-studies/3.png",
    title: "Mortgage Workflow Automation",
    category: "Automation",
    viewDetails: "case-study/mortage",
  },
  {
    image: "/images/case-studies/4.png",
    title: "Intelligent Document Processing",
    category: "Automation",
    viewDetails: "case-study/document-process",
  },
  {
    image: "/images/case-studies/5.png",
    title: "Championbets",
    category: "Data Driven Descision and Prediction",
    viewDetails: "case-study/championbets",
  },
  {
    image: "/images/case-studies/6.png",
    title: "Shift Store",
    category: "Bussiness Process Digitization",
    viewDetails: "case-study/shift-store",
  },
  {
    image: "/images/case-studies/7.png",
    title: "ComplyAssist",
    category: "Bussiness Process Digitization",
    viewDetails: "case-study/complyassist",
  },
  {
    image: "/images/case-studies/8.png",
    title: "Housing Redevlopment Process Automation",
    category: "Bussiness Process Digitization",
    viewDetails: "case-study/housing",
  },
  // {
  //   image: "/images/works/work9.jpg",
  //   title: "We provide any type of app development",
  //   category: "App Development",
  //   viewDetails: "/portfolio/portfolio-details/",
  // },
  // {
  //   image: "/images/works/work10.jpg",
  //   title: "We provide any type of marketing support",
  //   category: "SEO Marketing",
  //   viewDetails: "/portfolio/portfolio-details/",
  // },
  // {
  //   image: "/images/works/work11.jpg",
  //   title: "We provide any type of Email Marketing",
  //   category: "Email Marketing",
  //   viewDetails: "/portfolio/portfolio-details/",
  // },
  // {
  //   image: "/images/works/work12.jpg",
  //   title: "We provide any type of Marketing & Reporting",
  //   category: "Marketing & Reporting",
  //   viewDetails: "/portfolio/portfolio-details/",
  // },
];

const OurWorks: React.FC = () => {
  return (
    <>
      <section className="case-studies-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Case Study</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <Swiper
            autoHeight={true}
            cssMode={true}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
              1800: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="work-slides"
          >
            {ourWorksData &&
              ourWorksData.map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="work-card">
                    <Image src={value.image} alt="image" width={510} height={750} />

                    <div className="content text-center">
                      <span>
                        <Link href={value.viewDetails}>{value.category}</Link>
                      </span>

                      <h3>
                        <Link href={value.viewDetails}>{value.title}</Link>
                      </h3>

                      <Link href={value.viewDetails} className="custom-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
