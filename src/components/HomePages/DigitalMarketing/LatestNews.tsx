"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

const latestNewsData = [
  {
    image: "/images/blog/blog7.jpg",
    title: "Customized Bulk Emails",
    date: "Feb 15, 2023",
    category: "Technology",
    shortText:
      "Send customized bulk emails with corresponding attachments directly from Excel.we demonstrate how to automate email campaigns and notifications directly from Excel, saving you time and improving productivity. Whether you are managing customer lists, sending reminders, or sharing updates, Mastorks email automation solution makes the process seamless and efficient",
    detailsLink: "https://youtu.be/p_MFkvGNxC0?feature=shared",
    aosDelay: "100",
  },
  {
    image: "/images/blog/blog8.jpg",
    title: "Customer Feedback for leading Hotel Chains",
    date: "Feb 16, 2023",
    category: "Support",
    shortText:
      "businesses can harness intelligent automation to efficiently manage and resolve customer complaints. From email and web form submissions to social media interactions, our AI-powered automation tools simplify the entire process—categorizing, prioritizing, and resolving complaints with minimal manual intervention.",
    detailsLink: "https://youtu.be/9CaGAGBqePQ?si=YfJtRXa3ZnWB_WKU",
    aosDelay: "200",
  },
  {
    image: "/images/blog/blog9.jpg",
    title: "Email Overload Reduced",
    date: "Feb 17, 2023",
    category: "Optimize",
    shortText:
      "No contemporary business is immune to abundance of daily emails.With our ground breaking solution, that is fully customizable as per your business needs, you can infuse intelligent automation in your daily email management by imparting human like intelligence while categorizing and responding. ",
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

                      <button
                        onClick={() => openLightbox(value.detailsLink)}
                        className="btn btn-secondary"
                      >
                        <i className="fa-solid fa-play me-1"></i> How it works
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="row justify-content-center"><Link
    href="https://calendly.com/dhruv-aii/30mins"
    style={{
      display: "inline-block",
      height: "45px",  // Set a fixed height
      width: "200px",  // Set a fixed width
      lineHeight: "45px",  // Vertically center the text
      fontSize: "16px",
      backgroundColor: "#0700db",
      color: "#fff",
      borderRadius: "5px",
      textDecoration: "none",
      textAlign: "center",  // Ensure text is centered
      transition: "background-color 0.3s ease",
    }}
  >
    Book a 1:1 Call <i className="fas fa-chevron-right" style={{ marginLeft: "5px" }}></i>
  </Link></div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
