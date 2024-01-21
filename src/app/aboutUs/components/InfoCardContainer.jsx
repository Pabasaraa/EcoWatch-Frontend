import React from "react";
import InfoCard from "./InfoCard";

import {
  CubeTransparentIcon,
  GlobeAsiaAustraliaIcon,
  Cog6ToothIcon,
} from "@heroicons/react/20/solid";

const InfoCardContainer = () => {
  return (
    <div className="flex justify-center mt-4 mb-4">
      <div className="flex w-full mx-8 lg:w-4/5 xl:w-3/5 justify-between items-start gap-16">
        <InfoCard
          heading="Social Conversation"
          content="We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand."
          icon={<Cog6ToothIcon className="h-6 w-6 text-blue-600" />}
        />
        <InfoCard
          heading="Analyze Performance"
          content="Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder."
          icon={<CubeTransparentIcon className="h-6 w-6 text-green-600" />}
        />
        <InfoCard
          heading="Measure Conversions"
          content="What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out."
          icon={<GlobeAsiaAustraliaIcon className="h-6 w-6 text-orange-600" />}
        />
      </div>
    </div>
  );
};

export default InfoCardContainer;
