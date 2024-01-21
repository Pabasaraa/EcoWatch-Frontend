import React from "react";
import InfoCard from "./InfoCard";

import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  UserCircleIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";

const InfoCardContainer = () => {
  return (
    <div className="flex flex-grow items-center justify-center mt-4">
      <div className="flex w-full mx-8 lg:w-4/5 xl:w-3/5 justify-between items-center">
        <InfoCard
          heading="Address"
          content="SLIIT Malabe, Sri Lanka"
          icon={<MapPinIcon className="h-6 w-6 text-white" />}
        />
        <div className="border-l-2 border-gray-200 h-[12rem]"></div>
        <InfoCard
          heading="Email"
          content="hello@gmail.com"
          icon={<EnvelopeIcon className="h-6 w-6 text-white" />}
        />
        <div className="border-l-2 border-gray-200 h-[12rem]"></div>
        <InfoCard
          heading="Phone"
          content="+94 77 953 0268"
          icon={<DevicePhoneMobileIcon className="h-6 w-6 text-white" />}
        />
        <div className="border-l-2 border-gray-200 h-[12rem]"></div>
        <InfoCard
          heading="Contact"
          content="James Bond"
          icon={<UserCircleIcon className="h-6 w-6 text-white" />}
        />
      </div>
    </div>
  );
};

export default InfoCardContainer;
