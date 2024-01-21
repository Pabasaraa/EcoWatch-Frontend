import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col w-full justify-center items-center gap-6">
          <div className="flex flex-col w-5/6 justify-center text-center">
            <div className="flex flex-col text-white w-full justify-center">
              <div className="flex flex-col">
                <p className="text-lg text-gray-800 sm:text-xl md:text-xl lg:text-2xl font-bold tracking-wide">
                  Tell us more about you
                </p>
              </div>
            </div>
          </div>
          <form className="w-full lg:w-1/2 space-y-4 bg-white border border-gray-200 shadow-lg px-6 py-8 rounded-lg">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-grow rounded-lg border-gray-300 focus:border-0 focus:outline-0 focus:ring-green-500 p-2"
              />
              <input
                type="text"
                placeholder="Profession"
                className="flex-grow rounded-lg border-gray-300 focus:border-0 focus:outline-0 focus:ring-green-500 p-2"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border-gray-300 focus:border-0 focus:outline-0 focus:ring-green-500 p-2"
            />
            <textarea
              placeholder="Message"
              className="w-full rounded-lg border-gray-300 focus:border-0 focus:outline-0 focus:ring-green-500 p-2"
              rows="5"
            />
            <button
              type="submit"
              className="float-right bg-gray-800 hover:bg-gray-900 text-white transition duration-300 ease-in-out font-semibold rounded-lg px-6 py-2"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
