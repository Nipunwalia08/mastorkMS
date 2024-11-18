"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const servicesData = [
  // {
  //   icon: "/images/cyber-security/services/services-1.png",
  //   title: "Design and Build",
  //   shortText:
  //     "Customized data center solutions tailored to your organization's specific requirements, ensuring optimal performance and efficiency.",
  //   serviceDetailsLink: "",
  //   aosDelay: "100",
  // },
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
  {
    icon: "/images/cyber-security/services/services-4.png",
    title: "Public, Private, and Hybrid Cloud",
    shortText:
      "Comprehensive cloud solutions designed to meet your organization's unique needs, whether it's public cloud for scalability, private cloud for security, or a hybrid approach for flexibility. ",
    serviceDetailsLink: "",
    aosDelay: "100",
  },
  {
    icon: "/images/cyber-security/services/services-5.png",
    title: "Migration and Optimization",
    shortText:
      "Expert assistance in migrating workloads to the cloud and optimizing cloud resources to maximize performance and cost-effectiveness.",
    serviceDetailsLink: "",
    aosDelay: "200",
  },
  {
    icon: "/images/cyber-security/services/services-6.png",
    title: "Cloud Security",
    shortText:
      "Robust security measures to safeguard your data and applications in the cloud, including identity and access management, encryption, and threat detection.",
    serviceDetailsLink: "",
    aosDelay: "300",
  },
  // {
  //   icon: "/images/cyber-security/services/services-7.png",
  //   title: "Threat Hunter",
  //   shortText:
  //     "Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do eiusmo.",
  //   serviceDetailsLink: "/services/service-details/",
  //   aosDelay: "700",
  // },
  // {
  //   icon: "/images/cyber-security/services/services-8.png",
  //   title: "Data Recovery",
  //   shortText:
  //     "Lorem ipsum dolor sit amet, is consectetur adipiscing elit, sed do eiusmo.",
  //   serviceDetailsLink: "/services/service-details/",
  //   aosDelay: "800",
  // },
];

const Cloud: React.FC = () => {
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

export default Cloud;
