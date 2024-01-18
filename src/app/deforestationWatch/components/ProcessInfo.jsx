import React from "react";
import { useNavigate } from "react-router-dom";
import routerPaths from "../../../constants/routerPaths";

const ProcessInfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col w-full h-full justify-center items-center mb-8">
        <div className="flex flex-col w-full md:w-5/6 justify-center gap-8">
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-center text-neutral-500">
              Basic Information & Status
            </p>
            <hr className="border-1 border-neutral-200 w-1/2 mx-auto my-4" />
          </div>
          <div className="flex w-full justify-center">
            <div className="flex flex-row w-full lg:w-2/3 justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-400">
                  File Name
                </p>
                <p className="text-md font-semibold text-neutral-700">
                  USGS_LPC_SC_SavannahPeeDee_2019_B19_10690821.laz
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-400">
                  File Size
                </p>
                <p className="text-md font-semibold text-neutral-700">2.1 GB</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border border-neutral-200 rounded-md px-4 py-2">
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-sm font-semibold text-neutral-400 text-start">
                    Process Overview
                  </th>
                  <th className="px-4 py-2 text-sm font-semibold text-neutral-400 text-start">
                    Progress
                  </th>
                  <th className="px-4 py-2 text-sm font-semibold text-neutral-400 text-start">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-2 text-neutral-700">
                    Converting
                    ‘USGS_LPC_SC_SavannahPeeDee_2019_B19_10690821.laz’ to LAS
                  </td>
                  <td className="px-4 py-2 text-neutral-700">on-going</td>
                  <td className="px-4 py-2 text-neutral-700">
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      viewBox="0 0 50 50"
                    >
                      <circle
                        className="stroke-current text-green-600"
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        strokeWidth="5"
                        strokeDasharray="90, 150"
                        strokeDashoffset="-35"
                      ></circle>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <button
              className="bg-green-600 text-white font-semibold rounded-md px-8 py-2 hover:bg-green-700 transition duration-300 ease-in-out"
              onClick={() =>
                navigate(routerPaths.DEFORESTATION_PREDICTION_RESULT)
              }
            >
              Result
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessInfo;
