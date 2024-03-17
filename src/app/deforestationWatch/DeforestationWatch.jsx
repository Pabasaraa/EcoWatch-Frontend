import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Hero from "./components/Hero";
import FileUpload from "./components/FileUpload";
import routerPaths from "../../constants/routerPaths";
import { getFileSize } from "./util/fileSize";

const DeforestationWatch = () => {
  const BACKEND_END_POINT = process.env.REACT_APP_BACKEND_END_POINT;
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [taskId, setTaskId] = useState(null);

  useEffect(() => {
    taskId &&
      navigate(`${routerPaths.DEFORESTATION_PREDICTION_PROCESS}/${taskId}`);
  }, [taskId]); // eslint-disable-line react-hooks/exhaustive-deps

  const onProceed = async (input) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", input);
    localStorage.setItem("fileName", input.name);
    localStorage.setItem("fileSize", getFileSize(input.size));

    await axios
      .post(`${BACKEND_END_POINT}/deforestation/predict`, formData)
      .then((response) => {
        setTaskId(response.data.task_id);
        setIsUploading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="flex flex-col gap-8">
        <Hero />
        <FileUpload
          file={file}
          setFile={setFile}
          proceed={onProceed}
          isUploading={isUploading}
        />
      </div>
    </>
  );
};

export default DeforestationWatch;
