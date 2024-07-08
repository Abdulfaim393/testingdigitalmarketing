import React from "react";
import DrawerAppBar from "../../../landing-page/navbar/Navbar";
import Hero from "./hero/Hero";
import OverView from "./overView/OverView";
import Benefits from "./benefits/Benefits";
import DevCategories from "./devCategories/DevCategories";
import FooterComponent from "../../../landing-page/footer/FooterComponent";
import WhyChoose360 from "./whyChoose360/WhyChoose360";
import BestCompany from "./bestCompany/BestCompany";
import FormComponent from "./formComponent/FormComponent";

const WebDevelopment = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <Benefits />
      <DevCategories />
      <WhyChoose360 />
      <BestCompany />
      <FormComponent />
      <FooterComponent />
    </>
  );
};

export default WebDevelopment;
