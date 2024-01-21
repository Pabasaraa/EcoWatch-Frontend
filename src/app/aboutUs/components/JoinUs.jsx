import React from "react";
import JoinUsImage from "../assets/join_us.jpg";

const JoinUs = () => {
  return (
    <>
      <div className="flex w-4/6 justify-center m-auto">
        <div className="flex items-center basis-1/2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                Walk to the future, come with us ...
              </p>
              <p className="text-md tracking-wide text-neutral-500 leading-relaxed">
                We aim high at being focused on building relationships with
                community. Using our creative gifts drives this foundation.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email here"
                className="border-gray-200 rounded-lg basis-3/4 px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-gray-800 font-semibold text-sm text-white rounded-lg px-6 py-2 hover:bg-gray-900">
                JOIN US
              </button>
            </div>
          </div>
        </div>
        <img
          src={JoinUsImage}
          alt="join us"
          className="w-52 h-auto object-scale-down"
        />
      </div>
    </>
  );
};

export default JoinUs;
