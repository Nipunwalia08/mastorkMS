import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import MainBanner from "../../components/Industries/Gaming/MainBanner";
import AboutUs from "../../components/Industries/Gaming/AboutUs";
import Services from "../../components/Industries/Gaming/Services";
import HowItWorks from "../../components/Industries/Gaming/HowItWorks";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo"
import Footer from "../../components/Layouts/Footer";
export default function Page() {
  return (
    <>
      <NavbarTwo />
      <MainBanner />
      <Services />
      <HowItWorks />
      <AboutUs />
      <div className="bg-dark pb-100">
        <CtaAreaTwo />
      </div>
      <Footer />
    </>
  );
}
