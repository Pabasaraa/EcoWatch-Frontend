// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import routerPaths from "../../../constants/routerPaths";

// const ProcessInfo = ({ taskId, fileName, className, score, inputImg }) => {
//   const navigate = useNavigate();
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (!taskId) {
//         console.error("Task ID is undefined");
//         return;
//       }

//       try {
//         const response = await fetch(
//           `http://localhost:8000/classification/results/${taskId}`
//         );
//         const data = await response.json();
//         console.log("Received data:", data);
//         setResult(data);
//       } catch (error) {
//         console.error("Error fetching results:", error);
//       }
//     };

//     fetchResults();
//   }, [taskId]);

//   return (
//     <>
//       <div className="flex flex-col w-full h-full justify-center items-center mb-8">
//         <div className="flex flex-col w-full md:w-5/6 justify-center gap-8">
//           <div className="flex flex-col">
//             <p className="text-lg font-semibold text-center text-neutral-500">
//               Basic Information & Status
//             </p>
//             <hr className="border-1 border-neutral-200 w-1/2 mx-auto my-4" />
//           </div>
//           <div className="flex w-full justify-center">
//             <div className="flex flex-row w-full lg:w-2/3 justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-neutral-400">
//                   File Name
//                 </p>
//                 <p className="text-md font-semibold text-neutral-700">
//                   {fileName}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-neutral-400">
//                   Class Name
//                 </p>
//                 <p className="text-md font-semibold text-neutral-700">
//                   {className}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex w-full justify-center">
//             <div className="flex flex-row w-full lg:w-2/3 justify-between">
//               <div>
//                 <p className="text-sm font-semibold text-neutral-400">
//                   Score
//                 </p>
//                 <p className="text-md font-semibold text-neutral-700">
//                   {score}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-neutral-400">
//                   Input Image
//                 </p>
//                 <img src={`data:image/jpeg;base64,${inputImg}`} alt="Uploaded" className="mt-4 max-w-full h-auto" />
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col w-full h-full justify-center items-center">
          
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProcessInfo;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import routerPaths from "../../../constants/routerPaths";

// const ProcessInfo = ({ taskId, fileName, className, score, inputImg }) => {
//   const navigate = useNavigate();
//   const [result, setResult] = useState(null);

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (!taskId) {
//         console.error("Task ID is undefined");
//         return;
//       }

//       try {
//         const response = await fetch(
//           `http://localhost:8000/classification/results/${taskId}`
//         );
//         const data = await response.json();
//         console.log("Received data:", data);
//         setResult(data);
//       } catch (error) {
//         console.error("Error fetching results:", error);
//       }
//     };

//     fetchResults();
//   }, [taskId]);

//   return (
//     <>
//       {result && (
//         <div className="flex flex-col w-full h-full justify-center items-center mb-8">
//           <div className="flex flex-col w-full md:w-5/6 justify-center gap-8">
//             <div className="flex flex-col">
//               <p className="text-lg font-semibold text-center text-neutral-500">
//                 Basic Information & Status
//               </p>
//               <hr className="border-1 border-neutral-200 w-1/2 mx-auto my-4" />
//             </div>
//             <div className="flex w-full justify-center">
//               <div className="flex flex-row w-full lg:w-2/3 justify-between">
//                 <div>
//                   <p className="text-sm font-semibold text-neutral-400">
//                     File Name
//                   </p>
//                   <p className="text-md font-semibold text-neutral-700">
//                     {fileName}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-neutral-400">
//                     Class Name
//                   </p>
//                   <p className="text-md font-semibold text-neutral-700">
//                     {className}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-neutral-400">
//                     Score
//                   </p>
//                   <p className="text-md font-semibold text-neutral-700">
//                     {score}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {inputImg && (
//               <div className="flex justify-center">
//                 <img
//                   src={`data:image/jpeg;base64,${inputImg}`}
//                   alt="Uploaded"
//                   className="mt-4 max-w-full h-auto"
//                 />
//               </div>
//             )}
//             <div className="flex flex-col w-full h-full justify-center items-center">
//               <button
//                 className="bg-green-600 text-white font-semibold rounded-md px-8 py-2 hover:bg-green-700 transition duration-300 ease-in-out"
//                 onClick={() => navigate(routerPaths.FOREST_TYPE_WATCH)}
//               >
//                 Result
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProcessInfo;

import React from "react";
import { useNavigate } from "react-router-dom";
import routerPaths from "../../../constants/routerPaths";

const ProcessInfo = ({ className, score, inputImg }) => {
  const navigate = useNavigate();

  // Dummy data
  const dummyClassName = "DryForest";
  const dummyScore = 9.8;

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
                  {className || dummyClassName}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-400">
                  Score
                </p>
                <p className="text-md font-semibold text-neutral-700">
                  {score !== undefined ? score.toFixed(1) : dummyScore.toFixed(1)}
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
                <img src={`data:image/jpeg;base64,${inputImg}`} alt="Uploaded" className="mt-4 max-w-full h-auto mx-auto" style={{ display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Beautiful Result Button */}
      <div className="flex justify-center">
    
      </div>
    </>
  );
};

export default ProcessInfo;
