import React from "react";
import Hero from "./components/Hero";
import InfoCardContainer from "./components/InfoCardContainer";
import ContactForm from "./components/ContactForm";

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col gap-12 mb-12">
        <Hero />
        <InfoCardContainer />
        <ContactForm />
      </div>
    </>
  );
};

export default ContactUs;
