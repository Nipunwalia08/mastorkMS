import React from "react";
// import NavbarDark from "../../components/Layouts/NavbarDark";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import MainBanner from "../../components/HomePages/CyberSecurityAgency/MainBanner";
import TopFeatures from "../../components/HomePages/CyberSecurityAgency/TopFeatures";
// import TopServices from "../../components/HomePages/CyberSecurityAgency/TopServices";
// import Services from "../../components/HomePages/CyberSecurityAgency/Services";
import AboutContent from "../../components/HomePages/CyberSecurityAgency/AboutContent";
import WhyChooseUs from "../../components/HomePages/CyberSecurityAgency/WhyChooseUs";
// import FunFacts from "../../components/HomePages/CyberSecurityAgency/FunFacts";
// import OurClients from "../../components/HomePages/CyberSecurityAgency/OurClients";
// import ProvideAdvancedSecurity from "../../components/HomePages/CyberSecurityAgency/ProvideAdvancedSecurity";
// import Overview from "../../components/HomePages/CyberSecurityAgency/Overview";
// import Feedbacks from "../../components/HomePages/CyberSecurityAgency/Feedbacks";
import CtaAreaThree from "../../components/Common/CtaAreaThree";
// import LatestNews from "../../components/HomePages/CyberSecurityAgency/LatestNews";
// import Newsletter from "../../components/Common/Newsletter";
import FooterDark from "../../components/Layouts/FooterDark";
import Network from "@/components/HomePages/CyberSecurityAgency/network";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo"
import LatestNewsSlider from "../../components/Common/LatestNewsSlider";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      {/* <NavbarDark /> */}
      <NavbarTwo />

      <MainBanner />

      <div className="bg-1F1F22">
        <h2 style={{ textAlign: 'center', color: "white", paddingTop: "20px", fontSize: "60px" }} >CYBER SECURITY</h2>
        <TopFeatures />

        {/* <TopServices /> */}

        {/* <Services /> */}

        <AboutContent />

        <WhyChooseUs />

        <Network />

        {/* <FunFacts />

        <OurClients />

        <ProvideAdvancedSecurity />

        <Overview />

        <Feedbacks /> */}

        {/* <CtaAreaThree /> */}

        {/* <LatestNews /> */}

        <div className="pb-100">
          {/* <LatestNewsSlider /> */}

          <CtaAreaTwo />

        </div>
      </div>

      {/* <FooterDark /> */}
      <Footer />
    </>
  );
}
