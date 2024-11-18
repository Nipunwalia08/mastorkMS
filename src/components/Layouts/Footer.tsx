"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/image (11).png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <Image 
                      src={logo}
                      alt="Logo" 
                      width={150}
                      height={40}
                    />
                  </Link>
                </div>

                <p>
                Mastork Technologies is a progressive technology company committed to using
 artificial intelligence (AI) and digital innovation to transform businesses. 
                </p>

                <ul className="social-links">
                  {/* <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li> */}
                  <li>
                    <a href="https://www.linkedin.com/company/mastork/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/mastork.ai/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget ml-4 pl-5"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="200"
              >
                <h3>Explore</h3>

                <ul className="list">
                  <li>
                    <Link href="https://www.mastork.com/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.mastork.com/about/">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.mastork.com/services/">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.mastork.com/industries/">
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.mastork.com/case-study/">
                      Case Study
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/team/">
                      Team
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget ml-4"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="300"
              >
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <Link href="https://calendly.com/dhruv-aii/30mins">
                      Contact Us
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/pricing/">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq/">
                      Faq
                    </Link>
                  </li> */}
                  <li>
                    <Link href="https://www.mastork.com/privacy-policy/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.mastork.com/terms-conditions/">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="400"
              >
                <h3>Get in Touch</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>  Kohat Enclave, Delhi, India
                  </li>
                  <li>
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:+91 9871114841"> +91 9871114841</a> 
                    <br />
                    {/* <a href="tel:+324-9442-515">+324-9442-999</a> */}
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto:hello@mastork.com">hello@mastork.com</a>
                    {/* <a href="mailto:support@pungent.com">support@pungent.com</a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} Mastork. All Rights Reserved By{" "}
              <a href="https://mastork.com" target="_blank">
                Mastork Technologies
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
