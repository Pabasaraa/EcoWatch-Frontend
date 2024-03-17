import React from "react";
import Hero from "./components/Hero";
import InfoCardContainer from "./components/InfoCardContainer";
import TeamInfoContainer from "./components/TeamInfoContainer";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col gap-12 mb-12">
        <Hero />
        <InfoCardContainer />
        <hr className="w-3/4 m-auto" />
        <TeamInfoContainer />
      </div>
    </>
  );
};

export default AboutUs;
