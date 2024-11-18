import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import MainBanner from "../../components/HomePages/ItAgency/MainBanner";
// import OurServices from "../../components/HomePages/ItAgency/OurServices";
import ServiceStyleTwo from "../../components/HomePages/ItAgency/ServiceStyleTwo";
import WhyChooseUs from "../../components/HomePages/ItAgency/WhyChooseUs";
// import FunFactsTwo from "../../components/Common/FunFactsTwo";
// import Feedback from "../../components/Common/Feedback";
// import PricingStyleThree from "../../components/Pricing/PricingStyleThree";
// import TeamStyleTwo from "../../components/Common/TeamStyleTwo";
// import LatestNewsSliderTwo from "../../components/Common/LatestNewsSliderTwo";
// import Newsletter from "../../components/Common/Newsletter";
import Footer from "../../components/Layouts/Footer";
// import Partner from "../../components/Common/Partner";
import WorkProcess from "../../components/HomePages/ItAgency/WorkProcess";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo"
import LatestNewsSlider from "../../components/Common/LatestNewsSlider";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <WorkProcess />

      {/* <OurServices /> */}

      <ServiceStyleTwo />

      <WhyChooseUs />

      {/* <LatestNewsSlider /> */}

      <CtaAreaTwo />

      {/* <FunFactsTwo />

      <Partner />

      <Feedback />

      <TeamStyleTwo />

      <PricingStyleThree />

      <LatestNewsSliderTwo />

      <div className="pb-100">
        <Newsletter />
      </div> */}

      <Footer />
    </>
  );
}
