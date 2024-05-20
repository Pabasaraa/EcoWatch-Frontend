import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WildlifeTrackResult = () => {
  const BACKEND_END_POINT = process.env.REACT_APP_BACKEND_END_POINT;
  const { id } = useParams();
  const [videoSrc, setVideoSrc] = useState("");
  const [videoName, setVideoName] = useState("");
  const [excelData, setExcelData] = useState(null);
  const [outputVideoSrc, setOutputVideoSrc] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `${BACKEND_END_POINT}/wildlife/results/video/input/${id}`
        );
        const blob = await response.blob();
        const videoUrl = URL.createObjectURL(blob);
        setVideoSrc(videoUrl);
        const contentDisposition = response.headers.get("content-disposition");
        const filenameMatch = contentDisposition.match(/filename="(.+)"/);
        const filename = filenameMatch ? filenameMatch[1] : "video.mp4";
        setVideoName(filename);
      } catch (error) {
        console.error("Error fetching the video:", error);
      }
    };

    const fetchOutputVideo = async () => {
      try {
        const response = await fetch(
          `${BACKEND_END_POINT}/wildlife/results/video/output/${id}`
        );
        const blob = await response.blob();
        const videoUrl = URL.createObjectURL(blob);
        setOutputVideoSrc(videoUrl);
      } catch (error) {
        console.error("Error fetching the video:", error);
      }
    };

    const fetchExcel = async () => {
      try {
        const response = await fetch(
          `${BACKEND_END_POINT}/wildlife/results/csv/${id}`
        );
        const blob = await response.blob();
        setExcelData(blob);
      } catch (error) {
        console.error("Error fetching Excel:", error);
      }
    };

    fetchVideo();
    fetchExcel();
    fetchOutputVideo();
  }, [id, BACKEND_END_POINT]);

  const downloadVideo = () => {
    if (outputVideoSrc) {
      const link = document.createElement("a");
      link.href = outputVideoSrc;
      link.setAttribute("download", videoName);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  };

  const downloadExcel = () => {
    if (excelData) {
      const url = window.URL.createObjectURL(new Blob([excelData]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Track_data.xlsx");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-full justify-center items-center my-8">
        <div className="flex flex-col w-full md:w-5/6 justify-center items-center gap-4">
          <div className="flex flex-col">
            <p className="text-lg font-semibold text-center text-neutral-500">
              Wildlife Tracker Results
            </p>
            <hr className="border-1 border-neutral-200 w-full mx-auto my-4" />
          </div>
          <div>
            {videoSrc ? (
              <div className="flex flex-col">
                <video width="600" controls>
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <button
                  className={`flex gap-2 mt-5 justify-center text-sm items-center bg-blue-600 text-white font-semibold rounded-md px-6 py-2 hover:bg-blue-700 transition duration-300 ease-in-out`}
                  onClick={downloadVideo}
                >
                  <span>DOWNLOAD VIDEO</span>
                </button>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          {excelData && (
            <div className="w-1/2 mt-10">
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-start text-neutral-500">
                  Tracked info
                </p>
                <hr className="border-1 border-neutral-200 w-full mx-auto my-4" />
              </div>
              <div className="flex py-3 px-4 items-center justify-between bg-neutral-100 rounded-lg">
                <p className="text-lg font-semibold text-center text-gray-800">
                  Track_data.xlsx
                </p>
                <button
                  className={`flex gap-2 justify-center text-sm items-center bg-green-600 text-white font-semibold rounded-md px-6 py-2 hover:bg-green-700 transition duration-300 ease-in-out`}
                  onClick={downloadExcel}
                >
                  <span>DOWNLOAD EXCEL</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WildlifeTrackResult;
