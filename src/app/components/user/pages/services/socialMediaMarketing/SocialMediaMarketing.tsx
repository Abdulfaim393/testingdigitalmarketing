import React from "react";
import DrawerAppBar from "../../../landing-page/navbar/Navbar";
import FormComponent from "../webDevelopment/formComponent/FormComponent";
import FooterComponent from "../../../landing-page/footer/FooterComponent";
import Hero from "./hero/Hero";
import OverView from "./overView/OverView";
import BestCompany from "./bestCompany/BestCompany";
import DevCategories from "./devCategories/DevCategories";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";

const SocialMediaMarketing = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <BestCompany />
      <DevCategories />
      <WhyChooseUs />
      <FormComponent />
      <FooterComponent />
    </>
  );
};

export default SocialMediaMarketing;
