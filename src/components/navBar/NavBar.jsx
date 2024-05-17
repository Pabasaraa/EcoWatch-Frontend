import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import navLinks from "./navLinks";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full h-16 justify-center pt-5 shadow-md mb-2">
        <div className="flex flex-row w-5/6 justify-between">
          <div className="text-xl text-green-500 font-semibold cursor-pointer">
            EcoWatch
          </div>
          <div className="flex flex-row gap-6 items-start h-full text-neutral-400">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className={`text-md h-full cursor-pointer font-semibold hover:text-neutral-500 transition duration-300 ease-in-out ${
                  location.pathname === link.path &&
                  "border-b-2 border-green-500 text-green-600 hover:text-green-500"
                }`}
                onClick={() => navigate(link.path)}
              >
                {link.title}
              </div>
            ))}
          </div>
          <div className="flex items-start">
            <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
