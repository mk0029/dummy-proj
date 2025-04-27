import Footer from "@/components/common/component/Footer";
import Navigation from "@/components/common/component/navigation/Navigation";
import BuildTogether from "@/components/home/BuildTogether";
import Hero from "@/components/home/hero/Hero";
import SelectedCases from "@/components/home/selected-cases/SelectedCases";
import TechSolutions from "@/components/home/tech-solutions/TechSolutions";
import React from "react";

const page = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <TechSolutions />
      <SelectedCases />
      <BuildTogether />
      <Footer />
    </>
  );
};

export default page;
