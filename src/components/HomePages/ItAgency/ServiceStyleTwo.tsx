"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import serviceImg1 from "../../../../public/images/services/s2.jpg";
import serviceImg2 from "../../../../public/images/services/s3.jpg";
import serviceImg3 from "../../../../public/images/services/s4.jpg";
import aboutAppImg from "../../../../public/images/app/about-app.png";
import serviceImg4 from "../../../../public/images/services/s5.jpg";

const ServiceStyleTwo: React.FC = () => {
  return (
    <>
      <div className="pb-100 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="app-about-img"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Image src={aboutAppImg} alt="about" width={732} height={727} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-about-content">
                {/* <span className="app-sub-title">ABOUT APP</span> */}
                <h2>Advanced Analytics</h2>
                <p>
                Harness the power of advanced analytics to extract actionable insights from your data. Our solutions range from descriptive analytics for historical trends to predictive analytics for future forecasts, enabling you to uncover valuable insights that drive strategic decisions.
                </p>

                <div className="features-text">
                  <h6>Use Case Scenerio</h6>
                  <p>
                  A retail chain uses advanced analytics to analyze customer purchase behavior and preferences. By segmenting customers based on their shopping habits and demographics, the chain tailors marketing campaigns and promotions to specific customer segments, resulting in increased sales and customer satisfaction.
                  </p>
                </div>

                {/* <div className="features-text">
                  <h6>Cloud Storage</h6>
                  <p>
                    Cloud based storage for your data backup just log in with
                    your mail account from play store and using whatever you
                    want for your business purpose orem ipsum dummy of your
                    business purpose text.
                  </p>
                </div> */}

                {/* <div className="btn-box">
                  <Link href="#" className="app-default-btn">
                    Start Free Trial
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pb-100 overflow-hidden bg-fcfbfb">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="app-about-content">
            {/* <span className="app-sub-title">ABOUT APP</span> */}
            <h2>Predictive Modeling</h2>
            <p>
            Utilize predictive modeling techniques to anticipate future trends and outcomes. Whether forecasting customer behavior, market trends, or demand fluctuations, our predictive modeling capabilities empower you to make proactive decisions and stay ahead of the curve.
            </p>

            <div className="features-text">
              <h6>Use Case Example</h6>
              <p>
              A manufacturing company employs predictive modeling to forecast equipment maintenance needs. By analyzing historical equipment performance data and maintenance records, the company predicts when equipment is likely to fail, enabling proactive maintenance interventions to prevent costly downtime and optimize production.
              </p>
            </div>

            {/* <div className="features-text">
              <h6>Cloud Storage</h6>
              <p>
                Cloud based storage for your data backup just log in with
                your mail account from play store and use whatever you
                want for your business purpose orem ipsum dummy text.
              </p>
            </div> */}

            {/* <div className="btn-box">
              <Link href="#" className="app-default-btn">
                Start Free Trial
              </Link>
            </div> */}
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div
            className="app-about-img"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Image src={serviceImg1} alt="about" width={732} height={727} />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="pb-100 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="app-about-img"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Image src={serviceImg2} alt="about" width={732} height={727} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-about-content">
                {/* <span className="app-sub-title">ABOUT APP</span> */}
                <h2>Actionable Insights</h2>
                <p>
                Transform raw data into actionable intelligence with our expertise in data analysis. Our team of data scientists and analysts uncovers patterns, trends, and correlations within your data, providing invaluable insights that inform strategic initiatives and drive business growth.
                </p>

                <div className="features-text">
                  <h6>Use Case Scenerio</h6>
                  <p>
                  A hedge fund uses predictive analytics models to analyze market data and identify profitable trading opportunities. By examining historical market trends, sentiment analysis from news articles, and social media feeds, the system provides insights into potential market movements, enabling traders to make data-driven investment decisions and maximize returns.
                  </p>
                </div>

                {/* <div className="features-text">
                  <h6>Cloud Storage</h6>
                  <p>
                    Cloud based storage for your data backup just log in with
                    your mail account from play store and using whatever you
                    want for your business purpose orem ipsum dummy of your
                    business purpose text.
                  </p>
                </div> */}

                {/* <div className="btn-box">
                  <Link href="#" className="app-default-btn">
                    Start Free Trial
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pb-100 overflow-hidden bg-fcfbfb">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="app-about-content">
            {/* <span className="app-sub-title">ABOUT APP</span> */}
            <h2>Surveillance and Anomaly Detection</h2>
            <p>
            Enhance risk management and fraud detection with our surveillance and anomaly detection solutions. By continuously monitoring data for outliers and irregularities, we help you identify potential threats and opportunities, enabling timely interventions and informed risk mitigation strategies.
            </p>

            <div className="features-text">
              <h6>Use Case Example</h6>
              <p>
              A financial institution utilizes machine learning algorithms to analyze transaction data in real-time. By detecting patterns indicative of fraudulent activities, such as unusual spending patterns or anomalous account behavior, the system automatically flags suspicious transactions for further investigation, helping the institution mitigate financial losses and protect customers.
              </p>
            </div>

            {/* <div className="features-text">
              <h6>Cloud Storage</h6>
              <p>
                Cloud based storage for your data backup just log in with
                your mail account from play store and use whatever you
                want for your business purpose orem ipsum dummy text.
              </p>
            </div> */}

            {/* <div className="btn-box">
              <Link href="#" className="app-default-btn">
                Start Free Trial
              </Link>
            </div> */}
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div
            className="app-about-img"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Image src={serviceImg3} alt="about" width={732} height={727} />
          </div>
        </div>
      </div>
    </div>
  </div>
      
  <div className="pb-100 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="app-about-img"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Image src={serviceImg4} alt="about" width={732} height={727} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="app-about-content">
                {/* <span className="app-sub-title">ABOUT APP</span> */}
                <h2>Comprehensive Reporting</h2>
                <p>
                Access comprehensive reports and dashboards that provide a clear overview of your business performance. From executive summaries to detailed performance metrics, our reporting solutions empower decision-makers at all levels of your organization to make data-driven decisions with confidence.
                </p>

                <div className="features-text">
                  <h6>Use Case Scenerio</h6>
                  <p>
                  A healthcare organization leverages comprehensive reporting dashboards to monitor patient outcomes and resource utilization. By aggregating data from electronic health records and medical devices, the organization gains insights into treatment effectiveness, patient satisfaction, and operational efficiency, facilitating data-driven decision-making to improve healthcare delivery.
                  </p>
                </div>

                {/* <div className="features-text">
                  <h6>Cloud Storage</h6>
                  <p>
                    Cloud based storage for your data backup just log in with
                    your mail account from play store and using whatever you
                    want for your business purpose orem ipsum dummy of your
                    business purpose text.
                  </p>
                </div> */}

                {/* <div className="btn-box">
                  <Link href="#" className="app-default-btn">
                    Start Free Trial
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ServiceStyleTwo;
