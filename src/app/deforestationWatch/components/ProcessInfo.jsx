import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import routerPaths from "../../../constants/routerPaths";

const ProcessInfo = () => {
  const { id } = useParams();
  const WS_URL = `ws://localhost:8000/deforestation/ws/${id}`;
  const navigate = useNavigate();
  const [progress, setProgress] = useState(null);
  const [file, setFile] = useState({
    name: "",
    size: "",
  });

  useEffect(() => {
    const fileName = localStorage.getItem("fileName");
    const fileSize = localStorage.getItem("fileSize");
    setFile({
      name: fileName,
      size: fileSize,
    });
  }, []);

  useEffect(() => {
    let socket = null;
    let isMounted = true;

    const start = (WS_URL) => {
      socket = new WebSocket(WS_URL);

      socket.onopen = (e) => {
        console.log("Connected to server");
      };

      socket.onmessage = (e) => {
        const data = JSON.parse(e.data);
        console.log(data.progress);
        setProgress(data.progress);
      };

      socket.onclose = () => {
        if (isMounted) {
          console.log("Connection closed. Reconnecting..");
          socket = null;
          start(WS_URL);
        }
      };
    };

    start(WS_URL);

    return () => {
      isMounted = false;
      if (socket) socket.close();
    };
  }, [id, WS_URL]);

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
                <p className="text-md font-semibold text-neutral-700 pt-2">
                  {file.name ? file.name : "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-400">
                  File Size
                </p>
                <p className="text-md font-semibold text-neutral-700 pt-2">
                  {file.size ? file.size : "N/A"}
                </p>
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
                  <th className="flex px-4 py-2 text-sm font-semibold text-neutral-400 text-start justify-center">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {progress &&
                  progress.map((p, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-neutral-700">{p.status}</td>
                      <td className="flex px-4 py-2 text-neutral-700 justify-center">
                        {p.completed ? (
                          <CheckCircleIcon className="h-6 w-6 text-green-600" />
                        ) : (
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
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <button
              className="bg-green-600 text-white text-sm font-semibold rounded-md px-6 py-2 hover:bg-green-700 transition duration-300 ease-in-out"
              onClick={() =>
                navigate(`${routerPaths.DEFORESTATION_PREDICTION_RESULT}/${id}`)
              }
            >
              RESULTS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessInfo;
