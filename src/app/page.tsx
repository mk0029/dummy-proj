// src/app/page.tsx
import Footer from "@/components/common/component/Footer";
import Navigation from "@/components/common/component/navigation/Navigation";
import BuildTogether from "@/components/home/BuildTogether";
import Hero from "@/components/home/hero/Hero";
import SelectedCases from "@/components/home/selected-cases/SelectedCases";
import TechSolutions from "@/components/home/tech-solutions/TechSolutions";
import { getSelectedCasesCard } from "@/sanity/getSelectedCasesCard";
import { getTechCards } from "@/sanity/getTechCards";
import React from "react";

// Make this a Server Component
async function Page() {
  // Fetch data directly in the component
  const [techCards, selectedCases] = await Promise.all([
    getTechCards(),
    getSelectedCasesCard(),
  ]);

  return (
    <>
      <Navigation />
      <Hero />
      <TechSolutions cards={techCards} />
      <SelectedCases cards={selectedCases} />
      <BuildTogether />
      <Footer />
    </>
  );
}

export default Page;
