import { BrowserRouter, Route, Routes } from "react-router-dom";
import routerPaths from "./constants/routerPaths";
import Layout from "./app/layout/Layout";
import Home from "./app/home/Home";
import Tools from "./app/tools/Tools";
import DeforestationWatch from "./app/deforestationWatch/DeforestationWatch";
import PredictionProcess from "./app/deforestationWatch/PredictionProcess";
import PredictionResult from "./app/deforestationWatch/PredictionResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routerPaths.DEFAULT} element={<Layout />}>
          <Route path={routerPaths.HOME} element={<Home />} />
          <Route path={routerPaths.TOOLS} element={<Tools />} />
          <Route
            path={routerPaths.DEFORESTATION_WATCH}
            element={<DeforestationWatch />}
          />
          <Route
            path={routerPaths.DEFORESTATION_PREDICTION_PROCESS}
            element={<PredictionProcess />}
          />
          <Route
            path={routerPaths.DEFORESTATION_PREDICTION_RESULT}
            element={<PredictionResult />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
