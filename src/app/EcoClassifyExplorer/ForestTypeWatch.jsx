import React from "react";
import Hero from "./components/Hero";
import FileUpload from "./components/FileUpload";

const ForestTypeWatch = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Hero />
        <FileUpload />
      </div>
    </>
  );
};

export default ForestTypeWatch;