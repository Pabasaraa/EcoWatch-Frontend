import React from "react";

const JoinUs = () => {
  return (
    <>
      <div className="flex w-full justify-center text-center my-6">
        <div className="flex items-center basis-1/2">
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-1">
              <p className="text-lg sm:text-xl md:text-xl lg:text-xl font-bold text-white">
                Walk to the future, come with us ...
              </p>
              <p className="text-sm tracking-wide text-neutral-300 leading-relaxed">
                We aim high at being focused on building relationships with
                community. Using our creative gifts drives this foundation.
              </p>
            </div>
            <div className="flex gap-2 justify-center">
              <input
                type="email"
                placeholder="Your email here"
                className="border-gray-200 rounded-lg basis-3/4 px-4 py-2 focus:outline-none focus:border-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-700 font-semibold text-sm text-white rounded-lg px-6 py-2 hover:bg-green-800">
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
