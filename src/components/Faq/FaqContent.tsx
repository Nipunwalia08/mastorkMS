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

            <div className="col-lg-6 pt-5">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How long does it take to implement Microsoft solutions?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Implementation times vary but are tailored to your
                        business needs for maximum efficiency.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Are your solutions customizable?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Absolutely! We specialize in creating solutions tailored
                        to your industry and processes.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you provide post-implementation support?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, our team offers ongoing support and optimization to
                        ensure your success.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  {/* <AccordionItem uuid="d">
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
                  </AccordionItem> */}

                  {/* <AccordionItem uuid="e">
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
                  </AccordionItem> */}
                </Accordion>
              </div>
            </div>
          </div>

          <div className="container flex flex-col items-center justify-center text-center">
            <Link
              href="https://calendly.com/dhruv-aii/30mins"
              className="btn btn-primary mt-5"
            >
              Book a 1:1 Call
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
