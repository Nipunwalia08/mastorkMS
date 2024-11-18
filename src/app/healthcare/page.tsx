import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import MainBanner from "../../components/Industries/Healthcare/MainBanner";
import OurServices from "../../components/Industries/Healthcare/OurServices";
import ServiceStyleTwo from "../../components/Industries/Healthcare/ServiceStyleTwo";
import Footer from "../../components/Layouts/Footer";
import TopFeatures from "../../components/Industries/Cybersecurity/TopFeatures";
import AboutContent from "../../components/Industries/Cybersecurity/AboutContent";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo"

export default function Page() {
  return (
    <>
      <NavbarTwo />
      <MainBanner />
      <OurServices />
      <ServiceStyleTwo />
      <h2 style={{ textAlign: 'center', color: "#18181B", paddingTop: "40px", fontSize: "40px" }} >CYBER SECURITY</h2>
      <TopFeatures />

      {/* <TopServices /> */}

      {/* <Services /> */}

      <AboutContent />
      <CtaAreaTwo />
      <Footer />
    </>
  );
}
