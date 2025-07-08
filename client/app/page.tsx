"use client";
import React from "react";
import Hero from "./component/hero";
import { WhatIDoSection } from "./component/hero/WhatIDoSection ";
import { FeaturedProjects } from "./component/hero/FeaturedProjects";
import CallToActionSection from "./component/hero/CallToActionSection";

const Page = () => {
  return (
    <div>
      <Hero />
      <WhatIDoSection />
      <FeaturedProjects />
      <CallToActionSection />
    </div>
  );
};

export default Page;
