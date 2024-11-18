import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
// import NavbarDark from "../../components/Layouts/NavbarDark";
import MainBanner from "../../components/HomePages/SaasStartup/MainBanner";
import OurClients from "../../components/HomePages/SaasStartup/OurClients";
import AboutUs from "../../components/HomePages/SaasStartup/AboutUs";
import Services from "../../components/HomePages/SaasStartup/Services";
import HowItWorks from "../../components/HomePages/SaasStartup/HowItWorks";
import HowItWorks2 from "../../components/HomePages/SaasStartup/HowItWorks2";
// import PricingPlan from "../../components/HomePages/SaasStartup/PricingPlan";
// import Testimonials from "../../components/HomePages/SaasStartup/Testimonials";
// import LatestNews from "../../components/HomePages/SaasStartup/LatestNews";
// import Newsletter from "../../components/Common/Newsletter";
import FooterDark from "../../components/Layouts/FooterDark";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo"
import LatestNewsSlider from "../../components/Common/LatestNewsSlider";
import Footer from "../../components/Layouts/Footer";
export default function Page() {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <OurClients />

      <AboutUs />

      

      <HowItWorks />

      <HowItWorks2 />

      <Services />
{/* 
      <LatestNews /> */}

      <div className="bg-dark pb-100">
      {/* <LatestNewsSlider /> */}

<CtaAreaTwo />
      </div>

      {/* <FooterDark /> */}

      <Footer />
    </>
  );
}
