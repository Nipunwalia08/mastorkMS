// "use client";

// import React from "react";
// import ContactForm from "@/components/Contact/ContactForm";

// const MainBanner: React.FC = () => {
//   return (
//     <>
//     <div style={{
//           backgroundImage: `url(/images/digital-marketing/professionalbanner.jpg)`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="relative">

// <div className="absolute inset-0 bg-white opacity-50"></div>
//       <div
//         className="marketing-banner-area relative z-10"
//       >
//         <div className="container flex flex-col md:flex-row items-center justify-between px-6 ">
//           <div className="row align-items-center">
//             <div className="col-lg-6">
//               <div className="marketing-banner-content">
//                 <h1>Microsoft Stack Specialist</h1>
//                 <p>
//                   Unlock the potential of Microsoft technologies to drive
//                   digital transformation, automate workflows, and elevate your
//                   business with customized solutions and expert guidance.
//                 </p>
//                 <a
//                   href="https://calendly.com/dhruv-aii/30mins"
//                   className="default-btn-two"
//                 >
//                   Book a 1:1 Call <i className="fas fa-chevron-right"></i>
//                 </a>
//               </div>
//             </div>
//             <div className="col-lg-6 px-6">
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default MainBanner;

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import professionalbanner from "../../../../public/images/digital-marketing/professionalbanner.webp";
import bannerImg from "../../../../public/images/digital-marketing/banner-img.png";
import shapeImg from "../../../../public/images/digital-marketing/shape1.png";
import ContactForm from "@/components/Contact/ContactForm";

const MainBanner: React.FC = () => {
  return (
    <>
      {/* <div
        style={{
          backgroundImage: `url(/images/digital-marketing/professionalbanner.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative"
      >
        {/* Overlay 
        <div className="absolute inset-0 bg-white opacity-60 z-0"></div> */}

      <div className="marketing-banner-area relative gap-4 md:w-3/4 sm:mt-50%">
        <div className="container flex flex-col md:flex-row items-center justify-between px-6 py-16">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="marketing-banner-content  relative z-20 md:mt-7">
                <h1 className="text-3xl font-bold mb-4 text-shadow-md ">
                  Microsoft Stack Specialist
                </h1>
                <p className="mb-6 text-shadow-md ">
                  Unlock the potential of Microsoft technologies to drive
                  digital transformation, automate workflows, and elevate your
                  business with customized solutions and expert guidance.
                </p>
                <div className="container flex flex-col items-center justify-center text-center mb-5">
                  <Link
                    href="https://calendly.com/dhruv-aii/30mins"
                    className="btn btn-primary mt-5"
                  >
                    Book a 1:1 Call
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
