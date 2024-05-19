import React, { useState, useRef } from "react";
import { FaFileContract } from "react-icons/fa";
import Hero from "./components/Hero";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import routerPaths from "../../constants/routerPaths";


const File = () => {
  const navigate = useNavigate();

  return (
     <>
<div className="flex flex-col gap-8">
<Hero />
     <div className="flex flex-col w-full h-full justify-center items-center mb-8">
   
       <div className="flex flex-col w-full md:w-5/6 justify-center gap-8">
         <div className="flex flex-col">
           <p className="text-lg font-semibold text-center text-gray-800">Upload a file
           </p>
          <hr className="border-1 border-neutral-200 w-1/2 mx-auto my-4" />
         </div>
        <div className="flex flex-col gap-2 mx-4">
          <div
              className="flex flex-col w-full h-full justify-center items-center border-2 border-dashed border-green-500 border-opacity-50 py-6 rounded-lg" 
            >
              <div className="flex flex-col w-full md:w-5/6 justify-center items-center gap-12">
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div className="flex flex-col items-center">
                    <FaFileContract className="h-12 w-12 text-green-600 mb-2" />
                    <p className="text-md font-semibold text-center text-gray-800">
                    Go to USBIM to upload LAZ file
                    </p>
                  </div>
                  <div>
                  <button
  className="bg-white text-md text-green-600 border border-green-600 font-semibold rounded-md px-4 py-2 hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
  onClick={() => window.open('https://cloud.usbim.com/home/workspaces?_gl=1*c6nq8e*_gcl_au*ODY1NTgyMzIyLjE3MTU3NzE5ODAuMTQ0ODk4Mzc2MC4xNzE2MTE0ODQ5LjE3MTYxMTQ4NTE.*_ga*MTA0MzA5NjA1LjE3MDg0OTg1NDA.*_ga_K4Y50QD36K*MTcxNjExNDg0NC4xOS4xLjE3MTYxMTQ4OTguMC4wLjA.&pagina=https%3A%2F%2Fwww.accasoftware.com%2Fen%2Fbim-collaboration-platform&workspace_id=731206&folder_id=5167343', '_blank')}
>
  USBIM
</button>

                    <input
                      type="file"
                      className="hidden"
                      accept=".laz,.las,.lasd,.tiff,.png,.jpg"
                    />
                  </div>
                </div>
                <div>
                  <ul className="list-disc list-inside">
                    <li className="text-xs text-neutral-400">
                    If we want to upload LAZ file, click the above button
                    </li>
                    <li className="text-xs text-neutral-400">
                      Maximum file size is 150MB
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-neutral-400">
                By uploading a file you agree to the{" "}
                <span className="text-green-500 cursor-pointer hover:underline">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-green-500 cursor-pointer hover:underline">
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>
       
            <div className="flex flex-row justify-center">
              <div className="flex flex-row w-full py-2 px-4 mx-4 justify-between bg-neutral-100 rounded-lg lg:w-3/4 xl:w-1/2">
              
              </div>
            </div>
        
          <div className="flex flex-col w-full h-full justify-center items-center">
          <button
              className="bg-green-600 text-white font-semibold rounded-md px-8 py-2 hover:bg-green-700 transition duration-300 ease-in-out"
              onClick={() => navigate(routerPaths.FOREST_TYPE_WATCH)}
            >
              {/* <ArrowLongLeftIcon className="h-5 w-5" /> */}
              continue
            </button>
          </div>
        </div>
        </div>
      </div>
    
    </>
  );
};

export default File;

