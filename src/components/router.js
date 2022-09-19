import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./Home/Home.container";
import TollListContainer from "./TollList/TollList.container";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tollList" element={<TollListContainer />} />
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
