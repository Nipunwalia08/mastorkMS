"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import portfolioDedailsImg from "../../../public/images/portfolio-details.jpg";

const PortfolioDetailsContent: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      {/* <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      /> */}

      <div className="portfolio-details ptb-100">
        <div className="container">
          <div className="pd-preview-img"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
    
          >
            <Image
              src={portfolioDedailsImg}
              alt="Portfolio Img"
              width={800}
              height={100}
            />

            {/* <div className="video-box">
              <div onClick={() => setToggler(!toggler)} className="video-btn">
                <i className="fa-solid fa-play"></i>
              </div>
            </div> */}
          </div>

          {/* <div className="service-details-info">
            <div className="single-info-box">
              <h4>Client</h4>
              <span>James Anderson</span>
            </div>

            <div className="single-info-box">
              <h4>Category</h4>
              <span>Mobile Apps</span>
            </div>

            <div className="single-info-box">
              <h4>Date</h4>
              <span>February 28, 2022</span>
            </div>

            <div className="single-info-box">
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
            </div>
          </div> */}

          <div className="portfolio-desc style-2">
            <h3>Challenge</h3>

            <p>
            A business faced inefficiencies in managing sales orders via email, with manual processes leading to missed opportunities, delayed responses, and lost sales. The disorganized workflow made it difficult to track customer inquiries, slowing down the sales cycle.
            </p>

            <h3>Solution</h3>
            <p>
            Mastork implemented an AI-powered email system that automated sales order management. The system automatically identified and categorized sales inquiries, routed them to the right team members, and provided real-time order tracking and follow-up reminders, ensuring no lead was missed.
            </p>

            {/* <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                At vero eos et accusamus et iusto odio dignissimos ducimus
              </li>
              <li>On the other hand, we denounce with righteous indignation</li>
            </ul> */}

            <h3>Result</h3>
            <p>
            With the automation in place, the company saw a 50% increase in conversion rates. By speeding up responses and providing a seamless experience, they turned more inquiries into confirmed orders, improving overall sales performance and customer satisfaction.
            </p>

            {/* <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsContent;
