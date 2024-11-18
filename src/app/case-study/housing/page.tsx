import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import PortfolioDetailsContent from "../../../components/case-study/c8";
import CtaAreaTwo from "../../../components/Common/CtaAreaTwo";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Business Process Digitization and Automation (Housing Redevelopment Companies)" BGImage="/images/page-banner2.jpg" />

      <PortfolioDetailsContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
