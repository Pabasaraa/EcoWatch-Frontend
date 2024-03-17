import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import routerPaths from "../../../constants/routerPaths";

const ProcessInfo = () => {
  const BACKEND_END_POINT = process.env.REACT_APP_BACKEND_END_POINT;
  const navigate = useNavigate();
  const { id } = useParams();
  const [classState, setClass] = useState(null);
  const [scoreState, setScore] = useState(null);
  const [inputImgState, setInputImg] = useState(null);
  
  useEffect(() => {
    axios
      .get(`${BACKEND_END_POINT}/classification/results/${id}`)
      .then((response) => {
        console.log(response.data);
        setClass(response.data.class);
        setScore(response.data.score);
        setInputImg(response.data.input_img);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

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
                  Class Name
                </p>
                <p className="text-md font-semibold text-neutral-700">
                  {(classState)}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-400">
                  Score
                </p>
                <p className="text-md font-semibold text-neutral-700">
                  {(scoreState)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex flex-row w-full lg:w-2/3 justify-center">
              <div>
                <p className="text-sm font-semibold text-neutral-400">
                  Input Image
                </p>
                <img src={`data:image/jpeg;base64,${inputImgState}`} alt="Uploaded" className="mt-4 max-w-full h-auto mx-auto" style={{ display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="flex justify-center">
        <div className="flex flex-col w-full h-full justify-center items-center mt-6">
          <button
            className="flex font-semibold text-green-600 items-center gap-2"
            onClick={() => navigate(routerPaths.HOME)}
          >
            Return
          </button>
        </div>
      </div>
    </>
  );
};

export default ProcessInfo;
