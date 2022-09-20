import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TollListContainer from "./TollList/TollList.container";
import VehicleListContainer from "./VehicleList/VehicleList.container";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tollList" element={<TollListContainer />} />
        <Route path="/" element={<VehicleListContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
