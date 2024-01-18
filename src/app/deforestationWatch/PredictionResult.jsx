import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import originalInput from "./assets/original-input.png";
import predictionMask from "./assets/prediction-mask.png";
import routerPaths from "../../constants/routerPaths";

const PredictionResult = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col w-full h-full justify-center items-center my-8">
        <div className="flex flex-col w-full md:w-5/6 justify-center gap-4">
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-center text-neutral-500">
              Deforestation Prediction Results
            </p>
            <hr className="border-1 border-neutral-200 w-1/2 mx-auto my-4" />
          </div>
          <div className="flex w-full justify-center">
            <div className="flex flex-col w-full lg:w-2/3 gap-3">
              <p className="text-sm font-semibold text-neutral-400">
                Overview:
              </p>
              <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col text-center gap-1">
                  <img
                    src={originalInput}
                    alt="original input"
                    className="w-80 h-auto"
                  />
                  <p className="text-sm text-neutral-400">
                    Rasterized Original Input
                  </p>
                </div>
                <div className="flex flex-col text-center gap-1">
                  <img
                    src={predictionMask}
                    alt="original input"
                    className="w-80 h-auto"
                  />
                  <p className="text-sm text-neutral-400">Prediction Mask</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border border-neutral-200 rounded-md px-4 py-2">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-neutral-400">
                  Quantitative Analysis:
                </p>
                <hr className="border-1 border-neutral-200 w-full my-2" />
              </div>

              <div className="flex flex-row gap-10 w-full justify-stretch">
                <div className="basis-1/2 px-4">
                  <ul className="list-disc list-inside">
                    <li className="flex text-md text-neutral-600 font-semibold justify-between mb-1">
                      <p>Remaining Forest Area</p>
                      <p>40%</p>
                    </li>
                    <li className="flex flex-col text-md text-neutral-600 font-semibold gap-1 mb-1">
                      <p className="flex w-full justify-between">
                        <span>Deforested Area</span> <span>30%</span>
                      </p>
                      <ul className="list-disc list-inside pl-5">
                        <li className="flex text-md text-neutral-600 font-semibold justify-between mb-0.5">
                          <p>Naturally Degraded Area</p>
                          <p>10%</p>
                        </li>
                        <li className="flex text-md text-neutral-600 font-semibold justify-between mb-0.5">
                          <p>Cultivation Area</p>
                          <p>10%</p>
                        </li>
                        <li className="flex text-md text-neutral-600 font-semibold justify-between mb-0.5">
                          <p>Residential Area</p>
                          <p>5%</p>
                        </li>
                        <li className="flex text-md text-neutral-600 font-semibold justify-between mb-0.5">
                          <p>Other</p>
                          <p>5%</p>
                        </li>
                      </ul>
                    </li>
                    <li className="flex text-md text-neutral-600 font-semibold justify-between mb-1">
                      <p>Unclassified</p>
                      <p>30%</p>
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2">
                  <img
                    src={predictionMask}
                    alt="original input"
                    className="w-80 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <button
              className="flex font-semibold text-green-600 items-center gap-2"
              onClick={() => navigate(routerPaths.HOME)}
            >
              <ArrowLongLeftIcon className="h-5 w-5" />
              Return
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PredictionResult;
