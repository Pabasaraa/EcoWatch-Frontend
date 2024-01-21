import React from "react";

import {
  CubeTransparentIcon,
  GlobeAsiaAustraliaIcon,
  Cog6ToothIcon,
} from "@heroicons/react/20/solid";

const TeamInfoCard = ({ name, description, img, direction }) => {
  return (
    <>
      <div className="flex flex-wrap w-full justify-center">
        <div
          className={`flex ${
            direction === "right" ? "flex-row" : "flex-row-reverse"
          } justify-center gap-12`}
        >
          <div className="">
            <div className="">
              <img
                src={img}
                alt="..."
                className="w-60 h-96 object-cover rounded-lg shadow-xl transform"
              />
            </div>
          </div>
          <div className="w-full md:w-5/12 flex align-center items-end items-center">
            <div className="p-4 pt-6 md:p-0">
              <h2 className="text-2xl font-semibold text-gray-800 mt-0 mb-2">
                {name}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-gray-700">
                {description}
              </p>
              <ul class="mt-6 list-none">
                <li class="py-2">
                  <div class="flex items-center">
                    <span class="inline-flex text-center rounded-full mr-3 items-center justify-center text-sm w-8 h-8 text-pink-500 bg-pink-200">
                      <CubeTransparentIcon className="p-2" />
                    </span>
                    <h6 class="text-md text-gray-700">
                      Dedicated entrepreneur
                    </h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <span class="inline-flex text-center rounded-full mr-3 items-center justify-center text-sm w-8 h-8 text-emerald-500 bg-emerald-200">
                      <GlobeAsiaAustraliaIcon className="p-2" />
                    </span>
                    <h6 class="text-md text-gray-700">
                      Urban city exploration
                    </h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <span class="inline-flex text-center rounded-full mr-3 items-center justify-center text-sm w-8 h-8 text-red-500 bg-red-200">
                      <Cog6ToothIcon className="p-2" />
                    </span>
                    <h6 class="text-md text-gray-700">
                      Active on Facebook since 2015
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamInfoCard;
