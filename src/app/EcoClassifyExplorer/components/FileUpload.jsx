import React, { useState, useRef } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import routerPaths from "../../../constants/routerPaths";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { getFileSize } from "../util/fileSize";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const onButtonClick = () => {
    fileInputRef.current.click();
  };

  const onDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    setFile(uploadedFile);
    setIsDragOver(false);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleProceed = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
  
      try {
        const response = await fetch("http://localhost:8000/classification/predict", {
          method: "POST",
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          navigate(`${routerPaths.FOREST_TYPE_RESULT}/${data.task_id}`);
        } else {
          console.error("Failed to upload file:", response.statusText);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
  

  return (
     <>
     <div className="flex flex-col w-full h-full justify-center items-center mb-8">
       <div className="flex flex-col w-full md:w-5/6 justify-center gap-8">
         <div className="flex flex-col">
           <p className="text-lg font-semibold text-center text-gray-800">Upload a file
           </p>
          <hr className="border-1 border-neutral-200 w-1/2 mx-auto my-4" />
         </div>
        <div className="flex flex-col gap-2 mx-4">
          <div
              className={`flex flex-col w-full h-full justify-center items-center border-2 border-dashed border-green-500 border-opacity-50 py-6 rounded-lg ${
                isDragOver ? "bg-neutral-100" : ""
            }`}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
            >
              <div className="flex flex-col w-full md:w-5/6 justify-center items-center gap-12">
                <div className="flex flex-col gap-4 justify-center items-center">
                  <div className="flex flex-col items-center">
                    <CloudArrowUpIcon className="h-12 w-12 text-green-600 mb-2" />
                    <p className="text-md font-semibold text-center text-gray-800">
                      Drag and drop to upload the file or
                    </p>
                  </div>
                  <div>
                    <button
                      className="bg-white text-md text-green-600 border border-green-600 font-semibold rounded-md px-4 py-2 hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
                      onClick={onButtonClick}
                    >
                      Browse Computer
                    </button>
                    <input
                      type="file"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={onFileChange}
                      accept=".laz,.las,.lasd,.tiff,.png,.jpg"
                    />
                  </div>
                </div>
                <div>
                  <ul className="list-disc list-inside">
                    <li className="text-xs text-neutral-400">
                      You can upload .LAZ, .LAS, .LASD, .TIFF, .PNG, or .JPG
                      files
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
          {file && (
            <div className="flex flex-row justify-center">
              <div className="flex flex-row w-full py-2 px-4 mx-4 justify-between bg-neutral-100 rounded-lg lg:w-3/4 xl:w-1/2">
                <div className="flex flex-col items-start sm:flex-row sm:gap-4 sm:items-center">
                  <p className="text-sm font-semibold text-center text-gray-800">
                    {file.name}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {getFileSize(file.size)}
                  </p>
                </div>
                <div
                  className="w-8 h-8 rounded-full cursor-pointer hover:bg-white p-2"
                  title="Remove file"
                  onClick={() => setFile(null)}
                >
                  <svg
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col w-full h-full justify-center items-center">
            <button
              className={`bg-green-600 text-white font-semibold rounded-md px-8 py-2 hover:bg-green-700 transition duration-300 ease-in-out ${
                file ? "" : "opacity-50 cursor-not-allowed"
              }`}
              onClick={() =>
                navigate(routerPaths.FOREST_TYPE_RESULT)
              }
            >
              PROCEED
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;

