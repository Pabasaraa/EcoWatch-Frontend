import React, { useState } from "react";
import axios from "axios";

const WildlifeUpload = () => {
  const BACKEND_END_POINT = process.env.REACT_APP_BACKEND_END_POINT;
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [RWidthPadding, setRWidthPadding] = useState(20);
  const [LWidthPadding, setLWidthPadding] = useState(20);
  const [UHeightPadding, setUHeightPadding] = useState(20);
  const [DHeightPadding, setDHeightPadding] = useState(20);
  const [isUploading, setIsUploading] = useState(false);

  const onProceed = async () => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("location", location);
    formData.append("date", date);
    formData.append("time", time);
    formData.append("R_width_padding", RWidthPadding);
    formData.append("L_width_padding", LWidthPadding);
    formData.append("U_height_padding", UHeightPadding);
    formData.append("D_height_padding", DHeightPadding);

    try {
      const response = await axios.post(
        `${BACKEND_END_POINT}/wildlife/upload`,
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="number"
        placeholder="R_width_padding"
        value={RWidthPadding}
        onChange={(e) => setRWidthPadding(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="L_width_padding"
        value={LWidthPadding}
        onChange={(e) => setLWidthPadding(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="U_height_padding"
        value={UHeightPadding}
        onChange={(e) => setUHeightPadding(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="D_height_padding"
        value={DHeightPadding}
        onChange={(e) => setDHeightPadding(Number(e.target.value))}
      />
      <button onClick={onProceed} disabled={isUploading}>
        Upload
      </button>
      {isUploading && <p>Uploading...</p>}
    </div>
  );
};

export default WildlifeUpload;
