import React from "react";
import DrawerAppBar from "../../../landing-page/navbar/Navbar";
import FormComponent from "../webDevelopment/formComponent/FormComponent";
import FooterComponent from "../../../landing-page/footer/FooterComponent";
import Hero from "./hero/Hero";
import OverView from "./overView/OverView";
import Process from "./process/Process";
import DevCategories from "./devCategories/DevCategories";
import WhyEcommerce from "./whyEcommerce/WhyEcommerce";

const ECommerce = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <Process />
      <DevCategories />
      <WhyEcommerce />
      <FormComponent />
      <FooterComponent />
    </>
  );
};

export default ECommerce;
