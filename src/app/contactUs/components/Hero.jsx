import React from "react";
import heroCover from "../assets/hero-cover.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[18rem]">
        <div className="absolute z-20 w-full h-full">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="flex flex-col w-5/6 justify-center text-center">
              <div className="flex flex-col text-white w-full h-full justify-center">
                <div className="flex flex-col gap-3">
                  <p className="text-md text-green-500 sm:text-sm md:text-sm lg:text-sm font-semibold tracking-wider">
                    WE ARE HERE
                  </p>
                  <p className="text-lg text-white sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">
                    Are you looking for answers?
                  </p>
                </div>
                <div>
                  <p className="text-md tracking-wide text-neutral-300 leading-relaxed">
                    Let's talk shall we
                  </p>
                </div>
                {/* <div>
                  <button className="bg-green-700 text-sm text-white font-semibold rounded-lg px-4 py-2 hover:text-white hover:bg-green-800 transition duration-300 ease-in-out">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-6 h-6"
                        data-slot="icon"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 0 1-1.504-.123 5.976 5.976 0 0 1-3.935 1.107.75.75 0 0 1-.584-1.143 3.478 3.478 0 0 0 .522-1.756C2.979 13.825 2 12.025 2 10Z"
                        ></path>
                      </svg>
                      CHAT WITH US
                    </div>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 w-full h-full bg-black opacity-50"></div>
        <div className="absolute z-0 w-full">
          <img
            src={heroCover}
            alt="hero cover"
            className="object-cover w-full h-[18rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
