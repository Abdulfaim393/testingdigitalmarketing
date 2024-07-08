import React from "react";
import DrawerAppBar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import AboutUs from "./aboutUs/AboutUs";
import Services from "./services/Services";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import WorkProcess from "./workProcess/WorkProcess";
import BlogNews from "./blog&news/BlogNews";
import Testimonials from "./testimonials/Testimonials";
import Footer from "./footer/Footer";

const LandingPage = () => {
  return (
    <>
      <DrawerAppBar />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <WorkProcess />
      <Testimonials />
      <BlogNews />
      <Footer />
    </>
  );
};

export default LandingPage;
