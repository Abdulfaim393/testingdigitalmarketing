import React from "react";
import DrawerAppBar from "../../../landing-page/navbar/Navbar";
import FormComponent from "../webDevelopment/formComponent/FormComponent";
import FooterComponent from "../../../landing-page/footer/FooterComponent";
import Hero from "./hero/Hero";
import BestCompany from "./bestCompany/BestCompany";
import OverView from "./overView/OverView";
import Benefits from "./benefits/Benefits";
import WhyChoose360 from "../webDevelopment/whyChoose360/WhyChoose360";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";

const ItConsulting = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <BestCompany />
      <Benefits />
      <WhyChooseUs />
      <FormComponent />
      <FooterComponent />
    </>
  );
};

export default ItConsulting;
