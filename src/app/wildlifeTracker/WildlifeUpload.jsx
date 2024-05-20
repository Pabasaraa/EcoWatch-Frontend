import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Hero from "./components/Hero";
import FileUpload from "./components/FileUpload";
import routerPaths from "../../constants/routerPaths";

const WildlifeUpload = () => {
  const BACKEND_END_POINT = process.env.REACT_APP_BACKEND_END_POINT;
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [taskId, setTaskId] = useState(null);

  useEffect(() => {
    console.log(taskId);
    taskId && navigate(`${routerPaths.WILDLIFE_TRACKER_RESULT}/${taskId}`);
  }, [taskId]); // eslint-disable-line react-hooks/exhaustive-deps

  const onProceed = async () => {
    if (time && location && date && time) {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("location", location);
      formData.append("date", date);
      formData.append("time", time);

      await axios
        .post(`${BACKEND_END_POINT}/wildlife/upload`, formData)
        .then((response) => {
          setTaskId(response.data.task_id);
          setIsUploading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Fill required fields");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8 mb-10">
        <Hero />
        <FileUpload
          file={file}
          setFile={setFile}
          proceed={onProceed}
          isUploading={isUploading}
        />
        <div className="flex flex-col w-full h-full justify-center items-center mb-8">
          <div className="flex flex-col w-full md:w-5/6 justify-center gap-2 px-4">
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-start text-gray-800">
                Basic Info
              </p>
              <hr className="border-1 border-neutral-200 w-full mx-auto my-4" />
            </div>
            <div className="flex w-full gap-8">
              <div className="flex flex-col gap-2 basis-1/3">
                <p className="text-sm font-semibold text-start text-gray-500">
                  Camera Location/Number
                </p>
                <input
                  type="text"
                  placeholder="Location"
                  defaultValue={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="rounded-lg border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2 basis-1/3">
                <p className="text-sm font-semibold text-start text-gray-500">
                  Recorded Date
                </p>
                <input
                  type="date"
                  defaultValue={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="rounded-lg border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2 basis-1/3">
                <p className="text-sm font-semibold text-start text-gray-500">
                  Recorded Time
                </p>
                <input
                  type="time"
                  defaultValue={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="rounded-lg border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center">
          <button
            className={`flex gap-2 justify-center text-sm items-center bg-green-600 text-white font-semibold rounded-md px-6 py-2 hover:bg-green-700 transition duration-300 ease-in-out ${
              file ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!file || isUploading}
            onClick={onProceed}
          >
            {isUploading ? (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      dur="0.75s"
                      values="0 12 12;360 12 12"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
                <span>UPLOADING</span>
              </>
            ) : (
              <span>PROCEED</span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default WildlifeUpload;
