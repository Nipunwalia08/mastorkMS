"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
  {
    image: "/images/business-consulting/services-img1.jpg",
    title: "Business Strategy Development",
    shortText:
      "Create a clear, actionable roadmap for your business's future, aligned with your vision and goals.",
    serviceDetailsLink: "",
    aosDelay: "100",
  },
  {
    image: "/images/business-consulting/services-img2.jpg",
    title: "Operational Efficiency",
    shortText:
      "Identify and implement improvements in your processes, enhancing productivity and reducing costs.",
    serviceDetailsLink: "",
    aosDelay: "200",
  },
  {
    image: "/images/business-consulting/services-img3.jpg",
    title: "Risk Management",
    shortText:
      "Mitigate risks and ensure compliance with industry standards and regulations, protecting your business.",
    serviceDetailsLink: "",
    aosDelay: "300",
  },
  {
    image: "/images/business-consulting/services-img4.jpg",
    title: "Technology Integration",
    shortText:
      "Maximize the potential of your technology investments with our guidance on integrating and leveraging the latest tools and systems.",
    serviceDetailsLink: "",
    aosDelay: "400",
  },
  {
    image: "/images/business-consulting/services-img5.jpg",
    title: "Market Analysis",
    shortText:
      "Stay ahead of market trends and dynamics with our insights, enabling you to make strategic decisions that position your business for success.",
    serviceDetailsLink: "",
    aosDelay: "500",
  },
  // {
  //   image: "/images/business-consulting/services-img6.jpg",
  //   title: "Profit Planning",
  //   shortText:
  //     "Lorem ipsum dolor sit amet, cons e ctetur adipiscing elit, sed do eiu smod.",
  //   serviceDetailsLink: "/services/service-details/",
  //   aosDelay: "600",
  // },
];

const Services: React.FC = () => {
  return (
    <>
      <div className="pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR SERVICES</span>
            <h2>Consulting Services</h2>
          </div>

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 6).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="bc-services-item"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <Image
                      src={value.image}
                      alt="image"
                      width={860}
                      height={463}
                    />
                    <h3>{value.title}</h3>
                    
                    <div className="hover-content">
                      <h3>
                        <Link href={value.serviceDetailsLink}>
                          {value.title}
                        </Link>
                      </h3>
                      <p>{value.shortText}</p>
                      {/* <Link
                        href={value.serviceDetailsLink}
                        className="link-btn"
                      >
                        Read More <i className="fas fa-chevron-right"></i>
                      </Link> */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
