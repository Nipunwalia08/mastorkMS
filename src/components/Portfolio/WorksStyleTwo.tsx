"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ourWorksData = [
  {
    image: "/images/case-studies/1.png",
    title: "Inventory and Warehouse Management",
    category: "Automation",
    viewDetails: "inventory-and-warehouse/",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/2.png",
    title: "Remote Health Monitoring System",
    category: "Automation",
    viewDetails: "remote-hms",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/3.png",
    title: "Mortgage Workflow Automation",
    category: "Automation",
    viewDetails: "mortage",
    aosDelay: "300",
  },
  {
    image: "/images/case-studies/4.png",
    title: "Intelligent Document Processing",
    category: "Automation",
    viewDetails: "document-process",
    aosDelay: "400",
  },
  {
    image: "/images/case-studies/5.png",
    title: "Championbets",
    category: "Data Driven Descision and Prediction",
    viewDetails: "championbets",
    aosDelay: "500",
  },
  {
    image: "/images/case-studies/6.png",
    title: "Shift Store",
    category: "Bussiness Process Digitization",
    viewDetails: "shift-store",
    aosDelay: "600",
  },
  {
    image: "/images/case-studies/7.png",
    title: "ComplyAssist",
    category: "Bussiness Process Digitization",
    viewDetails: "complyassist",
    aosDelay: "700",
  },
  {
    image: "/images/case-studies/8.png",
    title: "Housing Redevlopment Process Automation",
    category: "Bussiness Process Digitization",
    viewDetails: "housing",
    aosDelay: "800",
  },
];

const WorksStyleTwo: React.FC = () => {
  return (
    <>
      <div className="case-studies-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Our Projects</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row justify-content-center">
            {ourWorksData &&
              ourWorksData.slice(0, 8).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  key={i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={value.aosDelay}
                >
                  <div className="work-card">
                    <Image
                      src={value.image}
                      alt="image"
                      width={510}
                      height={700}
                    />

                    <div className="content">
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
                </div>
              ))}
          </div>

          {/* <div className="view-more-work">
            <Link href="/portfolio" className="btn btn-primary">
              <i className="fa-solid fa-list-check me-1"></i> View More
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WorksStyleTwo;
