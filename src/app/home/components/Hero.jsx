import React from "react";
import heroCover from "../assets/hero-cover.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[32rem]">
        <div className="absolute z-20 w-full h-full">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="flex flex-col w-5/6 justify-center">
              <div className="flex flex-col text-white w-full md:w-1/2 lg:w-5/12 h-full justify-center gap-10">
                <div className="flex flex-col gap-1">
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">
                    Insights for Sustainable{" "}
                    <span className="text-green-500">Ecosystems</span>
                  </p>
                  <p className="text-sm tracking-wide text-neutral-300">
                    Preserving Nature, One Scan at a Time
                  </p>
                </div>
                <div>
                  <p className="text-md tracking-wide text-neutral-300 leading-relaxed">
                    Join us in a groundbreaking journey to safeguard our
                    forests. Our research pioneers deforestation detection,
                    assesses forest health, classifies ecosystems, and
                    identifies wildlife species. Together, let's nurture a
                    sustainable future for our planet.
                  </p>
                </div>
                <div>
                  <button className="bg-white text-black font-semibold rounded-lg px-4 py-2 hover:text-white hover:bg-green-700 transition duration-300 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 w-full h-full bg-black opacity-50"></div>
        <div className="absolute z-0 w-full">
          <img
            src={heroCover}
            alt="hero cover"
            className="object-cover w-full h-[32rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
