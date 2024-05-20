import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import routerPaths from "../../constants/routerPaths";

const HealthPredictionResult = () => {
  const BACKEND_END_POINT = process.env.REACT_APP_BACKEND_END_POINT;
  const navigate = useNavigate();
  const { id } = useParams();
  const [fileName, setFileName] = useState(null);
  const [inputImg, setInputImg] = useState(null);
  const [biomassDensity, setBiomassDensity] = useState(null);
  const [carbonDensity, setCarbonDensity] = useState(null);
  const [ECS, setECS] = useState(null);
  const [sumBiomass, setSumBiomass] = useState(null);
  const [totalAreaKm2, setTotalAreaKm2] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACKEND_END_POINT}/ecohealth/results/${id}`)
      .then((response) => {
        console.log(response.data);
        setFileName(response.data.Results.filename);
        setInputImg(response.data.Results.input_img);
        setBiomassDensity(response.data.Results.biomass_density);
        setCarbonDensity(response.data.Results.carbon_density);
        setECS(response.data.Results.estimated_carbon_storage);
        setSumBiomass(response.data.Results.sum_biomass);
        setTotalAreaKm2(response.data.Results.totalAreaKm2);
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
              Eco Health Monitor
            </p>
            <hr className="border-1 border-neutral-200 w-1/2 mx-auto my-4" />
          </div>
          <div className="flex flex-col gap-2 border border-neutral-200 rounded-md px-4 py-2">
            <p>{fileName}</p><br></br>
            <p><b>Estimated carbon Storage :</b> {ECS} kg</p>
            <p><b>Sum of Biomass :</b> {sumBiomass} kg</p><br></br>
            
            <p><b>Biomass Density :</b> {biomassDensity} kg/m2</p>
            <p><b>Carbon Density :</b> {carbonDensity} kg/m2</p>

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

export default HealthPredictionResult;
