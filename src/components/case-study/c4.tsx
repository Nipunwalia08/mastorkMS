"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import portfolioDedailsImg from "../../../public/images/case-studies/c4.jpg";

const PortfolioDetailsContent: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="portfolio-details ptb-100">
        <div className="container">
          <div className="pd-preview-img">
            <Image
              src={portfolioDedailsImg}
              alt="Portfolio Img"
              width={1320}
              height={100}
            />

            {/* <div className="video-box">
              <div onClick={() => setToggler(!toggler)} className="video-btn">
                <i className="fa-solid fa-play"></i>
              </div>
            </div> */}
          </div>

          <div className="service-details-info">
            {/* <div className="single-info-box">
              <h4>Client</h4>
              <span>James Anderson</span>
            </div> */}

            <div className="single-info-box">
              <h4>Category</h4>
              <span>Automation</span>
            </div>

            <div className="single-info-box">
              <h4>Sector</h4>
              <span>Finance</span>
            </div>

            <div className="single-info-box">
              <h4>Date</h4>
              <span>February 28, 2022</span>
            </div>

            {/* <div className="single-info-box">
              <h4>Share</h4>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="single-info-box">
              <a href="#" className="default-btn" target="_blank">
                Live Preview
              </a>
            </div> */}
          </div>

          <div className="portfolio-desc style-2">
            <h3>Problem</h3>

            <p>
            Fund managers in the fintech industry face challenges in managing and tracking capital, distribution, and management calls, primarily due to the manual extraction of information from PDF documents. This process is time-consuming and prone to errors.



            </p>

            <h3>Solution</h3>
            <p>
            Mastork developed an Intelligent Document Processing solution using a machine learning (ML) pipeline trained on financial documents. This system employs natural language processing (NLP) models to automatically extract relevant information from PDFs, highlight critical data, and allow for manual review if necessary. The extracted information is then saved into a database for easy access and analysis.


            </p>

            {/* <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                At vero eos et accusamus et iusto odio dignissimos ducimus
              </li>
              <li>On the other hand, we denounce with righteous indignation</li>
            </ul> */}

            <h3>Conclusion</h3>
            <p>
            This intelligent solution has transformed the way financial data is managed and processed. By automating the extraction and entry of critical information, it has saved significant time, reduced errors, and improved the overall efficiency of financial processes for fund managers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsContent;
