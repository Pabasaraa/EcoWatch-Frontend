import { BrowserRouter, Route, Routes } from "react-router-dom";
import routerPaths from "./constants/routerPaths";
import Layout from "./app/layout/Layout";
import Home from "./app/home/Home";
import Tools from "./app/tools/Tools";
import AboutUs from "./app/aboutUs/AboutUs";
import ContactUs from "./app/contactUs/ContactUs";
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
          <Route path={routerPaths.ABOUT_US} element={<AboutUs />} />
          <Route path={routerPaths.CONTACT_US} element={<ContactUs />} />
          <Route
            path={routerPaths.DEFORESTATION_WATCH}
            element={<DeforestationWatch />}
          />
          <Route
            path={`${routerPaths.DEFORESTATION_PREDICTION_PROCESS}/:id`}
            element={<PredictionProcess />}
          />
          <Route
            path={`${routerPaths.DEFORESTATION_PREDICTION_RESULT}/:id`}
            element={<PredictionResult />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
