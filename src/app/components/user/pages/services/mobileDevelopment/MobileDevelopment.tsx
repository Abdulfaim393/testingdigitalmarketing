import React from "react";
import DrawerAppBar from "../../../landing-page/navbar/Navbar";
import FooterComponent from "../../../landing-page/footer/FooterComponent";
import Hero from "./hero/Hero";
import OverView from "./overView/OverView";
import KnowAboutUs from "./knowAboutUs/KnowAboutUs";
import FormComponent from "../webDevelopment/formComponent/FormComponent";
import DevCategories from "./devCategories/DevCategories";
import Business from "./business/Business";

const MobileDevelopment = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <OverView />
      <KnowAboutUs />
      <DevCategories />
      <Business />
      <FormComponent />
      <FooterComponent />
    </>
  );
};

export default MobileDevelopment;
