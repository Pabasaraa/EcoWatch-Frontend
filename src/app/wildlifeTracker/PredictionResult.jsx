import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import {
  getTheTotal,
  convertToPercentage,
  calculateSpecificTotal,
} from "./util/coverageCounter";
import routerPaths from "../../constants/routerPaths";

const PredictionResult = () => {
  const DEFORESTED_AREAS_KEYS = [1, 3, 4, 5];
  const BACKEND_END_POINT = process.env.REACT_APP_BACKEND_END_POINT;
  const navigate = useNavigate();
  const { id } = useParams();
  const [fileName, setFileName] = useState(null);
  const [inputImg, setInputImg] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [totalPoints, setTotalPoints] = useState(0);
  const [points, setPoints] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACKEND_END_POINT}/deforestation/results/${id}`)
      .then((response) => {
        console.log(response.data);
        setFileName(response.data.Results.filename);
        setInputImg(response.data.Results.input_img);
        setPredictionResult(response.data.Results.prediction);
        setPoints(response.data.Results.value);
        setTotalPoints(getTheTotal(response.data.Results.value));
        console.log(getTheTotal(response.data.Results.value));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

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
              <div className="flex flex-row w-full justify-around pt-2 pb-4">
                <div className="flex flex-col text-center gap-1">
                  {inputImg ? (
                    <img
                      src={`data:image/jpeg;base64,${inputImg}`}
                      alt="original input"
                      className="w-96 h-auto"
                    />
                  ) : (
                    <div className="w-96 h-96 bg-neutral-100 rounded-md flex justify-center items-center">
                      <p className="text-lg text-neutral-500">Loading...</p>
                    </div>
                  )}
                  <p className="text-sm text-neutral-400 pt-2">
                    Rasterized Original Input
                  </p>
                </div>
                <div className="flex flex-col text-center gap-1">
                  {predictionResult ? (
                    <img
                      src={`data:image/jpeg;base64,${predictionResult}`}
                      alt="segmented prediction"
                      className="w-96 h-auto"
                    />
                  ) : (
                    <div className="w-96 h-96 bg-neutral-100 rounded-md flex justify-center items-center">
                      <p className="text-lg text-neutral-500">Loading...</p>
                    </div>
                  )}
                  <p className="text-sm text-neutral-400 pt-2">
                    Segmented Prediction
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 border border-neutral-200 rounded-md px-4 py-2">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <p className="text-sm font-semibold text-neutral-400 py-2">
                  Quantitative Analysis:
                </p>
                <hr className="border-1 border-neutral-200 w-full my-2" />
              </div>

              <div className="flex flex-row gap-10 w-full justify-stretch py-4">
                <div className="basis-1/2 px-4">
                  <ul className="list-disc list-inside">
                    <li className="flex text-md text-neutral-600 font-semibold justify-between mb-1">
                      <p>Remaining Forest Area</p>
                      <p>
                        {points && convertToPercentage(points[2], totalPoints)}
                        {" %"}
                      </p>
                    </li>
                    <li className="flex flex-col text-md text-neutral-600 font-semibold gap-1 mb-1">
                      <p className="flex w-full justify-between">
                        <span>Deforested Area</span>{" "}
                        <span>
                          {points &&
                            calculateSpecificTotal(
                              points,
                              DEFORESTED_AREAS_KEYS,
                              totalPoints
                            )}
                          %
                        </span>
                      </p>
                      <ul className="list-disc list-inside pl-5">
                        <li className="flex text-md text-neutral-600 font-semibold justify-between mb-0.5">
                          <p>Naturally Degraded Area</p>
                          <p>
                            {points &&
                              convertToPercentage(points[3], totalPoints)}
                            {" %"}
                          </p>
                        </li>
                        <li className="flex text-md text-neutral-600 font-semibold justify-between mb-0.5">
                          <p>Cultivation Area</p>
                          <p>
                            {points &&
                              convertToPercentage(points[1], totalPoints)}
                            {" %"}
                          </p>
                        </li>
                        <li className="flex text-md text-neutral-600 font-semibold justify-between mb-0.5">
                          <p>Residential Area</p>
                          <p>
                            {points &&
                              convertToPercentage(points[5], totalPoints)}
                            {" %"}
                          </p>
                        </li>
                        <li className="flex text-md text-neutral-600 font-semibold justify-between mb-0.5">
                          <p>Other</p>
                          <p>
                            {points &&
                              convertToPercentage(points[4], totalPoints)}
                            {" %"}
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li className="flex text-md text-neutral-600 font-semibold justify-between mb-1">
                      <p>Unclassified</p>
                      <p>
                        {points && convertToPercentage(points[0], totalPoints)}%
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="basis-1/2 flex justify-center">
                  {predictionResult ? (
                    <img
                      src={`data:image/jpeg;base64,${predictionResult}`}
                      alt="original input"
                      className="w-80 h-auto"
                    />
                  ) : (
                    <div className="w-80 h-80 bg-neutral-100 rounded-md flex justify-center items-center">
                      <p className="text-lg text-neutral-500">Loading...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center mt-6">
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
