"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import portfolioImg1 from "../../../../public/images/portfolio/team.jpg";

const Portfolio: React.FC = () => {
  return (
    <>
      <section className="portfolio-area pt-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Team</h2>
            <p>
              Meet the specialists who bring Microsoft technologies to life.
              From certified Microsoft experts to AI and automation consultants,
              our team is dedicated to helping your business succeed.
            </p>
          </div>
        </div>

        <div className="container">
          <div
            className="single-portfolio"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Image
              src={portfolioImg1}
              alt="Portfolio Image"
              width={1200} // Spread wide
              height={100} // Adjust height as needed
            />

            <div className="flex flex-col items-center justify-center text-center pb-100">
              <h3>
                {/* <Link href="/portfolio/portfolio-details/">UX Workflow</Link> */}
              </h3>

              {/* <Link href="/portfolio/portfolio-details/" className="link-btn">
                <i className="pe-7s-link"></i>
              </Link> */}

              <Link
                href="https://calendly.com/dhruv-aii/30mins"
                className="btn btn-primary"
              >
                Book a 1:1 Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
