"use client";

import React from "react";
import Image from "next/image";

const workProcessData = [
  {
    title: "Data-Driven Decision-Making Solutions",
    shortText:
      "In today's data-rich business environment, leveraging insights from data is essential for informed decision-making.Leveraging the power of data science, our solutions enable organizations to optimize various aspects of their operations. From demand forecasting to inventory optimization and process mining, our tools intelligize data to drive quality decision-making and operational excellence.",
    image: "/images/man-with-mobile.png",
    circleImage: "/images/circle.png",

    list: [
      {
        iconName: "pe-7s-display1",
        title: "Advanced Analytics",
        text: "",
        aosDelay: "100",
      },
      {
        iconName: "pe-7s-display2",
        title: "Predictive Modeling",
        text: "",
        aosDelay: "200",
      },
      {
        iconName: "pe-7s-airplay",
        title: "Actionable Insights",
        text: "",
        aosDelay: "300",
      },
      {
        iconName: "pe-7s-note2",
        title: "Surveillance",
        text: "",
        aosDelay: "400",
      },
      {
        iconName: "pe-7s-light",
        title: "Comprehensive Reporting",
        text: "",
        aosDelay: "500",
      },
      {
        iconName: "pe-7s-sun",
        title: "Anomaly Detection",
        text: "",
        aosDelay: "600",
      },
    ],
  },
];

const WorkProcess: React.FC = () => {
  return (
    <>
      {workProcessData &&
        workProcessData.map((value, i) => (
          <section className="work-process-area ptb-100" key={i}>
            <div className="container">
              <div className="section-title">
                <h2>{value.title}</h2>
                <p>{value.shortText}</p>
              </div>

              <div className="work-process">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <Image
                    src={value.image}
                    alt="image"
                    width={492}
                    height={941}
                  />
                </div>

                <div className="work-process-list">
                  {value.list.slice(0, 6).map((value, i) => (
                    <div
                      className="single-work-process"
                      key={i}
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay={value.aosDelay}
                    >
                      <div className="icon">
                        <i className={value.iconName}></i>
                      </div>
                      <h3>{value.title}</h3>
                      <span>{value.text}</span>
                    </div>
                  ))}
                </div>

                <Image
                  src={value.circleImage}
                  className="rotateme circle-image"
                  alt="image"
                  width={905}
                  height={908}
                />
              </div>
            </div>
          </section>
        ))}
    </>
  );
};

export default WorkProcess;
