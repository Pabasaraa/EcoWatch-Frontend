import React from "react";
import Hero from "./components/Hero";
import ProcessInfo from "./components/ProcessInfo";

const ForestTypeResult= () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Hero />
        <ProcessInfo />
      </div>
    </>
  );
};

export default ForestTypeResult;