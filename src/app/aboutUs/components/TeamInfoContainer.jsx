import React from "react";
import TeamInfoCard from "./TeamInfoCard";

const TeamInfoContainer = () => {
  const description =
    "Artist is a term applied to a person who engages in an activity deemed to be an art. An artist also may be defined unofficially as a person should is one who expresses him or herself through a medium.";

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <p className="text-3xl font-semibold text-gray-800">Our Team</p>
          <p className="text-md tracking-wide text-neutral-500 leading-relaxed">
            We aim high at being focused on building relationships with
            community. Using our creative gifts drives this foundation.
          </p>
        </div>
        <TeamInfoCard
          name={"Withana W. A. S. P."}
          description={description}
          img={
            "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
          }
          direction={"right"}
        />
        <TeamInfoCard
          name={"Samarawickrama K. K. R. S. D."}
          description={description}
          img={
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          }
          direction={"left"}
        />
        <TeamInfoCard
          name={"Kulasekara D. C. V."}
          description={description}
          img={
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          direction={"right"}
        />
        <TeamInfoCard
          name={"Munasinghe M. G. P."}
          description={description}
          img={
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          }
          direction={"left"}
        />
      </div>
    </>
  );
};

export default TeamInfoContainer;
