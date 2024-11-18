"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
  {
    icon: "/images/cyber-security/services/services-1.png",
    title: "Network Design and Implementation",
    shortText:
      "Customized network infrastructure designs tailored to your business requirements, incorporating the latest technologies for enhanced performance and reliability.",
    serviceDetailsLink: "",
    aosDelay: "100",
  },
  // {
  //   icon: "/images/cyber-security/services/services-2.png",
  //   title: "Migration and Consolidation",
  //   shortText:
  //     "Seamless migration of workloads and applications to modern data center environments, optimizing resource utilization and reducing operational costs.",
  //   serviceDetailsLink: "",
  //   aosDelay: "200",
  // },
  // {
  //   icon: "/images/cyber-security/services/services-3.png",
  //   title: "Data Protection",
  //   shortText:
  //     "24/7 monitoring and management of data center infrastructure, ensuring maximum uptime and reliability.",
  //   serviceDetailsLink: "",
  //   aosDelay: "300",
  // },
  // {
  //   icon: "/images/cyber-security/services/services-4.png",
  //   title: "Incident Responder",
  //   shortText:
  //     "Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do eiusmo.",
  //   serviceDetailsLink: "/services/service-details/",
  //   aosDelay: "400",
  // },
  // {
  //   icon: "/images/cyber-security/services/services-5.png",
  //   title: "Data Encryption",
  //   shortText:
  //     "Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do eiusmo.",
  //   serviceDetailsLink: "/services/service-details/",
  //   aosDelay: "500",
  // },
  // {
  //   icon: "/images/cyber-security/services/services-6.png",
  //   title: "Disaster Planning",
  //   shortText:
  //     "Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do eiusmo.",
  //   serviceDetailsLink: "/services/service-details/",
  //   aosDelay: "600",
  // },
  {
    icon: "/images/cyber-security/services/services-7.png",
    title: "Network Security",
    shortText:
      "Comprehensive security solutions to protect your network from cyber threats, including firewalls, intrusion detection and prevention systems, and secure remote access.",
    serviceDetailsLink: "",
    aosDelay: "200",
  },
  {
    icon: "/images/cyber-security/services/services-8.png",
    title: "Network Optimization",
    shortText:
      "Fine-tuning and optimization of network configurations to improve efficiency, reduce latency, and enhance user experience.",
    serviceDetailsLink: "",
    aosDelay: "300",
  },
];

const Networking: React.FC = () => {
  return (
    <>
      <div className="cs-services-area pt-100 pb-70">
        <div className="container">
          {/* <div className="section-title white-color">
            <span className="sub-title">OUR SERVICES</span>
            <h2>
              The Power To Protect YourCyberspace & Complete Website Security
            </h2>
          </div> */}

          <div className="row justify-content-center">
            {servicesData &&
              servicesData.slice(0, 8).map((value, i) => (
                <div className="col-lg-3 col-sm-6" key={i}>
                  <div
                    className="cs-services-card text-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="image">
                      <Image
                        src={value.icon}
                        alt="image"
                        width={70}
                        height={70}
                      />
                    </div>
                    <h3>
                      <Link href={value.serviceDetailsLink}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Networking;
