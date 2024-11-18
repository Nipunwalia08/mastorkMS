// import Navbar from "./../components/Layouts/Navbar";
// import MainBanner from "../components/HomePages/DefaultHome/MainBanner";
// import Services from "../components/HomePages/DefaultHome/Services";
// import About from "../components/HomePages/DefaultHome/About";
// import OurWorks from "../components/HomePages/DefaultHome/OurWorks";
// import WorkProcess from "../components/HomePages/DefaultHome/WorkProcess";
// import Feedback from "../components/Common/Feedback";
// import Team from "../components/Common/Team";
// import FunFacts from "../components/Common/FunFacts";
// import LatestNewsSlider from "../components/Common/LatestNewsSlider";
// import CtaArea from "../components/Common/CtaArea";
// import Partner from "../components/Common/Partner";
// import Footer from "../components/Layouts/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <MainBanner />

//       <Services />

//       <About />

//       <OurWorks />

//       <WorkProcess />

//       <Feedback />

//       <Team />

//       <FunFacts />

//       {/* <LatestNewsSlider /> */}

//       <CtaArea />

//       <Partner />

//       <Footer />
//     </>
//   );
// }
// import React from "react";
// import NavbarTwo from "../components/Layouts/NavbarTwo";
// import MainBanner from "../components/HomePages/StudioAgency/MainBanner";
// import Services from "../components/HomePages/StudioAgency/Services";
// import OurWorks from "../components/HomePages/StudioAgency/OurWorks";
// import FunFactsTwo from "../components/Common/FunFactsTwo";
// import About from "../components/HomePages/StudioAgency/About";
// import Feedback from "../components/Common/Feedback";
// import LatestNewsSlider from "../components/Common/LatestNewsSlider";
// import CtaAreaTwo from "../components/Common/CtaAreaTwo";
// import Partner from "../components/Common/Partner";
// import Footer from "../components/Layouts/Footer";
// import OurServices from "../components/HomePages/ItAgencyTwo/OurServices";

// export default function Page() {
//   return (
//     <>
//       <NavbarTwo />

//       <MainBanner />

//       <Services />

//       <About />
//       <OurServices/>
//       <Partner />

//       <OurWorks />

//       {/* <FunFactsTwo />

//       <Feedback /> */}

//       {/* <LatestNewsSlider /> */}

//       <CtaAreaTwo />



//       <Footer />
//     </>
//   );
// }

import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomePages/DigitalMarketing/MainBanner";
import Partner from "../components/HomePages/DigitalMarketing/Partner";
import MarketingProcess from "../components/HomePages/DigitalMarketing/MarketingProcess";
// import WorkProcess from "../components/HomePages/DigitalMarketing/";
import FaqContent from "../components/Faq/FaqContent";
import Portfolio from "../components/HomePages/StartupAgency/Portfolio";
import WorkProcess2 from "../components/HomePages/MarketingAgency/WorkProcess";
import AboutContent from "../components/HomePages/DigitalMarketing/AboutContent";
import OurServices from "../components/HomePages/DigitalMarketing/OurServices";
import FunFacts from "../components/HomePages/DigitalMarketing/FunFacts";
import Testimonials from "../components/HomePages/DigitalMarketing/Testimonials";
import ServiceStyle2 from "../components/HomePages/MarketingAgency/ServiceStyleTwo";
import PricingPlans from "../components/HomePages/DigitalMarketing/PricingPlans";
import TeamMember from "../components/HomePages/DigitalMarketing/TeamMember";
import LatestNews from "../components/HomePages/DigitalMarketing/LatestNews";
import CtaArea from "../components/Common/CtaArea";
import CaseStudies from "../components/HomePages/DigitalMarketing/CaseStudies";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <MarketingProcess />

      {/* <WorkProcess2 /> */}

      <ServiceStyle2 />

      <LatestNews />

      <CaseStudies />

      {/* <AboutContent />

      <OurServices />

      <FunFacts /> */}

      

      <Testimonials />

      <Portfolio />

      {/* <PricingPlans /> */}

      <CtaArea />

      {/* <TeamMember /> */}

      

      <Partner />

      {/* <div className="pb-100">
        <Newsletter />
      </div> */}

     <FaqContent />

      <Footer />
    </>
  );
}

