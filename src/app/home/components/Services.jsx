import React from "react";
import { useNavigate } from "react-router-dom";
import servicesList from "./servicesList";

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full justify-center my-12">
        <div className="flex flex-col w-full lg:w-2/3 gap-10">
          <div className="flex flex-col w-full items-center gap-4">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-neutral-800">
              Our Services
            </p>
            <hr className="w-2/3 border-neutral-200" />
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {servicesList.map((service) => (
              <div
                key={service.title}
                className="flex flex-col w-full sm:w-1/2 md:w-full gap-6 px-4 py-6 items-center text-center rounded-xl cursor-pointer hover:bg-white hover:shadow-lg transition duration-500 ease-in-out"
                onClick={() => navigate(service.path)}
              >
                <div className="w-32">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-auto object-scale-down"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-semibold text-neutral-800">
                    {service.title}
                  </p>
                  <p className="text-sm text-neutral-500 leading-normal tracking-wider">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
