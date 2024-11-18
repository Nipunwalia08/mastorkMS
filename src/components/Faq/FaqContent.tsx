"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

import faqImg from "../../../public/images/faq-img.jpg";
import Link from "next/link";

const FaqContent: React.FC = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img">
                <Image src={faqImg} alt="Image" width={800} height={534} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How long does it take to implement your AI email
                        solution?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Implementation typically takes 2 to 4 weeks, depending
                        on your specific needs and existing systems.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What results can we expect from your email management
                        solutions?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Clients have reported up to a 70% reduction in response
                        times and a 50% increase in conversion rates, enhancing
                        overall customer satisfaction.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Is the solution customizable for specific industries?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, our AI email management solutions can be tailored
                        to meet the unique requirements of various industries,
                        ensuring optimal performance.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What kind of support do you offer after implementation?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We provide ongoing support, including regular updates,
                        troubleshooting, and access to our dedicated customer
                        service team.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can your system integrate with our existing email
                        platform?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Absolutely! Our AI solutions are designed to integrate
                        seamlessly with popular email platforms to enhance your
                        current workflows.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="container flex flex-col items-center justify-center text-center" >
            <Link href="https://calendly.com/dhruv-aii/30mins" className="btn btn-primary mt-5">
            Book a 1:1 Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
