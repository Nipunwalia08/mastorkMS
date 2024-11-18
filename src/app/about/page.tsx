import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import About from "../../components/About/AboutContent";
import FunFactsTwo from "../../components/Common/FunFactsTwo";
import TeamStyleTwo from "../../components/Team/TeamStyleTwo";
import Feedback from "../../components/Common/Feedback";
import Partner from "../../components/Common/Partner";
import Collab from "../../components/Common/Collab";
import CtaAreaTwo from "../../components/Common/CtaAreaTwo";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="About Us" BGImage="/images/page-banner1.jpg" />

      <About />

      <FunFactsTwo />

      <TeamStyleTwo />

      {/* <Feedback /> */}

      <Partner />

<Collab/>

      <CtaAreaTwo />

      <Footer />
    </>
  );
}
