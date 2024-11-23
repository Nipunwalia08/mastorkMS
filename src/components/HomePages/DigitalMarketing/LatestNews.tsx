"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

const latestNewsData = [
  {
    image: "/images/blog/blog7.jpg",
    title: "Invoice Processing Automation with Microsoft Power Automate",
    date: "Feb 15, 2023",
    category: "Technology",
    shortText:
      "By automating invoice processing using Microsoft Power Automate and Dynamics 365 solutions, businesses can eliminate time-consuming manual tasks, saving over 300 hours every month. This not only enhances productivity but also reduces errors, improves compliance, and frees up resources to focus on strategic initiatives that drive growth.",
    detailsLink: "https://youtu.be/p_MFkvGNxC0?feature=shared",
    aosDelay: "100",
  },
  {
    image: "/images/blog/blog8.jpg",
    title: "AI Insights",
    date: "Feb 16, 2023",
    category: "Support",
    shortText:
      "Harness the power of AI to analyze customer behavior and trends, enabling data-driven strategies for personalized engagement. These insights empower businesses to address customer needs proactively, improve satisfaction, and significantly boost retention rates over time.",
    detailsLink: "https://youtu.be/9CaGAGBqePQ?si=YfJtRXa3ZnWB_WKU",
    aosDelay: "200",
  },
  {
    image: "/images/blog/blog9.jpg",
    title: "Sales Optimization with integrated CRM and Power Apps",
    date: "Feb 17, 2023",
    category: "Optimize",
    shortText:
      "Integrating CRM with Power Apps streamlines sales workflows, offering a unified platform for managing leads, tracking pipelines, and enhancing collaboration. This integration simplifies processes, reduces delays, and drives revenue by ensuring a more efficient and customer-focused sales approach.",
    detailsLink: "https://youtu.be/_Es--fDeKso?si=ibOvFBezgP-SVly2",
    aosDelay: "300",
  },
];

const LatestNews: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const openLightbox = (link: string) => {
    setActiveLink(link);
    setToggler(!toggler);
  };

  return (
    <>
      <FsLightbox toggler={toggler} sources={[activeLink]} />
      <div className="pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title"></span>
            <h2>Use Cases</h2>
          </div>

          <div className="row justify-content-center">
            {latestNewsData &&
              latestNewsData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="single-blog-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="blog-image">
                      <Link href={value.detailsLink}>
                        <Image
                          src={value.image}
                          alt="image"
                          width={510}
                          height={400}
                        />
                      </Link>

                      <div className="post-tag">
                        <Link href={value.detailsLink}>{value.category}</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <h3>
                        <Link href={value.detailsLink}>{value.title}</Link>
                      </h3>

                      <p>{value.shortText}</p>

                      {/* <button
                        onClick={() => openLightbox(value.detailsLink)}
                        className="btn btn-secondary"
                      >
                        <i className="fa-solid fa-play me-1"></i> How it works
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="row justify-content-center">
            <Link
              href="https://calendly.com/dhruv-aii/30mins"
              style={{
                display: "inline-block",
                height: "45px", // Set a fixed height
                width: "200px", // Set a fixed width
                lineHeight: "45px", // Vertically center the text
                fontSize: "16px",
                backgroundColor: "#0700db",
                color: "#fff",
                borderRadius: "5px",
                textDecoration: "none",
                textAlign: "center", // Ensure text is centered
                transition: "background-color 0.3s ease",
              }}
            >
              Book a 1:1 Call{" "}
              <i
                className="fas fa-chevron-right"
                style={{ marginLeft: "5px" }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
